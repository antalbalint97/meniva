export async function getZohoAccessToken(): Promise<string> {
  const response = await fetch(
    `https://accounts.zoho.eu/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
    { method: "POST" }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Zoho token error:", data);
    throw new Error(data.error || "Failed to refresh Zoho token");
  }

  return data.access_token as string;
}
