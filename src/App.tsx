import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { CountUp, FloatingElement, GlowCard, GradientBorder, Magnetic, ScrollReveal } from './components/Animations';
import BlurText from './components/BlurText';
import ColorBends from './components/ColorBends';
import ShinyText from './components/ShinyText';
import TextType from './components/TextType';

// Data
const skills = [
  { name: 'Applied AI Integration', icon: '🤖', color: '#ff5c7a' },
  { name: 'Data Transformation', icon: '📊', color: '#8a5cff' },
  { name: 'Workflow Automation', icon: '⚡', color: '#00ffd1' },
  { name: 'Cross-System Integration', icon: '🔗', color: '#ff5c7a' },
  { name: 'UI/UX Design', icon: '🎨', color: '#8a5cff' },
  { name: 'Python & JavaScript', icon: '💻', color: '#00ffd1' }
];

const experiences = [
  {
    year: '2025 - Présent',
    title: 'Data & AI Tools Specialist',
    company: 'Nokia',
    location: 'Massy, Île-de-France',
    description: 'Conception d\'outils internes, pipelines data, automatisation & UI/UX design',
    current: true
  },
  {
    year: '2024',
    title: 'British Summer School',
    company: 'OMNES Education',
    location: 'Londres',
    description: 'Networking, masterclass, ouverture internationale'
  },
  {
    year: '2019',
    title: 'Stage Découverte',
    company: 'Nokia Paris-Saclay',
    location: 'Nozay',
    description: 'Découverte des enjeux 5G et projets de formation'
  }
];

const certifications = [
  { name: 'Prompt Engineering & GenAI', issuer: 'DataScientest', year: '2025' },
  { name: 'Python for Data Scientists', issuer: 'Techaway', year: '2025' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: 'En cours' }
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138,92,255,0.15), transparent 40%)`
        }}
      />

      {/* Animated Background */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <ColorBends
          colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
          speed={0.08}
          scale={1.4}
          frequency={1.0}
          warpStrength={0.8}
          mouseInfluence={0.3}
          parallax={0.3}
          noise={0.04}
          transparent
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
      </motion.div>

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none noise opacity-50" />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Magnetic strength={0.2}>
            <span className="text-2xl font-black gradient-text cursor-pointer">EE</span>
          </Magnetic>
          <div className="hidden md:flex gap-8 text-sm">
            {['À propos', 'Expertise', 'Projet', 'Parcours', 'Contact'].map((item, i) => (
              <Magnetic key={item} strength={0.15}>
                <motion.a
                  href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 link-underline"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  {item}
                </motion.a>
              </Magnetic>
            ))}
          </div>
          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="hidden md:block px-5 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
            >
              Discutons
            </a>
          </Magnetic>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <ScrollReveal delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#00ffd1] animate-pulse-glow" />
            <span className="text-sm text-gray-400 tracking-widest uppercase">Disponible en alternance</span>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden">
          <BlurText
            text="ELIAS ELLOUMI"
            className="text-6xl md:text-9xl font-black tracking-tighter"
            delay={60}
            animateBy="letters"
            direction="top"
          />
        </div>

        <ScrollReveal delay={0.4} className="mt-4">
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-gray-300">
            <span className="text-[#8a5cff]">@Nokia</span>
            <span className="text-gray-600">•</span>
            <span>Data & AI Tools Specialist</span>
          </div>
        </ScrollReveal>

        <div className="mt-8 h-16">
          <TextType
            text={[
              'Applied AI & Data Product Builder',
              'Transforming raw data into solutions',
              'Quietly improving how teams work'
            ]}
            typingSpeed={40}
            deletingSpeed={25}
            pauseDuration={3000}
            className="text-lg md:text-xl text-gray-400 font-light"
            cursorCharacter="▌"
            cursorClassName="text-[#00ffd1]"
          />
        </div>

        <ScrollReveal delay={0.6} className="mt-12">
          <p className="max-w-2xl text-gray-500 text-base md:text-lg leading-relaxed">
            Passionate about AI, data, and development — bringing them together to turn raw information into practical, well-designed solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.8} className="mt-12 flex flex-col sm:flex-row gap-4">
          <Magnetic strength={0.15}>
            <a
              href="#projet"
              className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1] animate-gradient-x" />
              <div className="absolute inset-[2px] bg-black rounded-full" />
              <span className="relative z-10 gradient-text">Découvrir mon projet</span>
            </a>
          </Magnetic>
          <Magnetic strength={0.15}>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-medium"
            >
              Me contacter
            </a>
          </Magnetic>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 3, suffix: 'ᵉ', label: 'Année Bachelor' },
              { value: 6, suffix: '+', label: 'Mois chez Nokia' },
              { value: 5, suffix: '+', label: 'Projets réalisés' },
              { value: 3, suffix: '', label: 'Certifications' }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black gradient-text">
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-500 mt-2 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="relative z-20 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-bold tracking-[0.3em] text-[#00ffd1] mb-4 block">À PROPOS</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Applied AI &<br />
                  <span className="gradient-text">Data Product Builder</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Je ne me limite pas à entraîner des modèles ou analyser des datasets isolés.
                    Je me concentre sur la <span className="text-white">transformation de données brutes en solutions exploitables</span>.
                  </p>
                  <p>
                    Chez Nokia, je conçois des outils internes qui aident les équipes à se concentrer
                    sur des tâches à plus forte valeur ajoutée — automatiser sans ajouter de complexité.
                  </p>
                  <p className="text-[#8a5cff]">
                    "Des solutions discrètes, bien conçues, robustes, qui améliorent le quotidien des équipes sans bruit."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <GradientBorder>
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5c7a] to-[#8a5cff] flex items-center justify-center text-3xl">
                      🎓
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">ECE Engineering School</h3>
                      <p className="text-gray-500">3ᵉ année Bachelor • Data & IA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a5cff] to-[#00ffd1] flex items-center justify-center text-3xl">
                      💼
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Nokia</h3>
                      <p className="text-gray-500">Data & AI Tools Specialist • Alternance</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-500">
                      📍 Massy, Île-de-France (Hybride)
                    </p>
                  </div>
                </div>
              </GradientBorder>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="expertise" className="relative z-20 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-sm font-bold tracking-[0.3em] text-[#8a5cff] mb-4 block text-center">EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Compétences <span className="gradient-text">Opérationnelles</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <div className="p-6 rounded-2xl glass hover-lift h-full">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: skill.color }}>
                      {skill.name}
                    </h3>
                    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Certifications */}
          <ScrollReveal delay={0.4} className="mt-16">
            <div className="p-8 rounded-3xl glass">
              <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    <span className="text-white">{cert.name}</span>
                    <span className="text-gray-500 ml-2">• {cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Section */}
      <section id="projet" className="relative z-20 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-sm font-bold tracking-[0.3em] text-[#ff5c7a] mb-4 block text-center">PROJET MAJEUR</span>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlowCard className="mt-8">
              <div className="relative p-8 md:p-12 rounded-3xl glass overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff5c7a]/20 to-transparent rounded-full blur-3xl" />

                {/* Badge */}
                <FloatingElement distance={5} duration={4}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8a5cff] text-sm font-bold mb-8">
                    <span>🏆</span>
                    <span>2ᵉ Meilleur Projet ECE 2025</span>
                  </div>
                </FloatingElement>

                <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Application de planification<br />
                  de voyages <span className="gradient-text">basée sur l'IA</span>
                </h3>

                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                  Une application révolutionnaire utilisant l'IA générative (Gemini) et les APIs SaaS
                  pour générer des séjours personnalisés jour par jour. Du concept initial à la démonstration
                  sur scène internationale.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {['Gemini API', 'RapidAPI', 'React', 'Python', 'UX Design', 'Full Stack'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Web Summit Badge */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#00ffd1]/10 to-transparent border border-[#00ffd1]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#00ffd1]/20 flex items-center justify-center text-2xl">
                    🌍
                  </div>
                  <div>
                    <p className="font-bold text-[#00ffd1]">Présenté au Web Summit</p>
                    <p className="text-gray-500 text-sm">Lisbonne, Portugal • Novembre 2025</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="parcours" className="relative z-20 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="text-sm font-bold tracking-[0.3em] text-[#00ffd1] mb-4 block text-center">PARCOURS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Mon <span className="gradient-text">Évolution</span>
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1]" />

            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-[#ff5c7a] to-[#8a5cff] z-10">
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-[#00ffd1] animate-ping" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <GlowCard>
                      <div className="p-6 rounded-2xl glass">
                        <span className="text-sm text-[#8a5cff] font-mono">{exp.year}</span>
                        <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                        <p className="text-[#00ffd1]">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                        <p className="text-gray-400 mt-3">{exp.description}</p>
                      </div>
                    </GlowCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Interests */}
      <section className="relative z-20 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-sm font-bold tracking-[0.3em] text-[#ff5c7a] mb-4 block text-center">PERSONNALITÉ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Au-delà du <span className="gradient-text">Code</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🌍', title: 'Voyageur', desc: 'Europe, Afrique, États-Unis, Asie', color: '#ff5c7a' },
              { icon: '🏀', title: 'Sportif', desc: 'Musculation, Football, Basketball', color: '#8a5cff' },
              { icon: '🥁', title: 'Musicien', desc: 'Batteur depuis 10 ans', color: '#00ffd1' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <div className="p-8 rounded-2xl glass text-center hover-lift h-full">
                    <FloatingElement distance={8} duration={3 + i * 0.5}>
                      <span className="text-5xl block mb-4">{item.icon}</span>
                    </FloatingElement>
                    <h3 className="font-bold text-xl mb-2" style={{ color: item.color }}>{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Values */}
          <ScrollReveal delay={0.3} className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              {['Éthique', 'Curiosité', 'Impact réel', 'Innovation', 'Apprentissage continu'].map((value) => (
                <span
                  key={value}
                  className="px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-white/30 transition-colors cursor-default"
                >
                  {value}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-20 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-sm font-bold tracking-[0.3em] text-[#8a5cff] mb-4 block">CONTACT</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Construisons quelque chose<br />
              <span className="gradient-text">d'exceptionnel</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Actuellement en alternance chez Nokia, je reste ouvert aux échanges et opportunités futures.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-col md:flex-row gap-4 justify-center">
            <Magnetic strength={0.15}>
              <a
                href="mailto:e.elloumi15@gmail.com"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5c7a] via-[#8a5cff] to-[#00ffd1] animate-gradient-x" />
                <span className="relative z-10 text-white flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  e.elloumi15@gmail.com
                </span>
              </a>
            </Magnetic>

            <Magnetic strength={0.15}>
              <a
                href="https://www.linkedin.com/in/elias-elloumi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </Magnetic>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-12 flex justify-center gap-8 text-gray-500">
            <span>📍 Massy, Île-de-France</span>
            <span>📞 07 66 53 82 40</span>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 Elias Elloumi. Tous droits réservés.</p>
          <ShinyText
            text="Crafted with passion & innovation ✨"
            className="text-sm"
            speed={3}
            shineColor="#00ffd1"
            color="#444"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
