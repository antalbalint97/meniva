// import { NextResponse } from 'next/server';
// import { promises as fs } from 'fs';
// import path from 'path';

// const filePath = path.join(process.cwd(), 'data', 'subscribers.json');

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json();

//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
//     }

//     // Ensure subscribers.json exists
//     try {
//       await fs.access(filePath);
//     } catch {
//       await fs.mkdir(path.dirname(filePath), { recursive: true });
//       await fs.writeFile(filePath, JSON.stringify([]));
//     }

//     const data = JSON.parse(await fs.readFile(filePath, 'utf-8'));
//     if (!Array.isArray(data)) {
//       throw new Error('Invalid subscribers file format');
//     }

//     // Prevent duplicates
//     if (!data.includes(email)) {
//       data.push(email);
//       await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//     }

//     console.log(`New subscriber: ${email}`);

//     return NextResponse.json({ success: true });
//   } catch (err: any) {
//     console.error('Subscription error:', err);
//     return NextResponse.json(
//       { error: 'Failed to subscribe' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { getZohoAccessToken } from "@/lib/getZohoAccessToken";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const accessToken = await getZohoAccessToken();

    // Send to Zoho CRM Leads
    const response = await fetch(`${process.env.ZOHO_API_DOMAIN}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Email: email,
            Last_Name: email.split("@")[0], // required field
            Lead_Source: "Website Campaign Strip",
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Zoho CRM error:", data);
      return NextResponse.json({ error: "Zoho CRM failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Subscription error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
