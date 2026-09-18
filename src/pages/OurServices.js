import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css';

const services = [
  {
    id: 'devops',
    icon: '⚙️',
    title: 'DevOps & CI/CD',
    tag: 'Most Popular',
    tagColor: 'accent',
    duration: '3 Months',
    mode: 'Online + Offline',
    price: '₹18,000',
    overview: 'Master the complete DevOps lifecycle — from version control to automated deployments. Learn the tools that top tech companies use in production.',
    topics: [
      'Git, GitHub & GitLab workflows',
      'Jenkins — pipelines, agents, plugins',
      'GitHub Actions & GitLab CI',
      'Ansible for configuration management',
      'Terraform for infrastructure as code',
      'Monitoring with Prometheus & Grafana',
      'SonarQube for code quality',
      'ArgoCD for GitOps deployments',
    ],
    outcome: 'DevOps Engineer / SRE / Platform Engineer',
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Computing (AWS & Azure)',
    tag: 'High Demand',
    tagColor: 'purple',
    duration: '2.5 Months',
    mode: 'Online',
    price: '₹16,000',
    overview: 'From zero to cloud-certified. Deep dives into AWS services with real lab exercises using actual AWS accounts.',
    topics: [
      'AWS core services — EC2, S3, RDS, VPC',
      'IAM — users, roles, policies',
      'Lambda & serverless architecture',
      'Load Balancers & Auto Scaling',
      'CloudFormation & AWS CDK',
      'Azure fundamentals & services',
      'Cost optimization strategies',
      'AWS Solutions Architect prep',
    ],
    outcome: 'Cloud Engineer / AWS Solutions Architect',
  },
  {
    id: 'linux',
    icon: '🐧',
    title: 'Linux & Shell Scripting',
    tag: 'Foundation Course',
    tagColor: 'green',
    duration: '6 Weeks',
    mode: 'Online + Offline',
    price: '₹8,000',
    overview: 'The most fundamental skill for any DevOps/Cloud role. Master the command line and write automation scripts that save hours of manual work.',
    topics: [
      'Linux file system & commands',
      'User, group & permission management',
      'Process & service management',
      'Bash scripting from basics',
      'Variables, conditions & loops',
      'Functions & script arguments',
      'Cron jobs & task scheduling',
      'Real-world automation projects',
    ],
    outcome: 'Linux Admin / DevOps Foundation / Cloud Engineer',
  },
  {
    id: 'docker',
    icon: '🐳',
    title: 'Docker & Kubernetes',
    tag: 'Advanced',
    tagColor: 'accent',
    duration: '2 Months',
    mode: 'Online',
    price: '₹14,000',
    overview: 'Container everything. Orchestrate at scale. Learn the tech that powers Netflix, Spotify, and every major cloud-native company.',
    topics: [
      'Docker architecture & containers',
      'Dockerfile writing & best practices',
      'Docker Compose for multi-service apps',
      'Docker Hub & private registries',
      'Kubernetes architecture & objects',
      'Pods, Deployments, Services, Ingress',
      'Helm charts & package management',
      'Production cluster management',
    ],
    outcome: 'Container Engineer / Kubernetes Admin / DevOps Engineer',
  },
  {
    id: 'fullstack',
    icon: '🌐',
    title: 'Full Stack Development',
    tag: 'Complete Path',
    tagColor: 'purple',
    duration: '4 Months',
    mode: 'Online + Offline',
    price: '₹22,000',
    overview: 'Build complete web applications from database to deployment. Learn the MERN stack with real projects that go live on the internet.',
    topics: [
      'HTML5, CSS3 & responsive design',
      'JavaScript ES6+ & React.js',
      'React Router, Hooks & state management',
      'Node.js & Express.js REST APIs',
      'MongoDB & Mongoose ORM',
      'JWT authentication & security',
      'AWS S3 & EC2 deployment',
      'CI/CD pipeline for web apps',
    ],
    outcome: 'Full Stack Developer / MERN Developer / Web Engineer',
  },
  {
    id: 'python',
    icon: '🐍',
    title: 'Python & Django',
    tag: 'Trending',
    tagColor: 'green',
    duration: '2.5 Months',
    mode: 'Online',
    price: '₹12,000',
    overview: 'Python is the most versatile language in tech — automation, APIs, data, DevOps scripts. Learn it properly with Django for web backends.',
    topics: [
      'Python basics & OOP concepts',
      'File handling & data structures',
      'Automation scripts & OS module',
      'Django MVT architecture',
      'REST APIs with Django REST Framework',
      'Database models & migrations',
      'Authentication & authorization',
      'Deployment on Linux servers',
    ],
    outcome: 'Python Developer / Backend Engineer / Automation Engineer',
  },
];

export default function OurServices() {
  const [active, setActive] = useState('devops');
  const current = services.find(s => s.id === active);

  return (
    <div className="services-page">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <span className="section-tag">Our Courses</span>
          <h1 className="page-hero-title">
            Courses That Get <span>You Hired</span>
          </h1>
          <p className="page-hero-sub">
            Every course at Qualibytes is built around what companies actually ask for in interviews.
            Practical, current, and placement-focused.
          </p>
        </div>
      </section>

      {/* ── Course Explorer ── */}
      <section className="section">
        <div className="container">
          <div className="explorer-layout">

            {/* Sidebar */}
            <div className="explorer-sidebar">
              {services.map(s => (
                <button
                  key={s.id}
                  className={`sidebar-item ${active === s.id ? 'active' : ''}`}
                  onClick={() => setActive(s.id)}
                >
                  <span className="sidebar-icon">{s.icon}</span>
                  <div>
                    <div className="sidebar-title">{s.title}</div>
                    <div className="sidebar-meta">{s.duration} · {s.price}</div>
                  </div>
                  <span className="sidebar-arrow">›</span>
                </button>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="explorer-detail" key={current.id}>
              <div className="detail-header">
                <div>
                  <div className="detail-top">
                    <span className="detail-icon">{current.icon}</span>
                    <span className={`course-tag tag-${current.tagColor}`}>{current.tag}</span>
                  </div>
                  <h2 className="detail-title">{current.title}</h2>
                  <p className="detail-overview">{current.overview}</p>
                </div>

                <div className="detail-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-val">{current.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Mode</span>
                    <span className="meta-val">{current.mode}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Fee</span>
                    <span className="meta-val accent">{current.price}</span>
                  </div>
                </div>
              </div>

              <div className="detail-body">
                <h4 className="topics-heading">What You'll Learn</h4>
                <ul className="topics-list">
                  {current.topics.map(t => (
                    <li key={t} className="topic-item">
                      <span className="topic-check">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="outcome-box">
                  <span className="outcome-label">Career Outcome</span>
                  <span className="outcome-value">{current.outcome}</span>
                </div>

                <div className="detail-actions">
                  <Link to="/contact" className="btn-primary">Enroll in This Course →</Link>
                  <Link to="/contact" className="btn-outline">Free Demo Class</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why learn here ── */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title" style={{marginBottom:'48px'}}>
            What Makes Our <span>Training Different</span>
          </h2>
          <div className="features-grid">
            {[
              { icon: '🖥️', title: 'Live Server Access', desc: 'Practice on real EC2 instances — not local VMs or simulations. Get comfortable with production environments.' },
              { icon: '📁', title: 'Project Portfolio', desc: 'Every course ends with 2–3 deployable projects you can show on GitHub and in interviews.' },
              { icon: '🎥', title: 'Recorded Sessions', desc: 'All live classes are recorded. Rewatch any session unlimited times for 6 months after the course.' },
              { icon: '💬', title: 'Doubt Resolution', desc: 'WhatsApp group + weekly doubt sessions. No question goes unanswered.' },
              { icon: '📄', title: 'Certificate', desc: 'Industry-recognized Qualibytes certification on completion. Valued by our 50+ partner companies.' },
              { icon: '🤝', title: 'Placement Help', desc: 'Resume review, mock interviews, LinkedIn profile building, and direct referrals to hiring partners.' },
            ].map(f => (
              <div key={f.title} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
