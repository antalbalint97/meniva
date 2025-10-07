// import { NextResponse } from "next/server";
// import { getZohoAccessToken } from "@/lib/getZohoAccessToken";

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json();

//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json({ error: "Invalid email" }, { status: 400 });
//     }

//     const accessToken = await getZohoAccessToken();

//     // Send to Zoho CRM Leads
//     const response = await fetch(`${process.env.ZOHO_API_DOMAIN}/crm/v2/Leads`, {
//       method: "POST",
//       headers: {
//         Authorization: `Zoho-oauthtoken ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             Email: email,
//             Last_Name: email.split("@")[0], // required field
//             Lead_Source: "Website Campaign Strip",
//           },
//         ],
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       console.error("Zoho CRM error:", data);
//       return NextResponse.json({ error: "Zoho CRM failed" }, { status: 500 });
//     }

//     return NextResponse.json({ success: true });
//   } catch (err: any) {
//     console.error("Subscription error:", err);
//     return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { getZohoAccessToken } from "@/lib/getZohoAccessToken";

export const runtime = "nodejs"; // again, ensure it's not Edge

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const accessToken = await getZohoAccessToken();
    const response = await fetch(`${process.env.ZOHO_API_DOMAIN}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [{ Email: email, Last_Name: email.split("@")[0], Lead_Source: "Website" }],
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Zoho CRM error:", data);
      return NextResponse.json({ error: "Zoho CRM failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscription error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
