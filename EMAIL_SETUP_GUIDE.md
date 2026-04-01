# Contact Form Email Setup Guide

This guide explains how to configure the contact form to send emails to **machokhan0924@gmail.com**.

## Quick Setup (Recommended: EmailJS)

We use [EmailJS](https://www.emailjs.com/) - a free service that lets you send emails directly from the frontend without a backend.

### Step 1: Create EmailJS Account (Free)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email

### Step 2: Create Email Service

1. In the EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail is recommended)
4. Click **"Connect Account"** and authorize with your Gmail
5. Once connected, copy the **Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Configure the template:

**Subject:** `New Contact Form Message from {{from_name}}`

**Body (HTML):**
```html
<h2>New Message from Portfolio Contact Form</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p>Sent from: Sohel's Portfolio Website</p>
```

4. Save the template and copy the **Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"API Keys"** in the sidebar
2. Copy your **Public Key** (looks like: `user_123abc`)

### Step 5: Update the Code

Open `src/pages/Contact.jsx` and update the `EMAILJS_CONFIG` object (around line 45):

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',      // Replace with your Service ID
  TEMPLATE_ID: 'your_actual_template_id',    // Replace with your Template ID
  PUBLIC_KEY: 'your_actual_public_key',      // Replace with your Public Key
  TO_EMAIL: 'machokhan0924@gmail.com'        // Your receiving email (already set)
};
```

### Step 6: Test the Form

1. Save the file
2. Refresh your browser
3. Fill out the contact form and submit
4. Check your email inbox!

---

## Alternative: Backend API (Node.js + Express)

If you prefer a backend solution with NodeMailer:

### 1. Create a Backend Server

Create a new file `server.js` in your project root:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'  // Use App Password from Google Account
  }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'machokhan0924@gmail.com',
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h2>New Message from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
```

### 2. Install Dependencies

```bash
npm install express nodemailer cors
```

### 3. Update Frontend

In `Contact.jsx`, replace the EmailJS send with:

```javascript
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## Form Features

The contact form includes:

✅ **4 Fields:** Name, Email, Subject, Message
✅ **Validation:**
- All fields required
- Email format validation
- Minimum 10 characters for message
- Error messages displayed to user

✅ **User Feedback:**
- Loading spinner while sending
- Success message on completion
- Error message if something goes wrong
- Auto-reset after 5 seconds

✅ **Security:**
- Form validation before submission
- Protected against empty submissions
- Input sanitization

---

## Troubleshooting

### "Failed to send message" Error

1. Check browser console for detailed error
2. Verify your EmailJS credentials are correct
3. Ensure your EmailJS service is active
4. Check spam/junk folder in your email

### Emails Not Received

1. Check spam/junk folder
2. Verify `TO_EMAIL` is set to `machokhan0924@gmail.com`
3. Check EmailJS dashboard for delivery logs
4. Ensure your Gmail App Password is correct (if using NodeMailer)

### Demo Mode

If you see "Demo mode" in console, the EmailJS isn't configured yet. Follow Step 5 above.

---

## Free Tier Limits (EmailJS)

- **200 emails/month** - perfect for a portfolio
- No credit card required
- Unlimited templates
- Multiple email services

Upgrade to paid plan if you need more emails.

---

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- Check browser console for errors
- Verify all IDs are copied correctly (no extra spaces)
