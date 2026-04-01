# 📧 Contact Form Email Setup

This setup uses a **backend server** to send emails directly to your Gmail. This is more reliable than third-party services.

---

## 🎯 What This Does

Anyone fills out your Contact Form → Backend Server sends email → You receive it in **sohelsheikh0924@gmail.com**

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Gmail App Password

**Important:** You CANNOT use your regular Gmail password. You need an "App Password".

1. Go to https://myaccount.google.com/
2. Click **"Security"** in the left sidebar
3. Make sure **"2-Step Verification"** is turned ON (required!)
4. Go back to Security, scroll down to **"App passwords"**
5. Click **"App passwords"**
6. Select **"Mail"** from the dropdown
7. Select **"Other (Custom name)"**
8. Type: `Portfolio Contact Form`
9. Click **"Generate"**
10. **COPY the 16-character password** (looks like: `abcd efgh ijkl mnop`)

⚠️ **Important:** This password is shown only once! Save it somewhere safe.

---

### Step 2: Update server.js

Open `server.js` in your code editor and find line 36:

```javascript
FROM_PASSWORD: 'YOUR_APP_PASSWORD_HERE',
```

Replace with your actual App Password:

```javascript
FROM_PASSWORD: 'abcd efgh ijkl mnop',  // Your 16-character password
```

Save the file.

---

### Step 3: Start the Email Server

Open a terminal/command prompt in your project folder and run:

```bash
node server.js
```

You should see:
```
🚀 Server is running!
   Local: http://localhost:5000
   API: http://localhost:5000/api/contact

✅ Email server is ready to send messages!
📧 Messages will be sent to: sohelsheikh0924@gmail.com
```

If you see an error, check that your App Password is correct.

---

### Step 4: Test Your Contact Form

1. Open your portfolio website (http://localhost:5173/)
2. Go to the Contact page
3. Fill out the form:
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Subject: Test Message
   - Message: This is a test message from my portfolio
4. Click **"Send Message"**

✅ You should see: **"Message Sent!"**

---

### Step 5: Check Your Gmail

Open **sohelsheikh0924@gmail.com** inbox. You should see a new email with:

```
From: Portfolio Contact Form
Subject: 📧 New Message: Test Message
```

**Check your Spam/Junk folder** if you don't see it in the inbox!

---

## 🖥️ Running Both Servers

You need to run TWO terminals simultaneously:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
node server.js
```

---

## 🔧 Common Issues

### "Failed to send. Cannot connect to server"

**Solution:** Make sure you ran `node server.js` in another terminal.

### "Email configuration error" in server console

**Solution:**
1. Check that you replaced `YOUR_APP_PASSWORD_HERE` with your actual App Password
2. Make sure 2-Step Verification is enabled on your Gmail
3. Make sure you copied the App Password correctly (16 characters with spaces)

### Emails not in inbox

**Solution:** Check your **Spam/Junk** folder. Gmail sometimes filters automated emails.

### "Less secure app access" error

**Solution:** You don't need to enable "Less secure apps". Using App Passwords is the secure way.

---

## 📧 Email Format

The email you'll receive looks like:

```
📧 New Contact Form Message

From: John Doe
Email: john@example.com
Subject: Job Opportunity

Message:
Hi, I'm interested in hiring you for a project...

---
Sent from your Portfolio Website
Reply to: john@example.com
```

---

## 🌐 For Production (When Deploying)

When you deploy your website, update the API_URL in `Contact.jsx`:

```javascript
const API_URL = 'https://your-backend-server.com';  // Your deployed server URL
```

Or use environment variables.

---

## 🆘 Still Not Working?

1. Check browser console (F12) for errors
2. Check the terminal running `node server.js` for error messages
3. Make sure your App Password is correct (no extra spaces)
4. Email me at sohelsheikh0924@gmail.com for help

---

## ✅ Summary Checklist

- [ ] Enabled 2-Step Verification on Gmail
- [ ] Generated App Password (16 characters)
- [ ] Replaced `YOUR_APP_PASSWORD_HERE` in server.js
- [ ] Ran `npm install express nodemailer cors`
- [ ] Running `node server.js` in a terminal
- [ ] Tested the contact form
- [ ] Checked Spam folder for test email

**Once this is set up, anyone can send you messages and you'll receive them instantly in your Gmail!**
