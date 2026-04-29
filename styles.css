/* Top Hat Cleaners — GitHub edition */
:root {
  --plum: #4A3851;
  --plum-dark: #2D2235;
  --plum-deep: #1A1322;
  --mauve: #6D5573;
  --mauve-light: #8B6F93;
  --lavender: #A88BA8;
  --lavender-soft: #C9B8DC;
  --lavender-pale: #F2EBF9;
  --cream: #FAF5F0;
  --cream-warm: #F5EDE2;
  --gold: #B8975E;
  --gold-light: #D4BB85;
  --border: #DDD5E8;
  --ink: #2D2235;
  --muted: #7A7085;
  --success: #6B9171;
  --danger: #C97373;
  --r: 14px;
  --r-sm: 8px;
  --r-lg: 20px;
  --shadow-sm: 0 2px 8px rgba(74,56,81,0.06);
  --shadow: 0 6px 18px rgba(74,56,81,0.1);
  --shadow-lg: 0 20px 50px rgba(74,56,81,0.18);
}

* { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: 'DM Sans', -apple-system, system-ui, sans-serif;
  background: var(--cream);
  color: var(--ink);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
button { font-family: inherit; cursor: pointer; }
a { color: var(--plum); text-decoration: none; }
input, select, textarea { font-family: inherit; }

/* ============== NAV ============== */
.nav {
  background: rgba(250,245,240,0.92);
  backdrop-filter: blur(20px) saturate(1.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid rgba(168,139,168,0.15);
  padding: 12px 22px;
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.nav-brand { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.nav-brand img { width: 42px; height: 42px; object-fit: contain; }
.nav-brand-text {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 17px;
  color: var(--plum);
  line-height: 1.05;
}
.nav-brand-text span {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9.5px;
  color: var(--muted);
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-top: 3px;
}
.nav-links { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; }
.nav-link {
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--mauve);
  transition: all 0.15s;
}
.nav-link:hover, .nav-link.active { color: var(--plum); background: var(--lavender-pale); }
.nav-cta {
  background: var(--plum);
  color: white !important;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(74,56,81,0.25);
}
.nav-cta:hover { background: var(--plum-dark); transform: translateY(-1px); }
@media (max-width: 600px) {
  .nav { padding: 10px 14px; }
  .nav-brand img { width: 36px; height: 36px; }
  .nav-brand-text { font-size: 14px; }
  .nav-brand-text span { font-size: 8px; letter-spacing: 1.5px; }
  .nav-link.hide-sm { display: none; }
  .nav-link { padding: 7px 10px; font-size: 13px; }
  .nav-cta { padding: 8px 14px; font-size: 13px; }
}

/* ============== TYPOGRAPHY ============== */
.h1 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 800;
  font-size: clamp(34px, 7vw, 64px);
  color: var(--plum);
  line-height: 1.05;
  letter-spacing: -1px;
}
.h2 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: clamp(28px, 5vw, 42px);
  color: var(--plum);
  line-height: 1.1;
  letter-spacing: -0.5px;
}
.h3 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: clamp(20px, 3vw, 24px);
  color: var(--plum);
  line-height: 1.2;
}
.tag-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 12px;
}
.muted { color: var(--muted); }
em { font-style: italic; color: var(--mauve); }

/* ============== BUTTONS ============== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;
  justify-content: center;
}
.btn-lg { padding: 17px 36px; font-size: 15px; }
.btn-p { background: var(--plum); color: white; box-shadow: 0 4px 14px rgba(74,56,81,0.25); }
.btn-p:hover { background: var(--plum-dark); transform: translateY(-2px); }
.btn-s { background: white; color: var(--plum); border: 1px solid var(--border); }
.btn-s:hover { border-color: var(--plum); background: var(--lavender-pale); }
.btn-gold { background: var(--gold); color: white; box-shadow: 0 4px 14px rgba(184,151,94,0.3); }
.btn-gold:hover { background: var(--mauve); transform: translateY(-2px); }
.btn-ghost { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); }
.btn-ghost:hover { background: rgba(255,255,255,0.1); }
.btn[disabled] { opacity: 0.6; cursor: not-allowed; }

/* ============== CONTAINERS ============== */
.wrap { max-width: 1200px; margin: 0 auto; padding: 32px 22px; }
.wrap-sm { max-width: 760px; }
.wrap-md { max-width: 980px; }
.section { padding: 80px 22px; }
@media (max-width: 600px) {
  .wrap { padding: 24px 16px; }
  .section { padding: 56px 16px; }
}

/* ============== HERO ============== */
.hero {
  position: relative;
  min-height: 600px;
  padding: 80px 22px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, var(--plum-deep) 0%, var(--plum) 50%, var(--mauve) 100%);
  color: white;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(184,151,94,0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(168,139,168,0.18) 0%, transparent 50%);
  pointer-events: none;
}
.hero-inner {
  max-width: 760px;
  text-align: center;
  position: relative;
  z-index: 2;
}
.hero-logo-top {
  width: 110px;
  height: 110px;
  margin: 0 auto 22px;
  filter: drop-shadow(0 10px 30px rgba(184,151,94,0.4));
}
.hero h1 {
  color: white;
  margin-bottom: 14px;
  text-shadow: 0 4px 30px rgba(0,0,0,0.3);
}
.hero h1 em { color: var(--gold-light); font-style: italic; }
.hero-sub {
  font-size: clamp(15px, 2vw, 19px);
  color: rgba(255,255,255,0.85);
  margin: 18px auto 30px;
  max-width: 560px;
  line-height: 1.6;
}
.hero-badges {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 26px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.hero-badge .icon { color: var(--gold-light); font-size: 12px; }
.hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 36px; }
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  max-width: 560px;
  margin: 0 auto;
  padding: 24px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--r);
}
.hero-stat { text-align: center; padding: 0 8px; }
.hero-stat-n {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 800;
  font-size: clamp(22px, 4vw, 30px);
  color: var(--gold-light);
  line-height: 1;
}
.hero-stat-l {
  font-size: 10px;
  color: rgba(255,255,255,0.6);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-top: 5px;
  font-weight: 500;
}

/* ============== TRUST STRIP ============== */
.trust-strip {
  background: white;
  padding: 24px 22px;
  border-bottom: 1px solid var(--border);
}
.trust-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 18px 32px;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--mauve);
}
.trust-icon {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--lavender-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--plum);
  font-size: 14px;
  font-weight: 700;
}

/* ============== BEFORE/AFTER ============== */
.ba-section {
  background: linear-gradient(180deg, var(--cream) 0%, var(--lavender-pale) 100%);
}
.ba-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  margin-top: 50px;
}
@media (min-width: 800px) { .ba-grid { grid-template-columns: 1fr 1fr; } }
.ba-card {
  background: white;
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}
.ba-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  background: var(--ink);
}
.ba-image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
}
.ba-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 60%;
}
.ba-label {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 14px;
  background: rgba(45,34,53,0.85);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 999px;
}
.ba-label.after {
  background: rgba(107,145,113,0.95);
}
.ba-divider-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(184,151,94,0.5);
  border: 2px solid white;
}
.ba-info { padding: 22px 24px; }
.ba-info .cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 6px;
}
.ba-info h3 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 22px;
  color: var(--plum);
  margin-bottom: 6px;
}
.ba-info p {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
}

/* ============== SERVICES ============== */
.svc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
  margin-top: 36px;
}
.svc-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px 24px;
  transition: all 0.25s;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}
.svc-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--lavender), var(--lavender-soft));
  opacity: 0;
  transition: opacity 0.2s;
}
.svc-card:hover::before { opacity: 1; }
.svc-card:hover { transform: translateY(-4px); border-color: var(--lavender); box-shadow: var(--shadow); }
.svc-card.featured::before { background: linear-gradient(90deg, var(--gold), var(--gold-light)); opacity: 1; }
.svc-card.featured { border-color: rgba(184,151,94,0.3); }
.svc-icon-large {
  width: 60px; height: 60px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--lavender-pale), var(--lavender-soft));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  color: var(--plum);
  font-size: 22px;
  margin-bottom: 14px;
  box-shadow: 0 6px 18px rgba(168,139,168,0.25);
}
.svc-card.featured .svc-icon-large {
  background: linear-gradient(135deg, rgba(184,151,94,0.15), rgba(212,187,133,0.3));
  color: var(--gold);
}
.svc-card .svc-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}
.svc-card h3 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 22px;
  color: var(--plum);
  margin-bottom: 8px;
}
.svc-card p {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
  font-style: italic;
}
.svc-featured-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: var(--gold);
  color: white;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

/* ============== HOW IT WORKS ============== */
.how-section {
  background: linear-gradient(160deg, var(--plum-dark) 0%, var(--plum) 100%);
  color: white;
  position: relative;
  overflow: hidden;
}
.how-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 80% 20%, rgba(184,151,94,0.1) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(168,139,168,0.1) 0%, transparent 50%);
  pointer-events: none;
}
.how-section .h2 { color: white; }
.how-section .tag-label { color: var(--gold-light); }
.how-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
  margin-top: 50px;
  position: relative;
  z-index: 2;
}
.how-step { text-align: center; padding: 0 12px; }
.how-num {
  width: 70px; height: 70px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(184,151,94,0.2), rgba(184,151,94,0.05));
  border: 2px solid rgba(184,151,94,0.4);
  color: var(--gold-light);
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 800;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.how-step h3 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 22px;
  margin-bottom: 10px;
  color: white;
}
.how-step p {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
}

/* ============== AREAS ============== */
.areas-section { background: var(--cream-warm); }
.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-top: 32px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.area-pill {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 14px 16px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--plum);
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);
}
.area-pill:hover {
  border-color: var(--lavender);
  background: var(--lavender-pale);
  transform: translateY(-2px);
}

/* ============== TESTIMONIALS / PROMISE ============== */
.testi-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-top: 40px;
}
@media (min-width: 800px) { .testi-grid { grid-template-columns: 1fr 1fr; } }
.testi {
  background: white;
  border-radius: var(--r);
  padding: 28px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  position: relative;
}
.testi::before {
  content: '"';
  position: absolute;
  top: 4px;
  left: 18px;
  font-family: 'Playfair Display', serif;
  font-size: 80px;
  font-weight: 700;
  color: var(--lavender-soft);
  line-height: 1;
  opacity: 0.6;
}
.testi-stars {
  color: #F4B942;
  letter-spacing: 2px;
  margin-bottom: 12px;
  font-size: 14px;
}
.testi-quote {
  font-size: 15px;
  color: var(--ink);
  line-height: 1.7;
  margin-bottom: 18px;
  font-style: italic;
  position: relative;
  z-index: 1;
}
.testi-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.testi-avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lavender-pale), var(--lavender-soft));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  color: var(--plum);
}
.testi-name { font-weight: 700; color: var(--plum); font-size: 14px; }
.testi-role { font-size: 12px; color: var(--muted); }

/* ============== FINAL CTA ============== */
.final-cta {
  background: linear-gradient(135deg, var(--plum) 0%, var(--plum-dark) 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.final-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 50% 50%, rgba(184,151,94,0.15) 0%, transparent 60%);
}
.final-cta-inner { position: relative; z-index: 2; }
.final-cta .h2 { color: white; }
.final-cta-sub {
  color: rgba(255,255,255,0.8);
  font-size: 16px;
  margin: 12px auto 28px;
  max-width: 520px;
}
.contact-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
.contact-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--r);
  padding: 20px 26px;
  text-align: center;
  min-width: 220px;
  transition: all 0.2s;
}
.contact-card:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }
.contact-card .label {
  font-size: 10px;
  color: var(--lavender-soft);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-weight: 600;
}
.contact-card .val {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  color: white;
  font-size: 17px;
}

/* ============== FOOTER ============== */
.footer {
  background: var(--plum-deep);
  color: rgba(255,255,255,0.65);
  padding: 50px 22px 28px;
  text-align: center;
}
.footer-logo { width: 72px; height: 72px; margin: 0 auto 14px; opacity: 0.9; }
.footer-name {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  color: white;
  margin-bottom: 4px;
}
.footer-tag {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 14px;
  color: var(--lavender-soft);
  letter-spacing: 2px;
  margin-bottom: 22px;
}
.footer-links {
  display: flex;
  gap: 22px;
  justify-content: center;
  margin: 18px 0 22px;
  flex-wrap: wrap;
}
.footer-links a {
  color: rgba(255,255,255,0.75);
  font-size: 13px;
  font-weight: 500;
}
.footer-links a:hover { color: white; }
.footer-contact { font-size: 13px; line-height: 1.8; margin-top: 14px; }
.footer-contact a { color: white; font-weight: 500; }
.footer-divider {
  width: 60px;
  height: 1px;
  background: rgba(255,255,255,0.2);
  margin: 22px auto;
}
.footer-nap {
  font-size: 11px;
  margin-top: 14px;
  opacity: 0.55;
  line-height: 1.7;
}

/* ============== FORMS ============== */
.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 18px;
}
@media (max-width: 600px) { .card { padding: 24px 18px; } }
.card-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 21px;
  font-weight: 700;
  color: var(--plum);
  margin-bottom: 4px;
}
.card-sub { font-size: 13px; color: var(--muted); margin-bottom: 22px; font-style: italic; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.field-row.full { grid-template-columns: 1fr; }
.field-row.three { grid-template-columns: 1fr 1fr 1fr; }
@media (max-width: 600px) { .field-row, .field-row.three { grid-template-columns: 1fr; } }
.field { display: flex; flex-direction: column; }
.field label {
  font-size: 11px;
  font-weight: 600;
  color: var(--mauve-light);
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.field label .req { color: var(--danger); }
.field input, .field select, .field textarea {
  padding: 13px 15px;
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  background: white;
  font-size: 15px;
  color: var(--ink);
  width: 100%;
  font-weight: 500;
  transition: all 0.15s;
}
.field input:focus, .field select:focus, .field textarea:focus {
  outline: none;
  border-color: var(--plum);
  box-shadow: 0 0 0 3px rgba(74,56,81,0.08);
}
.field textarea { min-height: 100px; resize: vertical; line-height: 1.5; }
.field-help { font-size: 12px; color: var(--muted); margin-top: 5px; font-style: italic; }

/* Notice */
.notice {
  background: rgba(184,151,94,0.08);
  border: 1px solid rgba(184,151,94,0.3);
  border-left: 4px solid var(--gold);
  border-radius: var(--r-sm);
  padding: 14px 18px;
  font-size: 13px;
  color: var(--ink);
  line-height: 1.5;
  margin-bottom: 18px;
}
.notice strong { color: var(--plum); }
.notice a { color: var(--plum); font-weight: 600; }
.notice.success {
  background: rgba(107,145,113,0.08);
  border-color: rgba(107,145,113,0.3);
  border-left-color: var(--success);
}

/* Confirmation */
.confirm-box {
  text-align: center;
  padding: 50px 24px;
  background: white;
  border: 2px solid var(--success);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow);
}
.confirm-icon {
  width: 80px; height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lavender-pale), var(--lavender-soft));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}
.confirm-id {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 22px;
  color: var(--gold);
  font-weight: 700;
  margin: 8px 0 16px;
}

/* ============== ADMIN ============== */
.adm-bar {
  background: var(--plum-dark);
  color: white;
  padding: 14px 22px;
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.adm-brand { display: flex; align-items: center; gap: 10px; }
.adm-brand img { width: 36px; height: 36px; }
.adm-brand-text {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 17px;
  color: white;
}
.adm-brand-text span {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  color: var(--lavender-soft);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 2px;
}
.adm-btns { display: flex; gap: 6px; flex-wrap: wrap; }
.adm-btn {
  background: rgba(255,255,255,0.1);
  color: white;
  border: 1px solid rgba(255,255,255,0.15);
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s;
}
.adm-btn:hover { background: rgba(255,255,255,0.2); }
.adm-btn.primary { background: white; color: var(--plum); border: none; }

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 22px;
}
.stat {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 18px;
  text-align: center;
  box-shadow: var(--shadow-sm);
}
.stat-n { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 800; font-size: 32px; color: var(--plum); line-height: 1; }
.stat-l { font-size: 10px; color: var(--muted); letter-spacing: 1.5px; text-transform: uppercase; margin-top: 6px; font-weight: 600; }

.fbar { display: flex; gap: 6px; margin-bottom: 14px; flex-wrap: wrap; align-items: center; }
.fpill {
  padding: 8px 16px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: var(--mauve);
  cursor: pointer;
  transition: all 0.15s;
}
.fpill.on { background: var(--plum); color: white; border-color: var(--plum); }
.search {
  flex: 1;
  min-width: 180px;
  padding: 8px 14px;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 13px;
  background: white;
}

.b-list { display: flex; flex-direction: column; gap: 8px; }
.b-row {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 14px 18px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: center;
  box-shadow: var(--shadow-sm);
}
@media (max-width: 600px) {
  .b-row { grid-template-columns: 1fr; }
  .b-acts { justify-content: flex-end; }
}
.b-icon {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lavender-pale), var(--lavender-soft));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 17px;
  color: var(--plum);
}
.b-name { font-weight: 700; font-size: 14px; color: var(--ink); margin-bottom: 3px; }
.b-id { font-size: 10px; color: var(--muted); background: var(--lavender-pale); padding: 1px 7px; border-radius: 999px; margin-left: 6px; }
.b-meta { font-size: 12px; color: var(--mauve); line-height: 1.5; }
.b-meta strong { color: var(--plum); }
.b-acts { display: flex; gap: 4px; }
.b-act {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: var(--lavender-pale);
  border: 1px solid var(--border);
  cursor: pointer;
  font-size: 13px;
  color: var(--plum);
  transition: all 0.15s;
}
.b-act:hover { background: var(--plum); color: white; }
.b-act.danger:hover { background: var(--danger); }

.badge {
  display: inline-flex;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: 6px;
}
.badge.pending { background: rgba(184,151,94,0.15); color: var(--gold); }
.badge.confirmed { background: rgba(107,145,113,0.15); color: var(--success); }
.badge.completed { background: rgba(107,145,113,0.25); color: var(--success); }
.badge.cancelled { background: rgba(201,115,115,0.15); color: var(--danger); }

.empty { text-align: center; padding: 50px 20px; background: white; border-radius: var(--r); border: 1px dashed var(--border); }
.empty-i { font-size: 40px; opacity: 0.5; margin-bottom: 10px; }

/* Login */
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(160deg, var(--plum-deep) 0%, var(--plum) 100%);
}
.login-card {
  background: white;
  border-radius: var(--r-lg);
  padding: 40px 32px;
  box-shadow: 0 30px 80px rgba(45,34,53,0.4);
  max-width: 420px;
  width: 100%;
  text-align: center;
}
.login-logo { width: 100px; height: 100px; margin: 0 auto 20px; }
.login-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 26px;
  color: var(--plum);
  margin-bottom: 4px;
}
.login-sub { color: var(--muted); font-size: 13px; margin-bottom: 24px; font-style: italic; }
.login-error {
  background: #FCEEEE;
  border: 1px solid #E5C5C5;
  color: var(--danger);
  padding: 10px 14px;
  border-radius: var(--r-sm);
  font-size: 13px;
  margin-bottom: 14px;
  display: none;
}
.login-error.show { display: block; }
