'use server';
import { google } from "googleapis";

export async function getPrizesSheetData() { 

  const privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64')
  .toString('utf8')
  .replace(/^"|"$/g, '');
  
  const glAuth = await google.auth.getClient({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  const data = await glSheets.spreadsheets.values.get({
    spreadsheetId: process.env.PRIZES_GOOGLE_SHEET_ID,
    range: process.env.PRIZES_GOOGLE_SHEET_RANGE,
  });

  return { data: data.data.values };
}