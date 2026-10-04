import "./style.css";
import { resume } from "./resume-data.js";

const icon = (name) => {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
    code: '<path d="m8 5-7 7 7 7m8-14 7 7-7 7"/>',
    factory: '<path d="M3 21V3h4v10l7-5v5l7-5v13H3Zm4-4h1m5 0h1m4 0h1"/>',
    flask: '<path d="M9 3h6m-5 0v7L4 21h16l-6-11V3M7 16h10"/>',
    radio: '<circle cx="12" cy="12" r="2"/><path d="M5 5a10 10 0 0 0 0 14M8 8a6 6 0 0 0 0 8m11-11a10 10 0 0 1 0 14m-3-11a6 6 0 0 1 0 8"/>',
    graduation: '<path d="m2 8 10-5 10 5-10 5L2 8Zm4 2v7c4 3 8 3 12 0v-7M22 8v8"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    linkedin: '<path d="M6.5 8.1H3.2V19h3.3V8.1ZM4.85 3A1.9 1.9 0 1 0 4.85 6.8 1.9 1.9 0 0 0 4.85 3ZM20.8 12.75c0-3.28-1.75-4.8-4.08-4.8-1.88 0-2.72 1.03-3.2 1.76V8.1h-3.3V19h3.3v-5.4c0-1.42.27-2.8 2.03-2.8 1.73 0 1.75 1.62 1.75 2.9V19h3.3l.2-6.25Z"/>',
    mail: '<path d="M3 5h18v14H3V5Zm1.8 1.8L12 12.1l7.2-5.3M4.8 17.2l5.2-4m9.2 4-5.2-4"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    building: '<path d="M5 21V4h14v17M8 8h2m4 0h2m-8 4h2m4 0h2m-8 4h2m4 0h2M3 21h18"/>',
    calendar: '<path d="M5 3v3m14-3v3M4 9h16M4 5h16v16H4z"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>',
    briefcase: '<path d="M9 6V4h6v2M4 7h16v13H4V7Zm0 5h16M9 12v2m6-2v2"/>',
    file: '<path d="M6 3h9l4 4v14H6V3Zm9 0v5h5M9 12h7m-7 4h7"/>',
    chart: '<path d="M4 20V10m5 10V4m5 16v-7m5 7V7M2 21h20"/>',
    bot: '<path d="M12 8V4H8m-2 4h12a2 2 0 0 1 2 2v8H4v-8a2 2 0 0 1 2-2Zm-4 6H0m24 0h-2M9 13v2m6-2v2"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
    trend: '<path d="m3 17 6-6 4 4 8-9m-5 0h5v5"/>',
    workflow: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M6.5 10v4a3 3 0 0 0 3 3H14"/>',
    folder: '<path d="M3 6h7l2 2h9v11H3V6Z"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 13v7H4V6h7"/>',
    discover: '<circle cx="9" cy="8" r="4"/><path d="M2 21c.8-4 3.1-6 7-6s6.2 2 7 6m1-16v6m-3-3h6"/>',
    prepare: '<path d="M6 3h9l4 4v14H6V3Zm9 0v5h5M9 12h7m-7 4h7"/>',
    model: '<path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 3 4 3 3 0 0 0 5 2V6a3 3 0 0 0-3-2Zm6 0a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-3 4 3 3 0 0 1-5 2V6a3 3 0 0 1 3-2Z"/>',
    validate: '<path d="M9 18h6M10 22h4m-6-8a7 7 0 1 1 8 0c-1 .8-1.5 1.7-1.5 3h-5c0-1.3-.5-2.2-1.5-3Z"/>',
    deploy: '<path d="m14 5 5-2-2 5m2-5-7 7m-2-4c-4 1-6 4-6 8l6 6c4 0 7-2 8-6M7 17l-3 3m5-1-1 3m-3-7-3 1"/>'
  };
  const filled = name === "github" || name === "linkedin";
  return `<svg viewBox="0 0 24 24" aria-hidden="true" ${filled ? 'class="filled"' : ''}>${paths[name] || paths.model}</svg>`;
};

const tags = (items) => `<div class="tags">${items.map((item) => `<span>${item}</span>`).join("")}</div>`;
// Keep the complete skill inventory in its relevant category.
const skillIcons = ["chart", "trend", "database", "bot", "code"];
const skillIcon = (name, fallback) => {
  if (/SQL|Pandas|NumPy|Dataset|Cleaning|Transformation|Modeling/.test(name)) return "database";
  if (/Python|Scikit|FastAPI|APIs|Git|Lang/.test(name)) return "code";
  if (/Monitoring|Detection|Testing|Validation|Evaluation|MAE|RMSE|MAPE/.test(name)) return "search";
  if (/Pipelines|Deployment|Orchestration|Batch|Agile|Scrum/.test(name)) return "workflow";
  if (/Forecast|Time-Series|Predictive|Scenario/.test(name)) return "trend";
  if (/LLM|RAG|Agent|OCR|Semantic|Embeddings|Vector/.test(name)) return "bot";
  if (/Stakeholder|Human/.test(name)) return "discover";
  if (/Reporting|Requirements/.test(name)) return "file";
  return fallback;
};
const skillCategories = resume.skillGroups.map((group, index) => ({
  ...group,
  tone: ["cyan", "purple", "green", "purple", "cyan", "green"][index],
  skills: group.skills.map(skill => ({ ...skill, icon: skillIcon(skill.name, skillIcons[index]) }))
}));

const app = document.querySelector("#app");
document.body.classList.add("booting");
app.innerHTML = `
  <div class="boot-screen" aria-hidden="true">
    <div class="boot-terminal">
      <div class="terminal-bar"><span class="terminal-lights"><i></i><i></i><i></i></span><strong>ai-solution-console.sys</strong></div>
      <div class="terminal-body">
        <p class="boot-line" style="--delay:.15s">&gt; Initializing AI Engineering System...</p>
        <p class="boot-line" style="--delay:.6s">&gt; Loading agentic workflows...</p>
        <p class="boot-line" style="--delay:1.05s">&gt; Connecting to the Agentic Engineering Environment...</p>
        <p class="boot-line" style="--delay:1.5s">&gt; Preparing complaint analysis workflows...</p>
        <p class="boot-line" style="--delay:1.95s">&gt; Loading Technical Solution Engineer Profile...</p>
        <p class="boot-line online" style="--delay:2.4s">&gt; Chandrakanth J - ONLINE <span class="terminal-cursor"></span></p>
        <div class="boot-track"><span></span></div>
      </div>
    </div>
  </div>
  <div class="noise"></div>
  <div class="data-particles" aria-hidden="true">${Array.from({ length: 22 }, (_, i) => `<span style="--x:${(i * 43) % 97}%;--y:${(i * 67) % 94}%;--d:${5 + (i % 8)}s;--s:${2 + (i % 4)}px"></span>`).join("")}</div>
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Go to the top"><span class="prompt">›_</span> ${resume.name}<b>.</b></a>
    <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span></button>
    <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#impact">Impact</a><a href="#experience">Experience</a><a href="#workflow">Workflow</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
  </header>

  <main>
    <section class="hero section" id="home">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span class="status-dot"></span> AI SOLUTION SYSTEM ONLINE</p>
        <div class="name-lockup"><h1>${resume.name}</h1><span class="name-orbit" aria-hidden="true"><i></i></span></div>
        <p class="role">${resume.role}</p><p class="role-line">${resume.secondaryRole}</p><p class="lede">${resume.intro}</p>
        <div class="socials" aria-label="Social links"><a href="${resume.github}" target="_blank" rel="noreferrer" aria-label="GitHub">${icon("github")}</a><a href="${resume.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon("linkedin")}</a><button data-copy-email aria-label="Copy email address">${icon("mail")}</button></div>
        <div class="hero-actions"><a class="button primary" href="#command-nav">Launch Console ${icon("arrow")}</a><a class="button secondary" href="#projects">Explore projects ${icon("arrow")}</a></div>
      </div>
      <div class="profile-orbit reveal" aria-label="Profile portrait of ${resume.name}">
        <div class="orbit orbit-one"><i></i></div><div class="orbit orbit-two"><i></i></div><div class="orbit orbit-three"><i></i></div>
        <div class="portrait-shell"><img src="/profile.png" alt="${resume.name}" /></div>
        <span class="orbit-label label-one">LANGGRAPH</span><span class="orbit-label label-two">VALKEY</span><span class="orbit-label label-three">RAG</span>
      </div>
    </section>

    <section class="section command-section" id="command-nav">
      <div class="section-heading centered reveal"><p class="kicker">// SYSTEM MODULES</p><h2>AI Command <span>Console</span></h2></div>
      <div class="command-grid">
        ${[["about","search","Analyze Profile"],["projects","chart","View Projects"],["workflow","flask","Delivery Workflow"],["experience","factory","Industry Impact"],["contact","radio","Contact Terminal"]].map(([target,glyph,label]) => `<a class="command-module reveal" href="#${target}">${icon(glyph)}<span>${label}</span></a>`).join("")}
      </div>
    </section>

    <section class="section about-section" id="about">
      <div class="about-grid">
        <div class="about-copy reveal">
          <div class="section-heading"><p class="kicker">// AI SOLUTIONS</p><h2>About <span>${resume.name}</span></h2></div>
          <div class="about-text">${resume.aboutParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
          <div class="profile-facts">
            <div>${icon("pin")}<span>${resume.profileFacts[0]}</span></div>
            <div>${icon("mail")}<a href="mailto:${resume.email}">${resume.profileFacts[1]}</a></div>
            <div>${icon("briefcase")}<span>${resume.profileFacts[2]}</span></div>
          </div>
          <div class="profile-highlights">${resume.profileHighlights.map((item, index) => `<div class="profile-highlight tone-${index}">${icon(item.icon)}<strong>${item.label}</strong></div>`).join("")}</div>
        </div>
        <div class="about-portrait reveal">
          <div class="about-photo"><img src="/profile.png" alt="${resume.name}" /></div>
          <div class="experience-badge"><strong>AI</strong><span>Engineering</span></div>
        </div>
      </div>
    </section>

    <section class="section impact-section" id="impact">
      <div class="section-heading centered reveal"><p class="kicker">// ENGINEERING HIGHLIGHTS</p><h2>AI Solution <span class="green-glow">Focus</span></h2></div>
      <div class="metrics">${resume.metrics.map((metric) => `<article class="metric metric-${metric.tone} panel reveal"><span class="metric-icon">${icon(metric.icon)}</span><strong>${metric.value}</strong><h3>${metric.label}</h3><p>${metric.detail}</p></article>`).join("")}</div>
    </section>

    <section class="section" id="experience">
      <div class="section-heading centered reveal"><p class="kicker">// PROFESSIONAL EXPERIENCE</p><h2>Professional <span>Experience</span></h2></div>
      <div class="timeline">${resume.experience.map((job) => `<article class="job reveal"><span class="timeline-node"><i></i></span><div class="job-card panel"><div class="job-icon">${icon("building")}</div><div class="job-body"><div class="job-head"><div><h3>${job.role}</h3>${job.companyUrl ? `<a class="company" href="${job.companyUrl}" target="_blank" rel="noreferrer">${job.company} ${icon("arrow")}</a>` : `<p class="company plain">${job.company}</p>`}<p class="employment">${job.employmentType}</p></div></div><div class="job-meta"><span>${icon("calendar")} ${job.period}</span><span>${icon("pin")} ${job.location}</span></div><ul>${job.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>${tags(job.stack)}</div></div></article>`).join("")}</div>
    </section>

    <section class="section workflow-section" id="workflow">
      <div class="section-heading centered reveal"><p class="kicker">// DELIVERY WORKFLOW</p><h2>AI Solution <span class="purple-glow">Workflow</span></h2><p>From understanding a problem to building, validating, and scaling a useful solution.</p></div>
      <div class="workflow-line reveal">${resume.workflow.map((step, index) => `<article class="workflow-step"><div class="workflow-icon tone-${index}">${icon(step.icon)}</div><h3>${step.title}</h3><p>${step.detail}</p></article>`).join("")}</div>
    </section>

    <section class="section education-section" id="education">
      <div class="section-heading centered reveal"><p class="kicker">// EDUCATION</p><h2>Academic <span>Background</span></h2></div>
      <div class="education-layout"><article class="education-card panel reveal"><div class="education-seal">${icon("graduation")}</div><div><p class="mini-label">${resume.education.period}</p><h3>${resume.education.degree}</h3><p class="institution">${resume.education.institution}</p><p>${resume.education.location}</p><strong>${resume.education.result}</strong></div></article></div>
    </section>

    <section class="section skills-section" id="skills">
      <div class="section-heading centered reveal"><p class="kicker">SKILLS</p><h2>My <span>Arsenal</span></h2></div>
      <div class="skill-matrix">${skillCategories.map((group) => `<div class="skill-group ${group.tone} reveal"><h3>// ${group.title}</h3><div class="skill-cards">${group.skills.map((skill) => `<article class="skill-card panel"><span class="skill-glyph">${icon(skill.icon)}</span><h4>${skill.name}</h4>${skill.level ? `<div class="skill-bar"><i style="--level:${skill.level}%"></i></div><strong>${skill.level}%</strong>` : ""}</article>`).join("")}</div></div>`).join("")}</div>
    </section>

    <section class="section certifications-section" id="certifications">
      <div class="section-heading centered reveal"><p class="kicker">CERTIFICATIONS</p><h2>Professional <span>Certifications</span></h2></div>
      <div class="cert-list">${resume.certifications.map((cert) => `<article class="cert panel reveal"><span>${cert.year}</span><div><h3>${cert.title}</h3><p>${cert.issuer}</p></div></article>`).join("")}</div>
    </section>

    <section class="section projects-section" id="projects">
      <div class="section-heading centered reveal"><p class="kicker">// SELECTED BUILDS</p><h2>Featured <span>Projects</span></h2></div>
      <div class="project-filters reveal" aria-label="Filter projects"></div><div class="project-grid"></div>
    </section>

    <section class="contact section" id="contact">
      <div class="contact-details">
        <div class="section-heading centered reveal"><p class="kicker">CONTACT</p><h2>Get In <span>Touch</span></h2><p>Reach out to discuss AI engineering, agentic systems, or practical technical solutions.</p></div>
        <div class="contact-card panel reveal">
          <div class="contact-detail">${icon("mail")}<div><h3>Email</h3><a href="mailto:${resume.email}">${resume.email}</a></div></div>
          <div class="contact-detail">${icon("pin")}<div><h3>Location</h3><p>${resume.location}</p></div></div>
          <h3>Connect With Me</h3><div class="socials"><a href="${resume.github}" target="_blank" rel="noreferrer" aria-label="GitHub">${icon("github")}</a><a href="${resume.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon("linkedin")}</a></div>
        </div>
      </div>
      <div class="contact-terminal reveal"><p class="eyebrow"><span class="status-dot"></span> SYSTEM READY</p><h2><span class="contact-role">${resume.role}</span><br><span>Ready for deployment</span></h2><p>Let’s turn complex problems into useful AI solutions.</p><div class="contact-links"><a class="button secondary" href="${resume.linkedin}" target="_blank" rel="noreferrer">${icon("linkedin")} Connect on LinkedIn</a><button class="button ghost" data-copy-email>${icon("mail")} Copy email</button></div></div>
    </section>
  </main>
  <footer><a class="brand" href="#home"><span class="prompt">›_</span> ${resume.name}<b>.</b></a><p>${resume.role}</p><div class="footer-socials"><a href="${resume.github}" target="_blank" rel="noreferrer" aria-label="GitHub">${icon("github")}</a><a href="${resume.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon("linkedin")}</a><a href="mailto:${resume.email}" aria-label="Email">${icon("mail")}</a></div><p>© ${new Date().getFullYear()} ${resume.name}. All rights reserved.</p></footer>
  <button class="back-to-top" aria-label="Back to top">↑</button><div class="toast" role="status" aria-live="polite">Email copied to clipboard</div>
`;

const filters = document.querySelector(".project-filters");
const projectGrid = document.querySelector(".project-grid");
const categories = ["All", ...new Set(resume.projects.map((project) => project.category))];

function renderProjects(category = "All") {
  const filtered = category === "All" ? resume.projects : resume.projects.filter((project) => project.category === category);
  projectGrid.innerHTML = filtered.map((project) => `<article class="project-card panel reveal visible"><div class="project-accent"></div><div class="project-top"><span class="folder-icon">${icon("folder")}</span><span class="project-category">${project.category}</span></div><h3>${project.title}</h3><p>${project.description}</p><p class="project-stack">${project.stack.join(" · ")}</p><div class="project-footer">${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">${icon("github")} Repository ${icon("external")}</a>` : `<span class="project-note">Professional project</span>`}</div></article>`).join("");
}

filters.innerHTML = categories.map((category) => `<button class="filter ${category === "All" ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
filters.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderProjects(button.dataset.category);
});
renderProjects();

window.setTimeout(() => { document.body.classList.remove("booting"); document.body.classList.add("boot-complete"); }, 3300);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuToggle.addEventListener("click", () => { const open = menuToggle.getAttribute("aria-expanded") === "true"; menuToggle.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open); });
nav.addEventListener("click", () => { menuToggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); });

document.querySelectorAll("[data-copy-email]").forEach((button) => button.addEventListener("click", async () => {
  await navigator.clipboard.writeText(resume.email);
  const toast = document.querySelector(".toast"); toast.classList.add("show"); window.setTimeout(() => toast.classList.remove("show"), 2200);
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll("nav a")];
const topButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  const current = sections.filter((section) => section.getBoundingClientRect().top <= 160).at(-1)?.id;
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  topButton.classList.toggle("show", window.scrollY > 700);
}, { passive: true });
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
