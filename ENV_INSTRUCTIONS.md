# 🔐 API Configuration Guide

To enable the new API routes (Contact, Subscribe, Hire Me), you need to configure the environment variables.

## 1. Create Environment File

Create a file named `.env.local` in the root of your project (`c:\Users\Administrator\Desktop\avrxt\.env.local`).

## 2. Add Credentials

Copy and paste the following configuration into `.env.local` and fill in your actual credentials:

```bash
# ------------------------------------------------------------------
# 📧 GOOGLE SHEETS & GMAIL API (Contact & Hire Me Forms)
# ------------------------------------------------------------------
# Steps to get these:
# 1. Go to Google Cloud Console (https://console.cloud.google.com)
# 2. Create a Project > Enable "Google Sheets API"
# 3. Create Service Account > Create Key (JSON) > Open JSON
# 4. Copy "client_email" and "private_key"
# 5. Share your spreadsheet with the "client_email" address
# ------------------------------------------------------------------

GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com

# NOTE: The private key must handle newlines correctly. 
# Wrap it in quotes and use \n for newlines as shown below.
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjd7...\n-----END PRIVATE KEY-----\n"

# The ID from your Google Sheet URL: docs.google.com/spreadsheets/d/[THIS-PART]/edit
GOOGLE_SHEET_ID=your-contact-sheet-id
INTAKE_SHEET_ID=your-hire-me-sheet-id

# ------------------------------------------------------------------
# 📨 GMAIL SMTP (Email Notifications)
# ------------------------------------------------------------------
# 1. Go to Google Account > Security > 2-Step Verification > App Passwords
# 2. Generate a new App Password for "Mail"
# ------------------------------------------------------------------

GMAIL_APP_PASSWORD=your-16-char-app-password
ADMIN_GMAIL_ID=your-email@gmail.com  # Where you want to receive alerts

# ------------------------------------------------------------------
# 📬 RESEND (Newsletter Subscription)
# ------------------------------------------------------------------
# 1. Go to Resend (https://resend.com)
# 2. Create API Key
# 3. Verify your domain
# 4. Create an Audience (Contacts List) and get the ID
# ------------------------------------------------------------------

RESEND_API_KEY=re_123456789
RESEND_FROM_EMAIL=onboarding@resend.dev  # Or your verified domain email
RESEND_AUDIENCE_ID=your-audience-id

# ------------------------------------------------------------------
# 🌐 NEXT.JS PUBLIC CONFIG
# ------------------------------------------------------------------

NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 3. Restart Server

After creating `.env.local`, restart your development server:
1. Stop the server (`Ctrl + C`)
2. Run `npm run dev` again.

---
**Security Note:** Never commit `.env.local` to GitHub. It contains secret keys.
