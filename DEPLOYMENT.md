# Production Deployment Guide

## Problem
The deployed website cannot access your local `.env` file, so the contact form won't work in production.

## Solutions

### Option 1: Deploy Backend to Vercel (Recommended)

1. **Deploy Backend to Vercel:**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel --prod`
   - This will deploy your `server.js` as a serverless function
   - Copy the deployed URL (e.g., `https://your-app-xyz.vercel.app`)

2. **Update Production URL:**
   - In `src/pages/Contact.js`, replace:
     ```javascript
     return 'https://your-backend-url.vercel.app/api/contact';
     ```
   - With your actual Vercel URL

3. **Set Environment Variables in Vercel:**
   - Go to Vercel dashboard
   - Your project → Settings → Environment Variables
   - Add:
     - `EMAIL_USER`: `tyagideepansh871@gmail.com`
     - `EMAIL_PASS`: `your-gmail-app-password`
     - `EMAIL_TO`: `tyagideepansh26@gmail.com`

### Option 2: Use EmailJS (Client-side)

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Update Contact.js** to use EmailJS instead of backend

### Option 3: Use Formspree

1. **Sign up for Formspree** (free tier)
2. **Get your form endpoint**
3. **Update Contact.js** to submit to Formspree

## Quick Fix for Now

For immediate deployment, you can temporarily disable the contact form or show a message:

```javascript
// In Contact.js handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();
  showToast('info', 'Contact form is temporarily disabled. Please email me directly at tyagideepansh26@gmail.com');
  return;
};
```

## Next Steps

1. Choose your preferred deployment option
2. Follow the instructions
3. Test the contact form in production
4. Update the production URL in Contact.js

The Vercel option is recommended as it keeps your current NodeMailer setup and is free to use.
