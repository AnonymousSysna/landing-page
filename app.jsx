const { useEffect, useState } = React;

const PROJECTS = [
  {
    name: "Momoyo Philippines",
    type: "F&B Brand Website",
    desc: "Fresh fruit tea, handcrafted ice cream, and coffee website with menu, stores, and franchise pages.",
    url: "https://demo-momoyo.torralbaportfolio.com/",
    tags: ["Next.js", "React", "Brand Website"],
  },
  {
    name: "GitHubFinds",
    type: "Developer Discovery Platform",
    desc: "Curated GitHub trending repositories worth building with, organized for quick discovery.",
    url: "https://githubfinds.dev/",
    tags: ["Web App", "Developer Tools", "Curation"],
  },
  {
    name: "Imagine Art Supplies",
    type: "E-Commerce · COD Store",
    desc: "Custom COD ordering platform with product gallery, 3-step order flow, and order summary.",
    url: "https://demo-imagineartsupplies.torralbaportfolio.com/",
    tags: ["PHP", "HTML/CSS", "COD Flow"],
  },
  {
    name: "Time to Create",
    type: "Arts & Crafts · Brisbane",
    desc: "Full arts and crafts retailer with product categories, new collections, blog, and newsletter.",
    url: "https://demo-time-to-create.torralbaportfolio.com/",
    tags: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    name: "Time to Create (Legacy)",
    type: "WordPress · Elementor",
    desc: "Earlier Time to Create storefront with stamping, paper craft, and golden amber branding.",
    url: "https://demo-time-to-create-legacy.torralbaportfolio.com/",
    tags: ["WordPress", "Elementor Pro", "E-Commerce"],
  },
  {
    name: "Top's Art Supplies",
    type: "Homepage Redesign",
    desc: "Redesign for a 39-year-old art supplies store — gallery product grid, featured picks, new arrivals.",
    url: "https://demo-topsartsupplies.torralbaportfolio.com/",
    tags: ["UI Redesign", "React", "E-Commerce"],
  },
  {
    name: "Oakhurst Grill & Whiskey",
    type: "Restaurant & Bar",
    desc: "Demo site for a grill and whiskey bar — menu showcase, ambiance-driven layout, and reservation-ready design.",
    url: "https://demo-oakhurstgrillandwhiskey41.torralbaportfolio.com/",
    tags: ["HTML/CSS", "JavaScript", "Restaurant"],
  },
];

const STACK = [
  {
    label: "Front-End",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "CMS & E-Commerce",
    items: ["WordPress", "WooCommerce", "Elementor", "PHP", "Laravel"],
  },
  {
    label: "Back-End & Data",
    items: ["Node.js", "Express", "MySQL", "PostgreSQL", "MongoDB", "Git"],
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Hero elements are already in view on load — trigger them after a short frame
    const heroEls = document.querySelectorAll(".hero .fade");
    const tid = setTimeout(() => heroEls.forEach((el) => el.classList.add("visible")), 60);

    // Everything else fades in as it scrolls into view
    const rest = document.querySelectorAll(".section .fade");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    rest.forEach((el) => observer.observe(el));

    return () => { clearTimeout(tid); observer.disconnect(); };
  }, []);

  return (
    <div className="page">

      {/* Nav */}
      <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <span className="nav-brand">Torralba Dev</span>
        <a className="btn" href="mailto:devtorralba@gmail.com">Hire Me</a>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="badge fade" style={{transitionDelay:"0ms"}}>Open to Work</span>
          <h1 className="fade" style={{transitionDelay:"80ms"}}>Web Developer for E-Commerce&nbsp;&amp; Local Business</h1>
          <p className="hero-sub fade" style={{transitionDelay:"160ms"}}>
            I build clean, functional websites — WooCommerce stores, custom COD checkouts,
            WordPress builds, and React redesigns. Based in Brisbane.
          </p>
          <a className="btn btn--lg fade" style={{transitionDelay:"240ms"}} href="mailto:devtorralba@gmail.com">Get in Touch</a>
        </div>
      </section>

      {/* Work */}
      <section className="section" id="work">
        <div className="container">
          <h2 className="section-title fade">Featured Work</h2>
          <p className="section-sub fade" style={{transitionDelay:"80ms"}}>Live demo sites built for art supply and creative retail businesses.</p>
          <div className="projects">
            {PROJECTS.map((p, i) => (
              <a key={p.name} className="card fade" style={{transitionDelay:`${i * 80}ms`}} href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="card-header">
                  <div>
                    <span className="card-type">{p.type}</span>
                    <h3 className="card-name">{p.name}</h3>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="card-arrow">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
                <p className="card-desc">{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section section--alt" id="stack">
        <div className="container">
          <h2 className="section-title fade">Skills &amp; Stack</h2>
          <p className="section-sub fade" style={{transitionDelay:"80ms"}}>Tools I use across the full build — front to back.</p>
          <div className="stack-grid">
            {STACK.map((group, i) => (
              <div key={group.label} className="stack-group fade" style={{transitionDelay:`${i * 80}ms`}}>
                <h4 className="stack-label">{group.label}</h4>
                <div className="pills">
                  {group.items.map((item) => <span key={item} className="pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Torralba Dev &copy; {year}</p>
        <p><a href="mailto:devtorralba@gmail.com">devtorralba@gmail.com</a></p>
      </footer>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
