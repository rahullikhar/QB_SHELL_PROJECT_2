import React, { useState } from 'react';
import './Contact.css';

const courses = [
  'DevOps & CI/CD',
  'Cloud Computing (AWS/Azure)',
  'Linux & Shell Scripting',
  'Docker & Kubernetes',
  'Full Stack Development',
  'Python & Django',
  'Not sure yet',
];

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', course:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Valid email required';
    if (!form.phone.trim() || form.phone.length < 10)
      e.phone = 'Valid phone number required';
    if (!form.course)         e.course = 'Please select a course';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="page-hero-title">
            Start Your <span>Learning Journey</span>
          </h1>
          <p className="page-hero-sub">
            Fill out the form and our team will get back to you within 24 hours.
            Or call us directly — we love talking about tech careers!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* ── Form ── */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-card">
                <div className="success-icon">🎉</div>
                <h3 className="success-title">Enquiry Received!</h3>
                <p className="success-msg">
                  Thank you, <strong>{form.name}</strong>! Our team will contact you at{' '}
                  <strong>{form.email}</strong> within 24 hours.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => { setForm({ name:'',email:'',phone:'',course:'',message:'' }); setSubmitted(false); }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2 className="form-title">Course Enquiry Form</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Interested Course *</label>
                    <select
                      className={`form-input form-select ${errors.course ? 'error' : ''}`}
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                    >
                      <option value="">Select a course</option>
                      {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.course && <span className="form-error">{errors.course}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message (optional)</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your background, goals, or any questions..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>

          {/* ── Info ── */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-card-title">Contact Details</h3>
              {[
                { icon: '📍', label: 'Address', value: 'Qualibytes IT Academy Pvt. Ltd.\nNoida, Uttar Pradesh, India — 201301' },
                { icon: '📞', label: 'Phone', value: '+91 12345 67890\n+91 98765 43210' },
                { icon: '✉️', label: 'Email', value: 'info@qualibytes.in\nadmissions@qualibytes.in' },
                { icon: '🕐', label: 'Office Hours', value: 'Monday to Saturday\n9:00 AM – 7:00 PM IST' },
              ].map(c => (
                <div key={c.label} className="info-row">
                  <span className="info-icon">{c.icon}</span>
                  <div>
                    <div className="info-label">{c.label}</div>
                    <div className="info-value">{c.value.split('\n').map((l, i) => <span key={i}>{l}{i < c.value.split('\n').length - 1 && <br/>}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-card demo-card">
              <div className="demo-icon">🎓</div>
              <h3 className="demo-title">Free Demo Class</h3>
              <p className="demo-desc">
                Not sure which course is right for you? Attend a free 1-hour demo session
                and decide with confidence.
              </p>
              <div className="demo-tags">
                {['No fees', 'No commitment', 'Live class', 'Q&A included'].map(t => (
                  <span key={t} className="demo-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="info-card social-card">
              <h3 className="info-card-title">Follow Us</h3>
              <div className="social-links">
                {[
                  { label: 'YouTube', desc: 'Free tutorials & course previews', icon: '▶' },
                  { label: 'LinkedIn', desc: 'Alumni success stories & updates', icon: 'in' },
                  { label: 'Instagram', desc: 'Campus life & student moments', icon: '◉' },
                ].map(s => (
                  <a key={s.label} href="#!" className="social-link-row">
                    <div className="social-link-icon">{s.icon}</div>
                    <div>
                      <div className="social-link-name">{s.label}</div>
                      <div className="social-link-desc">{s.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
