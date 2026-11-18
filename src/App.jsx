import { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { ArrowUpRight, Download, Mail, Github, Linkedin, Phone, MapPin, Users, User, Award, GraduationCap, Layout, Server, Database } from 'lucide-react'

const GH = 'https://github.com/shahd210'
const EMAIL = 'shahdkhairy2026@gmail.com'
const LI = 'https://linkedin.com/in/shahd-khairy-2a2287364'

const skills = [
  ['Frontend', ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']],
  ['Backend', ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'Mongoose', 'MVC', 'Laravel (PHP)']],
  ['Databases', ['MongoDB', 'MySQL', 'PostgreSQL', 'SQL']],
  ['Cloud & DevOps', ['AWS', 'Linux', 'Docker', 'Kubernetes', 'CI/CD']],
  ['Tools', ['Git', 'GitHub', 'Postman']],
  ['Other', ['C++', 'OOP', 'Data Structures', 'Agile', 'UX Research']],
]

const jobs = [
  { role: 'Frontend Developer Trainee', org: 'Digital Fortress EG', when: '10/2026 – Present', where: 'Giza',
    pts: ['Build responsive, reusable UIs with React.js, JavaScript and Tailwind CSS.', 'Turn UI designs into functional pages using component-based architecture.', 'Integrate frontend components with backend APIs alongside the team.'] },
  { role: 'Full Stack Developer Trainee', org: 'Darwish & Co.', when: '09/2026 – Present', where: 'Cairo',
    pts: ['Translate UX designs into React and Tailwind features.', 'Build RESTful APIs with Laravel/PHP and MySQL, and with Node.js.', 'Run UX research: competitive analysis, personas, journey maps, user flows, feature prioritization.'] },
  { role: 'Specialized Diploma in AI-Based Software Development', org: 'Digilians – MCIT & Egyptian Military Academy', when: '12/2025 – 09/2026', where: 'Cairo',
    pts: ['Intensive residential program in a disciplined military-based environment.', 'Built MERN apps, REST APIs, auth systems and MVC backends.', 'Worked with AWS, Docker, Kubernetes, Linux and CI/CD; collaborated in a 5-member team with code reviews and Agile.'] },
]

const projects = [
  { name: 'ImpersonaGuard', sub: 'AI-powered cybersecurity platform', team: true, when: '10/2026 – Present', big: true,
    mine: 'Frontend: 8+ responsive pages, shared components, routing and motion.',
    feats: ['Reusable UI components shared across pages', 'Client-side navigation with React Router', 'Animations and transitions with Framer Motion'],
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Router'] },
  { name: 'System Atlas', sub: 'Software architecture knowledge platform', team: true, when: '04/2026 – 08/2026',
    mine: 'Engineered the User Management module across frontend and backend.',
    feats: ['REST APIs for authentication and user administration', '5-member team, Git workflows, code reviews'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cytoscape.js'] },
  { name: 'Restaurant Management System', sub: 'MERN, 5+ modules', team: false, when: '05/2026 – 08/2026',
    mine: 'Full stack build, end to end.',
    feats: ['Authentication, orders, cart, notifications', 'Admin dashboard', 'Role-based authorization, protected REST APIs'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vite'] },
  { name: 'Furniture E-Commerce Platform', sub: 'Full stack MERN shop', team: false, when: '01/2026 – 02/2026',
    mine: 'Full stack build, end to end.',
    feats: ['Catalog, search, filtering, categories', 'Shopping cart and basic order management', 'JWT/bcrypt auth with MVC architecture'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'bcrypt', 'Bootstrap 5'] },
]

const certs = [['AWS Certified Cloud Practitioner', 'AWS · Aug 2026'], ['Meta Front-End Developer Professional Certificate', 'Meta & Coursera · Apr 2026'], ['DevOps Complete Course Specialization', 'Packt · May 2026']]

const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
)

const Section = ({ id, route, title, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
    <Reveal><p className="font-mono text-sm text-accent">{route}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-5xl">{title}</h2></Reveal>
    <div className="mt-12">{children}</div>
  </section>
)

const Tag = ({ children }) => <span className="rounded border border-line px-2.5 py-1 font-mono text-xs text-mute">{children}</span>

const Btn = ({ href, children, primary, ...p }) => (
  <a href={href} {...p} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${primary ? 'bg-accent text-ink' : 'border border-line text-paper hover:border-accent hover:text-accent'}`}>{children}</a>
)

function Nav() {
  const links = [['about', 'About'], ['stack', 'Stack'], ['experience', 'Experience'], ['work', 'Work'], ['contact', 'Contact']]
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a href="#top" className="font-mono text-sm">shahd<span className="text-accent">.dev</span></a>
        <ul className="hidden gap-8 text-sm text-mute md:flex">
          {links.map(([id, l]) => <li key={id}><a href={`#${id}`} className="transition hover:text-paper">{l}</a></li>)}
        </ul>
        <a href="/Shahd_Khairy_CV.pdf" download className="font-mono text-xs text-accent md:hidden">CV ↓</a>
      </nav>
    </header>
  )
}

const E = [0.22, 1, 0.36, 1]
const words = ['Ideas in.', 'Working apps out.']
const marquee = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Laravel', 'MySQL', 'Tailwind CSS', 'Framer Motion', 'Docker', 'AWS', 'JWT', 'Git']

function StackVisual() {
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 15 }), sy = useSpring(my, { stiffness: 80, damping: 15 })
  const rx = useTransform(sy, [-1, 1], [8, -8]), ry = useTransform(sx, [-1, 1], [-10, 10])
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width) * 2 - 1); my.set(((e.clientY - r.top) / r.height) * 2 - 1) }
  const layers = [[Layout, 'UI', 'React · Tailwind · Framer Motion'], [Server, 'API', 'Node · Express · Laravel · JWT'], [Database, 'DATA', 'MongoDB · MySQL · PostgreSQL']]
  return (
    <div onMouseMove={move} onMouseLeave={() => { mx.set(0); my.set(0) }} style={{ perspective: 1000 }} className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className="relative space-y-6">
        <div className="absolute bottom-10 left-[2.95rem] top-10 w-px bg-line" />
        <motion.span className="absolute left-[2.8rem] h-2 w-2 rounded-full bg-mint" animate={{ top: ['8%', '88%', '8%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
        {layers.map(([Icon, t, s], i) => (
          <motion.div key={t} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: E }}>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }} style={{ translateZ: (2 - i) * 30 }}
              className="flex items-center gap-4 rounded-2xl border border-line bg-panel/90 p-5 shadow-xl backdrop-blur">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={22} /></span>
              <div><p className="font-mono text-xs text-accent">{t}</p><p className="text-sm">{s}</p></div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function Hero() {
  return (
    <>
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#2c2c3a 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 30% 40%, #000 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 40%, #000 20%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-xs text-mute">
              Shahd Khairy Abdallah <span className="mx-2 text-accent">/</span> Full Stack Developer
            </motion.p>
            <h1 className="mt-7 text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              {words.map((w, i) => (
                <span key={w} className="block overflow-hidden pb-2">
                  <motion.span className={`block ${i ? 'text-accent' : ''}`} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: E }}>{w}</motion.span>
                </span>
              ))}
            </h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7, ease: E }} className="mt-6 max-w-lg text-lg text-mute">
              Full Stack Developer in Cairo. I build React interfaces, secure REST APIs and database-backed features, and I like owning the whole flow.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7, ease: E }} className="mt-9 flex flex-wrap gap-3">
              <Btn href="#work" primary>View My Work <ArrowUpRight size={16} /></Btn>
              <Btn href="/Shahd_Khairy_CV.pdf" download="Shahd_Khairy_CV.pdf"><Download size={16} /> Download CV</Btn>
              <Btn href="#contact"><Mail size={16} /> Contact Me</Btn>
            </motion.div>
          </div>
          <StackVisual />
        </div>
      </section>
      <div className="overflow-hidden border-y border-line py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-12 font-mono text-sm text-mute">
          {[...marquee, ...marquee].map((m, i) => <span key={i} className="flex items-center gap-12">{m}<span className="text-accent">✦</span></span>)}
        </div>
      </div>
    </>
  )
}

function About() {
  return (
    <Section id="about" route="/about" title="How I work">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="space-y-5 text-lg text-mute md:col-span-3">
          <p>I'm a full stack developer based in Cairo, focused on the MERN stack. I like work that spans the whole loop: understanding the user, designing the flow, building the interface and wiring it to a secure API.</p>
          <p>My training combined an intensive residential software engineering diploma with two concurrent trainee roles, covering system design, testing, debugging, requirements analysis and technical documentation.</p>
          <p>I work in teams the way production teams do: Git workflows, code reviews and Agile practices.</p>
        </Reveal>
        <Reveal delay={0.15} className="space-y-4 md:col-span-2">
          {[['5+', 'modules in my restaurant system'], ['8+', 'pages built for ImpersonaGuard'], ['5', 'person team on System Atlas'], ['3', 'professional certifications']].map(([n, l]) => (
            <div key={l} className="flex items-baseline gap-4 border-b border-line pb-4"><span className="w-14 text-3xl font-bold text-accent">{n}</span><span className="text-mute">{l}</span></div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}

function Stack() {
  return (
    <Section id="stack" route="/stack" title="Technical skills">
      <div className="divide-y divide-line border-y border-line">
        {skills.map(([cat, items], i) => (
          <Reveal key={cat} delay={i * 0.04} className="grid gap-3 py-6 md:grid-cols-4">
            <h3 className="font-mono text-sm text-accent">{cat}</h3>
            <div className="flex flex-wrap gap-2 md:col-span-3">
              {items.map((s) => <span key={s} className="rounded-full border border-line bg-panel px-4 py-1.5 text-sm transition hover:border-accent hover:text-accent">{s}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" route="/experience" title="Experience & training">
      <ol className="relative ml-2 border-l border-line">
        {jobs.map((j, i) => (
          <Reveal key={j.role} delay={i * 0.08} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-mute">{j.when} · {j.where}</p>
            <h3 className="mt-1 text-xl font-bold">{j.role}</h3>
            <p className="text-accent">{j.org}</p>
            <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-mute marker:text-line">{j.pts.map((p) => <li key={p}>{p}</li>)}</ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

function Project({ p, i }) {
  return (
    <Reveal delay={i * 0.05} className={p.big ? 'md:col-span-2' : ''}>
      <article className="group h-full rounded-xl border border-line bg-panel p-7 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_50px_-20px_rgba(139,124,246,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">{p.team ? <Users size={14} /> : <User size={14} />}{p.team ? 'Team project' : 'Individual project'}</span>
          <span className="font-mono text-xs text-mute">{p.when}</span>
        </div>
        <h3 className={`mt-4 font-bold ${p.big ? 'text-3xl' : 'text-2xl'}`}>{p.name}</h3>
        <p className="text-mute">{p.sub}</p>
        <p className="mt-4 text-sm"><span className="font-mono text-accent">My part: </span>{p.mine}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-mute">{p.feats.map((f) => <li key={f} className="flex gap-2"><span className="text-accent">→</span>{f}</li>)}</ul>
        <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
        <a href={GH} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm transition hover:text-accent"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
      </article>
    </Reveal>
  )
}

function Work() {
  return <Section id="work" route="/work" title="Featured projects"><div className="grid gap-6 md:grid-cols-2">{projects.map((p, i) => <Project key={p.name} p={p} i={i} />)}</div></Section>
}

function Education() {
  return (
    <Section id="education" route="/education" title="Education & certifications">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-xl border border-line p-6"><GraduationCap className="text-accent" />
          <h3 className="mt-4 text-xl font-bold">Bachelor of Commerce</h3><p className="text-mute">Cairo University</p><p className="mt-1 font-mono text-xs text-mute">09/2021 – 06/2025</p></Reveal>
        <div className="space-y-4">{certs.map(([n, s], i) => (
          <Reveal key={n} delay={i * 0.06} className="flex gap-4 rounded-xl border border-line p-5"><Award className="mt-0.5 shrink-0 text-accent" size={20} />
            <div><h3 className="font-medium">{n}</h3><p className="font-mono text-xs text-mute">{s}</p></div></Reveal>))}</div>
      </div>
    </Section>
  )
}

function Contact() {
  const [f, setF] = useState({ name: '', message: '' })
  const submit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(f.message)}`
  }
  const input = 'w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm placeholder:text-mute focus:border-accent focus:outline-none'
  return (
    <Section id="contact" route="/contact" title="Let's build something.">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal className="space-y-4 text-mute">
          <p className="max-w-md text-lg">I'm looking for a team where I can keep shipping full stack work. Say hello.</p>
          {[[Mail, EMAIL, `mailto:${EMAIL}`], [Phone, '+20 114 265 7362', 'tel:+201142657362'], [Github, 'github.com/shahd210', GH], [Linkedin, 'LinkedIn', LI]].map(([I, t, h]) => (
            <a key={t} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-3 transition hover:text-accent"><I size={18} />{t}</a>))}
          <p className="flex items-center gap-3"><MapPin size={18} />Cairo, Egypt</p>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="space-y-4">
            <label className="sr-only" htmlFor="n">Your name</label>
            <input id="n" required className={input} placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <label className="sr-only" htmlFor="m">Message</label>
            <textarea id="m" required rows={5} className={input} placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
            <button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5">Send via email <ArrowUpRight size={16} /></button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent" />
      <Nav />
      <main><Hero /><About /><Stack /><Experience /><Work /><Education /><Contact /></main>
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-mute">© 2026 Shahd Khairy Abdallah</footer>
    </>
  )
}
