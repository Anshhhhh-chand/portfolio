# Email Integration Setup Guide

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable "2-Step Verification"

### Step 2: Generate App Password
1. In Google Account settings, go to "Security"
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Portfolio Contact Form"
5. Copy the generated 16-character password

### Step 3: Environment Variables
Create a `.env.local` file in your project root:

\`\`\`
EMAIL_USER=chandansh82@gmail.com
EMAIL_PASS=your-16-character-app-password
\`\`\`

### Step 4: Deploy Environment Variables
When deploying to Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add both EMAIL_USER and EMAIL_PASS

## Alternative Email Services

### SendGrid (Professional Option)
\`\`\`
SENDGRID_API_KEY=your-sendgrid-api-key
\`\`\`

### Outlook/Hotmail
\`\`\`
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
\`\`\`

## Testing
1. Fill out the contact form on your website
2. Check that you receive the notification email
3. Verify the sender receives an auto-reply

## Security Notes
- Never commit .env.local to version control
- Use app passwords, not regular passwords
- Consider rate limiting for production use
