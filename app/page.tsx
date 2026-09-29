const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Machine Learning",
  "Python Dashboards",
  "ETL",
  "Statistics",
  "Data Visualization",
];

const projects = [
  {
    title: "Customer Churn Prediction",
    summary:
      "Built a predictive model to identify at-risk customers and support retention strategies with measurable business impact.",
    stack: ["Python", "Scikit-learn", "EDA", "Model Evaluation"],
  },
  {
    title: "Sales Performance Dashboard",
    summary:
      "Designed an executive dashboard to monitor revenue trends, product contribution, and regional performance in near real time.",
    stack: ["Power BI", "SQL", "Data Cleaning", "KPIs"],
  },
  {
    title: "HR Analytics Insight Platform",
    summary:
      "Analyzed workforce patterns and engagement metrics to uncover key drivers behind productivity and attrition.",
    stack: ["Excel", "Python", "Visualization", "Business Analysis"],
  },
];

const stats = [
  { value: "3+", label: "Years of analytical work" },
  { value: "8+", label: "Projects delivered" },
  { value: "95%", label: "Stakeholder satisfaction focus" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container navbar">
          <div className="brand">TEPPALA VAHINI</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Data Analyst • Machine Learning Enthusiast</p>
            <h1>Turning data into decisions that move businesses forward.</h1>
            <p className="lead">
              I’m TEPPALA VAHINI, a data analyst focused on extracting insight from complex datasets,
              building predictive models, and translating numbers into clear business action.
            </p>
            <div className="cta-row">
              <a href="#projects" className="button primary">View Projects</a>
              <a href="#contact" className="button secondary">Contact Me</a>
            </div>
          </div>

          <div className="profile-panel">
            <div className="profile-card">
              <div className="profile-badge">Available for opportunities</div>
              <div className="profile-avatar">TV</div>
              <div className="profile-info">
                <span>Based in India</span>
                <span>Analytics • ML • BI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-block">
        <div className="container two-column">
          <div>
            <p className="section-label">About</p>
            <h2>Bringing clarity to complex data.</h2>
          </div>
          <div>
            <p>
              I combine analytical thinking, data storytelling, and machine learning to uncover trends,
              validate decisions, and support strategic growth. My work spans data cleaning, exploratory
              analysis, predictive modeling, and dashboard development for business stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-block soft">
        <div className="container">
          <p className="section-label">Skills</p>
          <h2>Tools and capabilities</h2>
          <div className="skill-wrap">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-block">
        <div className="container">
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-visual" aria-hidden="true" />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block soft">
        <div className="container focus-panel">
          <div>
            <p className="section-label">Focus</p>
            <h2>Delivering insights with business impact.</h2>
          </div>
          <ul>
            <li>Exploratory data analysis and data storytelling</li>
            <li>Machine learning models for prediction and classification</li>
            <li>Interactive dashboards and KPI reporting</li>
            <li>Actionable recommendations for product, sales, and growth teams</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section-block contact-block">
        <div className="container contact-box">
          <div>
            <p className="section-label">Contact</p>
            <h2>Let’s build smarter decisions together.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:teppalavahini27@gmail.com">teppalavahini27@gmail.com</a>
            <a href="https://www.linkedin.com/in/t-vahini" target="_blank" rel="noreferrer">
              LinkedIn: T. Vahini
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}
