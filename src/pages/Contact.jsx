import { useState } from 'react';
import './Contact.css';

/**
 * ============================================
 * CONTACT FORM - USING FORMSPREE
 * ============================================
 *
 * Formspree handles email delivery - no backend needed!
 * Messages are sent directly to: sohelsheikh0924@gmail.com
 *
 * Your Formspree endpoint: https://formspree.io/f/mbdpoqkp
 * ============================================
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdpoqkp';
const TO_EMAIL = 'sohelsheikh0924@gmail.com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: '',
    success: false
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (status.error) {
      setStatus(prev => ({ ...prev, error: '' }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!validateEmail(formData.email)) return 'Please enter a valid email address';
    if (!formData.subject.trim()) return 'Please enter a subject';
    if (!formData.message.trim()) return 'Please enter your message';
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({ ...status, error: validationError });
      return;
    }

    setStatus({ ...status, loading: true, error: '' });

    try {
      // Send to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          loading: false,
          error: '',
          success: true
        });

        // Reset form after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false, success: false }));
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Send failed:', error);
      setStatus({
        submitted: false,
        loading: false,
        error: 'Failed to send. Please email directly at ' + TO_EMAIL,
        success: false
      });
    }
  };

  return (
    <div className="contact-page">
      <section className="section">
        <h1 className="section-title">Get In Touch</h1>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="contact-links">
              <a href={`mailto:${TO_EMAIL}`} className="contact-link">
                <span className="contact-icon email">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{TO_EMAIL}</span>
                </div>
              </a>

              <a href="tel:+919421486737" className="contact-link">
                <span className="contact-icon phone">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91-9421486737</span>
                </div>
              </a>

              <a href="https://github.com/Sohel652002" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon github">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/Sohel652002</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sohel-sheikh-236487319/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon linkedin">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Connect with me</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {/* Success Message */}
            {status.success && (
              <div className="success-message">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="8,12 11,15 16,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <h4>Message Sent!</h4>
                  <p>Your message has been sent to {TO_EMAIL}. I'll reply soon!</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="error-message-banner">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{status.error}</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  disabled={status.loading}
                  className={status.error && !formData.name ? 'error' : ''}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  disabled={status.loading}
                  className={status.error && !validateEmail(formData.email) ? 'error' : ''}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  disabled={status.loading}
                  className={status.error && !formData.subject ? 'error' : ''}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  disabled={status.loading}
                  className={status.error && !formData.message ? 'error' : ''}
                />
                <span className="char-count">
                  {formData.message.length} characters (min 10)
                </span>
              </div>

              <button
                type="submit"
                className={`btn btn-primary submit-btn ${status.success ? 'success' : ''}`}
                disabled={status.loading || status.success}
              >
                {status.loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : status.success ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="form-note">
                Powered by Formspree. Messages sent to: <strong>{TO_EMAIL}</strong>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
