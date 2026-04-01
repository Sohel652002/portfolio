const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist folder (for production)
app.use(express.static(path.join(__dirname, 'dist')));

// ============================================
// EMAIL CONFIGURATION
// ============================================
// IMPORTANT: For Gmail, you need an "App Password" not your regular password!
// To get App Password:
// 1. Go to https://myaccount.google.com/
// 2. Security → 2-Step Verification (must be enabled)
// 3. Security → App passwords
// 4. Select "Mail" and "Other (Custom name)"
// 5. Name it "Portfolio Contact Form"
// 6. Copy the 16-character password and paste it below
// ============================================

const EMAIL_CONFIG = {
  // Your Gmail address where you want to receive messages
  TO_EMAIL: 'sohelsheikh0924@gmail.com',

  // Your Gmail credentials (use App Password, not regular password!)
  FROM_EMAIL: 'sohelsheikh0924@gmail.com',  // Same as TO_EMAIL usually
  FROM_PASSWORD: 'YOUR_APP_PASSWORD_HERE',   // ← Replace with your Gmail App Password

  // Alternative: If you want to use a different sender email
  // You can use environment variables instead:
  // FROM_EMAIL: process.env.EMAIL_USER,
  // FROM_PASSWORD: process.env.EMAIL_PASS,
};

// Create email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_CONFIG.FROM_EMAIL,
    pass: EMAIL_CONFIG.FROM_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:');
    console.log('   Make sure you:');
    console.log('   1. Enabled 2-Step Verification in Gmail');
    console.log('   2. Generated an App Password (not your regular password)');
    console.log('   3. Replaced YOUR_APP_PASSWORD_HERE in server.js');
    console.log('   Error:', error.message);
  } else {
    console.log('✅ Email server is ready to send messages!');
    console.log(`📧 Messages will be sent to: ${EMAIL_CONFIG.TO_EMAIL}`);
  }
});

// ============================================
// CONTACT FORM API ENDPOINT
// ============================================
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  // Check if email is configured
  if (EMAIL_CONFIG.FROM_PASSWORD === 'YOUR_APP_PASSWORD_HERE') {
    console.log('⚠️ Email not configured yet!');
    console.log('   Update EMAIL_CONFIG.FROM_PASSWORD in server.js');
    return res.status(500).json({
      success: false,
      message: 'Email service not configured. Please contact the administrator.'
    });
  }

  const mailOptions = {
    from: `"Portfolio Contact Form" <${EMAIL_CONFIG.FROM_EMAIL}>`,
    to: EMAIL_CONFIG.TO_EMAIL,
    replyTo: email,
    subject: `📧 New Message: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #6366f1; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #6366f1; margin-top: 10px; }
          .footer { margin-top: 30px; font-size: 12px; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📧 New Contact Form Message</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">From:</span> ${name}
            </div>
            <div class="field">
              <span class="label">Email:</span> ${email}
            </div>
            <div class="field">
              <span class="label">Subject:</span> ${subject}
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Sent from your Portfolio Website</p>
            <p>Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Message

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your Portfolio Website
Reply to: ${email}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('   Message ID:', info.messageId);
    console.log('   To:', EMAIL_CONFIG.TO_EMAIL);
    console.log('   From:', name, `<${email}>`);
    console.log('   Subject:', subject);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    emailConfigured: EMAIL_CONFIG.FROM_PASSWORD !== 'YOUR_APP_PASSWORD_HERE',
    toEmail: EMAIL_CONFIG.TO_EMAIL
  });
});

// Catch-all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log('\n🚀 Server is running!');
  console.log(`   Local: http://localhost:${PORT}`);
  console.log(`   API: http://localhost:${PORT}/api/contact`);
  console.log('\n📧 Email Configuration:');
  console.log(`   To: ${EMAIL_CONFIG.TO_EMAIL}`);
  if (EMAIL_CONFIG.FROM_PASSWORD === 'YOUR_APP_PASSWORD_HERE') {
    console.log('\n⚠️  WARNING: Email not configured!');
    console.log('   Follow the instructions in server.js to set up your Gmail App Password.');
  }
  console.log('\n');
});
