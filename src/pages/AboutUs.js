import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const team = [
  { name: 'Rajiv Mishra', role: 'Founder & Lead DevOps Trainer', exp: '12 years', icon: '👨‍💻' },
  { name: 'Sneha Gupta',  role: 'Cloud & AWS Instructor',         exp: '9 years',  icon: '👩‍🏫' },
  { name: 'Amit Yadav',   role: 'Full Stack Development Trainer', exp: '8 years',  icon: '👨‍🏫' },
  { name: 'Pooja Tiwari', role: 'Linux & Security Expert',        exp: '10 years', icon: '👩‍💻' },
];

const milestones = [
  { year: '2016', event: 'Founded in Noida with 20 students in the first batch' },
  { year: '2018', event: 'Launched cloud computing curriculum with AWS tie-up' },
  { year: '2020', event: 'Moved to online training during pandemic, reached 10+ states' },
  { year: '2022', event: 'Crossed 2000 placed students milestone' },
  { year: '2024', event: '5000+ alumni network, 50+ hiring partners, ISO Certified' },
];

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <span className="section-tag">Our Story</span>
          <h1 className="page-hero-title">
            Empowering <span>Tech Careers</span><br />Since 2016
          </h1>
          <p className="page-hero-sub">
            Qualibytes IT Academy was built on a simple belief — every passionate learner
            deserves access to world-class tech training. We started from Noida and
            today our alumni work at companies across India and the world.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section">
        <div className="container mv-grid">
          <div className="mv-card mission">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide affordable, industry-standard tech education that bridges the
              gap between classroom learning and real-world job requirements. We measure
              success by placement — not just completion.
            </p>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To become India's most trusted name in DevOps, Cloud, and full-stack
              training — producing professionals who don't just find jobs, but lead
              teams and build impactful technology.
            </p>
          </div>
          <div className="mv-card values">
            <div className="mv-icon">💎</div>
            <h3>Our Values</h3>
            <p>
              Hands-on learning over rote memorization. Honest mentoring over false
              promises. Continuous improvement over stagnation. Student success is
              our only real metric.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story / Timeline ── */}
      <section className="section timeline-section">
        <div className="container">
          <span className="section-tag">Our Journey</span>
          <h2 className="section-title">How We Grew <span>Together</span></h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <p className="timeline-event">{m.event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section team-section">
        <div className="container">
          <span className="section-tag">Meet the Team</span>
          <h2 className="section-title">Learn from <span>Industry Experts</span></h2>
          <p className="section-subtitle">
            Our trainers are working professionals who bring real project experience into every class.
          </p>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-avatar">{t.icon}</div>
                <div className="team-exp-badge">{t.exp} exp.</div>
                <h3 className="team-name">{t.name}</h3>
                <p className="team-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="section numbers-section">
        <div className="container">
          <div className="numbers-grid">
            {[
              { num: '5000+', label: 'Students Trained', icon: '🎓' },
              { num: '95%',   label: 'Placement Rate',   icon: '💼' },
              { num: '50+',   label: 'Hiring Partners',  icon: '🤝' },
              { num: '8+',    label: 'Years Teaching',   icon: '📅' },
              { num: '15+',   label: 'Live Courses',     icon: '📚' },
              { num: '4.9',   label: 'Student Rating',   icon: '⭐' },
            ].map(n => (
              <div key={n.label} className="number-card">
                <span className="number-icon">{n.icon}</span>
                <span className="number-value">{n.num}</span>
                <span className="number-label">{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section about-cta">
        <div className="container about-cta-inner">
          <h2 className="section-title">Want to Be Part of <span>Our Story?</span></h2>
          <p className="section-subtitle">
            Join the next batch and become another success story from Qualibytes.
          </p>
          <div style={{ display:'flex', gap:'14px', marginTop:'32px', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn-primary">Get in Touch →</Link>
            <Link to="/services" className="btn-outline">Browse Courses</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
