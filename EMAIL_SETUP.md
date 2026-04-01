# Email Setup Guide - Contact Form

## 📧 Target Email
Messages will be sent to: **sohelsheikh0924@gmail.com**

---

## 🚀 Quick Setup (EmailJS - Frontend Only)

This is the easiest method - no backend server needed!

### Step 1: Create EmailJS Account (2 minutes)

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** and create a free account
3. Verify your email address

### Step 2: Create Email Service (2 minutes)

1. In the EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"** (recommended)
4. Click **"Connect Account"**
5. Sign in with the Gmail where you want to receive messages (**sohelsheikh0924@gmail.com**)
6. Click **"Create Service"**
7. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template (3 minutes)

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Fill in:

   **Template Name:** `Contact Form`

   **Subject:** `New Message from {{from_name}} - {{subject}}`

   **Body (HTML):**
   ```html
   <h2 style="color: #6366f1;">📧 New Contact Form Message</h2>

   <p><strong>From:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Subject:</strong> {{subject}}</p>

   <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">

   <h3 style="color: #334155;">Message:</h3>
   <p style="background: #f8fafc; padding: 15px; border-radius: 8px; line-height: 1.6;">
     {{message}}
   </p>

   <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">

   <p style="color: #64748b; font-size: 12px;">
     Sent from your Portfolio Website<br>
     Reply to: {{from_email}}
   </p>
   ```

4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key (1 minute)

1. Go to **"Account"** → **"API Keys"** in the sidebar
2. **Copy your Public Key** (looks like: `user_123abc`)

### Step 5: Update Your Code (2 minutes)

Open `src/pages/Contact.jsx` and update lines 48-53:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',      // ← Paste your Service ID
  TEMPLATE_ID: 'template_xyz789',    // ← Paste your Template ID
  PUBLIC_KEY: 'user_123abc',         // ← Paste your Public Key
  TO_EMAIL: 'sohelsheikh0924@gmail.com'  // ✓ Already correct
};
```

### Step 6: Test It

1. Save the file
2. Refresh your browser
3. Fill out the contact form
4. Click "Send Message"
5. Check **sohelsheikh0924@gmail.com** inbox!

---

## ✅ What You'll See

### In Your Gmail Inbox:
```
From: Contact Form <sohelsheikh0924@gmail.com>
Subject: New Message from John Doe - Job Opportunity

📧 New Contact Form Message

From: John Doe
Email: john@example.com
Subject: Job Opportunity

Message:
[The message they typed]

Sent from your Portfolio Website
Reply to: john@example.com
```

---

## 🆓 Free Tier Limits

- **200 emails/month** (plenty for a portfolio)
- No credit card required
- Works forever on free tier

---

## 🔧 Troubleshooting

### "Failed to send message" error?

1. Check browser console (F12) for error details
2. Make sure you replaced `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with actual values
3. No extra spaces or quotes around the IDs
4. Your Gmail account must be connected properly

### Emails not showing in inbox?

1. Check **Spam/Junk** folder
2. In EmailJS, go to **"Email History"** to see if emails were sent
3. Make sure the Gmail connected to EmailJS is **sohelsheikh0924@gmail.com**

### Still not working?

Email me directly at: **sohelsheikh0924@gmail.com**

---

## 🎯 Alternative: Backend Solution (Node.js + Nodemailer)

If you prefer a backend solution, create `server.js`:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'sohelsheikh0924@gmail.com',
    pass: 'YOUR_APP_PASSWORD'  // Generate from Google Account settings
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  await transporter.sendMail({
    from: email,
    to: 'sohelsheikh0924@gmail.com',
    subject: `Portfolio: ${subject}`,
    html: `
      <h2>New Message from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p>${message}</p>
    `
  });

  res.json({ success: true });
});

app.listen(5000, () => console.log('Server running'));
```

Then update frontend to POST to `http://localhost:5000/api/contact`

---

## 📱 Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- Video Tutorial: https://www.youtube.com/watch?v=NgWGllAqLac

**Your contact form will work as soon as you complete Step 5!**
