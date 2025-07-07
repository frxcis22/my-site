# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Message: {{message}}
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update the Contact Component
Replace the placeholder values in `src/components/Contact.tsx`:

```javascript
const result = await emailjs.sendForm(
  'service_abc123',        // Your Service ID
  'template_xyz789',       // Your Template ID
  formRef.current,
  'your_public_key_here'   // Your Public Key
);
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check if you receive the email

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Ensure your template variables match the form field names

## Security Notes
- The public key is safe to use in frontend code
- EmailJS handles the email sending securely
- No backend required!

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio websites 