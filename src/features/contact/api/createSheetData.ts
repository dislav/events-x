'use server';

import { google } from 'googleapis';
import type { ContactFormType } from '../model/contactFormSchema';

export async function createSheetData({
    name,
    phone,
    email,
    message,
}: ContactFormType) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            type: 'service_account',
            project_id: 'affable-audio-484821-f5',
            private_key_id: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY_ID!,
            private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY!.replace(
                /\\n/g,
                '\n'
            ),
            client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL!,
            client_id: '110402273955049714269',
            universe_domain: 'googleapis.com',
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: '1WAr_bb3IZO2oHYFcrSMo-n7B-e2TA71nUeEdtVVVZEc',
            range: 'A1',
            valueInputOption: 'RAW',
            requestBody: {
                values: [
                    [name, phone, email, message, new Date().toISOString()],
                ],
            },
        });

        return { success: true };
    } catch {
        return { success: false };
    }
}
