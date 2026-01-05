# Contact Form SMTP Setup Guide

This guide walks you through setting up the Supabase Edge Function to send contact form emails via SMTP.

## Prerequisites

- [Supabase CLI](https://supabase.com/docs/guides/cli) installed
- [Resend](https://resend.com) account (free tier: 3,000 emails/month)

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Note your **Project URL** (e.g., `https://abcdefgh.supabase.co`)

## Step 2: Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up
2. Navigate to **API Keys** in the dashboard
3. Click "Create API Key"
4. Copy the API key (starts with `re_`)

## Step 3: Set Supabase Secrets

```bash
# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Set environment variables
supabase secrets set RESEND_API_KEY=re_your_api_key_here
supabase secrets set TO_EMAIL=rajanazirul93@gmail.com
```

## Step 4: Deploy the Edge Function

```bash
# Navigate to project directory
cd /path/to/rajanazirul.github.io

# Deploy the function
supabase functions deploy send-email --no-verify-jwt
```

## Step 5: Update Frontend

Edit `scripts/index.js` and replace the placeholder URL:

```javascript
var SUPABASE_URL = 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-email';
```

Replace `YOUR_PROJECT_REF` with your actual Supabase project reference (from your project URL).

## Step 6: Test

1. Open your portfolio site locally: `bundle exec jekyll serve`
2. Navigate to the contact section
3. Submit a test message
4. Check your email!

## Troubleshooting

### CORS Errors
The edge function includes CORS headers. If you still get errors, verify your Supabase project settings.

### Email Not Received
1. Check Supabase function logs: `supabase functions logs send-email`
2. Verify RESEND_API_KEY is set correctly
3. Check spam folder

### 500 Error
1. Check function logs for detailed error messages
2. Verify all secrets are set: `supabase secrets list`

## Alternative: Using Gmail SMTP

If you prefer Gmail instead of Resend, modify the edge function to use nodemailer or a similar SMTP library. Note: Gmail requires an App Password (not your regular password).

## Cost

- **Supabase**: Free tier includes 500,000 edge function invocations/month
- **Resend**: Free tier includes 3,000 emails/month

Both are more than enough for a portfolio contact form.
