import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '5000+', label: 'Students Trained' },
  { value: '95%',   label: 'Placement Rate' },
  { value: '50+',   label: 'Industry Partners' },
  { value: '8+',    label: 'Years Experience' },
];

const courses = [
  {
    icon: '⚙️',
    title: 'DevOps & CI/CD',
    desc: 'Master Jenkins, GitHub Actions, GitLab CI, Docker, and automated pipelines.',
    tag: 'Most Popular',
    color: 'accent',
  },
  {
    icon: '☁️',
    title: 'Cloud Computing',
    desc: 'AWS & Azure from scratch — EC2, S3, Lambda, VPC, IAM, and certifications.',
    tag: 'High Demand',
    color: 'purple',
  },
  {
    icon: '🐧',
    title: 'Linux & Shell Scripting',
    desc: 'Command line mastery, bash scripting, automation, and server administration.',
    tag: 'Foundation',
    color: 'green',
  },
  {
    icon: '🐳',
    title: 'Docker & Kubernetes',
    desc: 'Container fundamentals, Kubernetes orchestration, Helm charts, and deployments.',
    tag: 'Advanced',
    color: 'accent',
  },
  {
    icon: '🌐',
    title: 'Full Stack Development',
    desc: 'React, Node.js, MongoDB — build and deploy complete production-grade apps.',
    tag: 'Complete Path',
    color: 'purple',
  },
  {
    icon: '🐍',
    title: 'Python & Django',
    desc: 'Python programming, REST APIs with Django, automation scripts, and data tasks.',
    tag: 'Trending',
    color: 'green',
  },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'DevOps Engineer @ TCS',
    text: 'Qualibytes transformed my career completely. The hands-on projects and real server deployments gave me confidence that no other institute could.',
    initial: 'R',
  },
  {
    name: 'Priya Verma',
    role: 'Cloud Engineer @ Infosys',
    text: 'The AWS course was brilliant. Sir explains every concept with real scenarios. Got placed within 3 months of completing the course!',
    initial: 'P',
  },
  {
    name: 'Arjun Singh',
    role: 'SRE @ Wipro',
    text: 'Shell scripting and Linux classes were game changers. I use skills from Qualibytes every single day at my job.',
    initial: 'A',
  },
];

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero noise-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge animate-fade-up">
              🎓 India's Premier DevOps & Cloud Training Institute
            </div>
            <h1 className="hero-title animate-fade-up delay-1">
              Launch Your<br />
              <span className="hero-title-accent">Tech Career</span><br />
              With Real Skills
            </h1>
            <p className="hero-subtitle animate-fade-up delay-2">
              At <strong>Qualibytes IT Academy</strong>, we don't just teach theory —
              we train you on live servers, real projects, and industry tools that
              top companies use every day.
            </p>
            <div className="hero-actions animate-fade-up delay-3">
              <Link to="/services" className="btn-primary">
                Explore Courses →
              </Link>
              <Link to="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual animate-fade-up delay-2">
            <div className="terminal-window">
              <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">bash — qualibytes@ec2</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="prompt">$</span> ./deploy.sh</div>
                <div className="terminal-line output">✔ Building React app...</div>
                <div className="terminal-line output">✔ Connecting to EC2 server...</div>
                <div className="terminal-line output">✔ Copying files via scp...</div>
                <div className="terminal-line output">✔ Configuring Nginx...</div>
                <div className="terminal-line output success">🚀 Deployed! Visit http://your-ip</div>
                <div className="terminal-line"><span className="prompt">$</span><span className="cursor">█</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container">
          <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="section courses-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Teach</span>
            <h2 className="section-title">Courses Built for <span>Industry Demand</span></h2>
            <p className="section-subtitle">
              Every course is designed with placement in mind. Learn what companies actually hire for.
            </p>
          </div>
          <div className="courses-grid">
            {courses.map(c => (
              <div key={c.title} className={`course-card card-${c.color}`}>
                <div className="course-top">
                  <span className="course-icon">{c.icon}</span>
                  <span className="course-tag">{c.tag}</span>
                </div>
                <h3 className="course-title">{c.title}</h3>
                <p className="course-desc">{c.desc}</p>
                <Link to="/services" className="course-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="courses-cta">
            <Link to="/services" className="btn-primary">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section why-section">
        <div className="container why-inner">
          <div className="why-content">
            <span className="section-tag">Why Qualibytes</span>
            <h2 className="section-title">We Teach the Way <span>Industry Works</span></h2>
            <div className="why-points">
              {[
                { icon: '🖥️', title: 'Live Server Practice', desc: 'Every student gets hands-on time on real EC2 instances — not just VMs or simulators.' },
                { icon: '📁', title: 'Real Project Portfolio', desc: 'Graduate with 5+ deployed projects that you can show in any interview.' },
                { icon: '👨‍🏫', title: 'Industry Trainers', desc: 'Learn from working professionals with 10+ years in DevOps, Cloud, and development.' },
                { icon: '🤝', title: 'Placement Support', desc: 'Resume prep, mock interviews, and direct referrals to our hiring partners.' },
              ].map(p => (
                <div key={p.title} className="why-point">
                  <span className="why-icon">{p.icon}</span>
                  <div>
                    <h4 className="why-point-title">{p.title}</h4>
                    <p className="why-point-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary">Learn About Us</Link>
          </div>
          <div className="why-visual">
            <div className="why-card-stack">
              <div className="why-badge-card">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">Best DevOps Institute 2024</span>
              </div>
              <div className="why-badge-card">
                <span className="badge-icon">⭐</span>
                <span className="badge-text">4.9/5 Student Rating</span>
              </div>
              <div className="why-badge-card">
                <span className="badge-icon">💼</span>
                <span className="badge-text">500+ Placed This Year</span>
              </div>
              <div className="why-badge-card">
                <span className="badge-icon">🎓</span>
                <span className="badge-text">ISO Certified Academy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Student Stories</span>
            <h2 className="section-title">What Our <span>Alumni Say</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-glow" />
        <div className="container cta-inner">
          <div>
            <h2 className="cta-title">Ready to Start Your Tech Journey?</h2>
            <p className="cta-sub">Join 5000+ students who have transformed their careers with Qualibytes.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Enroll Today →</Link>
            <Link to="/services" className="btn-outline">Browse Courses</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
