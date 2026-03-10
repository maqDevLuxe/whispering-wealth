import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Scale, Globe, Building2, Lock, FileText, Landmark, Users } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import FadeInSection from "@/components/FadeInSection";
import heroImg from "@/assets/hero-office.jpg";
import luxuryImg from "@/assets/luxury-office.jpg";
import partner1 from "@/assets/partner-1.jpg";
import partner2 from "@/assets/partner-2.jpg";
import partner3 from "@/assets/partner-3.jpg";

/* ── Counter Hook ── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { count, ref };
}

/* ── 1. Hero ── */
const Hero = () => (
  <section className="relative h-screen flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Distinguished law office" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/70" />
    </div>
    <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-secondary-foreground/50 mb-6">
          Est. 1987 · London · Zurich · Singapore
        </p>
      </motion.div>
      <div className="overflow-hidden">
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-secondary-foreground leading-[0.95] max-w-4xl"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          Discretion is not
          <br />
          <em className="text-gold">our policy.</em>
          <br />
          It is our nature.
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-10"
      >
        <Link
          to="/contact"
          className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 hover:bg-secondary-foreground hover:text-secondary transition-all duration-500"
        >
          Request Private Consultation
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ── 2. Accreditations ── */
const Accreditations = () => (
  <section className="py-20 px-8 border-b border-border">
    <div className="max-w-[1400px] mx-auto">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-12">
          Globally Recognised · Internationally Accredited
        </p>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
          {["STEP", "IBA", "AIJA", "ITPA", "FATCA Compliant", "CRS Certified"].map((name) => (
            <span key={name} className="font-serif text-lg md:text-xl tracking-[0.15em]">{name}</span>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

/* ── 3. Practice Areas ── */
const practiceAreas = [
  { icon: Scale, title: "Tax Advisory", desc: "Strategic tax planning for UHNW individuals and family offices across multiple jurisdictions." },
  { icon: Globe, title: "Cross-Border Structuring", desc: "Multi-jurisdictional entity formation and compliance for international wealth holders." },
  { icon: Shield, title: "Asset Protection", desc: "Comprehensive strategies to shield generational wealth from litigation and regulatory exposure." },
  { icon: Building2, title: "Trust & Estate", desc: "Bespoke trust architectures for succession planning and legacy preservation." },
  { icon: FileText, title: "Regulatory Compliance", desc: "Navigating FATCA, CRS, and evolving international reporting standards." },
  { icon: Landmark, title: "Private Client", desc: "Holistic counsel addressing the full spectrum of high-net-worth legal needs." },
];

const PracticeAreas = () => (
  <section className="py-32 px-8">
    <div className="max-w-[1400px] mx-auto">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Expertise</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-20 max-w-xl">
          Practice areas refined over <em className="text-accent">decades</em>
        </h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {practiceAreas.map((area, i) => (
          <FadeInSection key={area.title} delay={i * 0.1}>
            <div className="group p-10 border-b border-r border-border hover:bg-muted transition-colors duration-500">
              <area.icon className="w-5 h-5 text-accent mb-6" strokeWidth={1} />
              <h3 className="font-serif text-xl mb-3">{area.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

/* ── 4. Offshore Structuring ── */
const OffshoreStructuring = () => (
  <section className="py-32 px-8 bg-secondary text-secondary-foreground">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Offshore Advisory</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
          Structuring wealth<br />beyond borders
        </h2>
        <p className="font-body text-sm leading-relaxed opacity-60 max-w-md mb-8">
          We architect multi-layered offshore structures across 40+ jurisdictions, ensuring 
          compliant wealth preservation while maximizing tax efficiency for our distinguished clients.
        </p>
        <Link to="/expertise" className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-secondary-foreground/30 px-8 py-4 hover:bg-secondary-foreground hover:text-secondary transition-all duration-500">
          Explore Structures
        </Link>
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <div className="space-y-8">
          {[
            { label: "BVI & Cayman Entities", value: "2,400+" },
            { label: "Trust Structures Managed", value: "£8.2B" },
            { label: "Active Jurisdictions", value: "42" },
            { label: "Average Client Tenure", value: "18 yrs" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-end border-b border-secondary-foreground/10 pb-4">
              <span className="font-body text-sm opacity-60">{item.label}</span>
              <span className="font-serif text-2xl">{item.value}</span>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

/* ── 5. Wealth Preservation Metrics ── */
const WealthMetrics = () => (
  <section className="py-32 px-8">
    <div className="max-w-[1400px] mx-auto text-center">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">By The Numbers</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-20">Wealth preserved. <em className="text-accent">Legacies secured.</em></h2>
      </FadeInSection>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { value: "£14.6B", label: "Assets Under Advisory" },
          { value: "99.7%", label: "Client Retention Rate" },
          { value: "680+", label: "Family Offices Served" },
          { value: "Zero", label: "Data Breaches Since Inception" },
        ].map((m, i) => (
          <FadeInSection key={m.label} delay={i * 0.15}>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-primary mb-2">{m.value}</p>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">{m.label}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

/* ── 6. Partners ── */
const partners = [
  { name: "Charles Ashford", title: "Senior Partner · Tax Law", img: partner1 },
  { name: "Isabelle Laurent", title: "Managing Partner · International Trusts", img: partner2 },
  { name: "Edmund Hale", title: "Founding Partner · Asset Protection", img: partner3 },
];

const PartnersSection = () => (
  <section className="py-32 px-8 bg-muted">
    <div className="max-w-[1400px] mx-auto">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Leadership</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-20">The Partners</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((p, i) => (
          <FadeInSection key={p.name} delay={i * 0.2}>
            <Link to="/partners" className="block group">
              <div className="overflow-hidden mb-6">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl mb-1">{p.name}</h3>
              <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground">{p.title}</p>
            </Link>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

/* ── 7. Jurisdiction Map ── */
const JurisdictionMap = () => (
  <section className="py-32 px-8 bg-secondary text-secondary-foreground">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Global Reach</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
          42 Jurisdictions.<br /><em className="text-gold">One standard.</em>
        </h2>
        <p className="font-body text-sm leading-relaxed opacity-60 max-w-md">
          From the Channel Islands to Singapore, from Luxembourg to the Cayman Islands — 
          our network of local counsel ensures seamless cross-border advisory.
        </p>
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <div className="grid grid-cols-2 gap-6">
          {[
            "London", "Zurich", "Singapore", "Cayman Islands",
            "Luxembourg", "Dubai", "Hong Kong", "Jersey",
            "Guernsey", "BVI", "Liechtenstein", "Monaco"
          ].map((city) => (
            <div key={city} className="border-l border-secondary-foreground/20 pl-4 py-2">
              <span className="font-body text-sm opacity-70">{city}</span>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

/* ── 8. Full-width Office Image ── */
const LuxuryOffice = () => (
  <section className="relative h-[70vh] overflow-hidden">
    <motion.img
      src={luxuryImg}
      alt="Luxury conference room"
      className="w-full h-full object-cover"
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    />
    <div className="absolute inset-0 bg-secondary/30" />
  </section>
);

/* ── 9. Experience Counters ── */
const CounterItem = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const { count, ref } = useCounter(end);
  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-5xl md:text-6xl text-primary">{count}{suffix}</p>
      <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-3">{label}</p>
    </div>
  );
};

const ExperienceCounters = () => (
  <section className="py-32 px-8 border-y border-border">
    <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16">
      <FadeInSection><CounterItem end={37} label="Years of Practice" suffix="+" /></FadeInSection>
      <FadeInSection delay={0.1}><CounterItem end={42} label="Jurisdictions" /></FadeInSection>
      <FadeInSection delay={0.2}><CounterItem end={680} label="Family Offices" suffix="+" /></FadeInSection>
      <FadeInSection delay={0.3}><CounterItem end={14} label="Billion Under Advisory" suffix="B" /></FadeInSection>
    </div>
  </section>
);

/* ── 10. Legal Insights ── */
const insights = [
  { date: "February 2026", title: "Navigating the New CRS Reporting Standards for Offshore Trusts", category: "Regulatory" },
  { date: "January 2026", title: "Substance Requirements in the BVI: What Changed in 2025", category: "Offshore" },
  { date: "December 2025", title: "Family Office Structuring in a Post-Pillar Two World", category: "Tax Advisory" },
];

const LegalInsights = () => (
  <section className="py-32 px-8">
    <div className="max-w-[1400px] mx-auto">
      <FadeInSection>
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Insights</p>
            <h2 className="font-serif text-4xl md:text-5xl">Legal Insights</h2>
          </div>
          <Link to="/expertise" className="hidden md:inline-block font-body text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            View All →
          </Link>
        </div>
      </FadeInSection>
      <div className="space-y-0">
        {insights.map((item, i) => (
          <FadeInSection key={item.title} delay={i * 0.1}>
            <div className="group py-8 border-b border-border flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:pl-4 transition-all duration-500">
              <span className="font-body text-xs text-muted-foreground w-32 shrink-0">{item.date}</span>
              <h3 className="font-serif text-lg md:text-xl flex-1 group-hover:text-accent transition-colors">{item.title}</h3>
              <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">{item.category}</span>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

/* ── 11. Confidentiality ── */
const Confidentiality = () => (
  <section className="py-32 px-8 bg-secondary text-secondary-foreground">
    <div className="max-w-[900px] mx-auto text-center">
      <FadeInSection>
        <Lock className="w-8 h-8 mx-auto mb-8 text-gold" strokeWidth={1} />
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
          Absolute Confidentiality
        </h2>
        <p className="font-body text-sm leading-relaxed opacity-60 max-w-lg mx-auto mb-8">
          Every communication is encrypted. Every document is secured under multi-jurisdictional 
          legal privilege. We have maintained zero data breaches across 37 years of practice. 
          Your affairs remain yours — and yours alone.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {["End-to-End Encryption", "Multi-Layer Privilege", "Air-Gapped Archives", "Zero Breach Record"].map((item) => (
            <span key={item} className="font-body text-xs tracking-[0.15em] uppercase opacity-40 border border-secondary-foreground/20 px-6 py-3">
              {item}
            </span>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

/* ── 12. Client Trust ── */
const ClientTrust = () => (
  <section className="py-32 px-8">
    <div className="max-w-[1400px] mx-auto">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Client Trust</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-16">Words from those we serve</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {[
          {
            quote: "In thirty years of managing family wealth, I have never encountered counsel of such discretion and competence. Ashford & Hale are, quite simply, without equal.",
            author: "— A European Industrialist"
          },
          {
            quote: "They restructured our entire multi-generational trust architecture across seven jurisdictions in absolute secrecy. The result was a 40% improvement in tax efficiency.",
            author: "— A Middle Eastern Family Office"
          },
        ].map((t, i) => (
          <FadeInSection key={i} delay={i * 0.2}>
            <div className="border-l-2 border-accent pl-8">
              <p className="font-serif text-lg md:text-xl leading-relaxed italic mb-6 text-foreground/80">
                "{t.quote}"
              </p>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">{t.author}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

/* ── 13. CTA ── */
const ConsultationCTA = () => (
  <section className="py-32 px-8 bg-primary text-primary-foreground">
    <div className="max-w-[900px] mx-auto text-center">
      <FadeInSection>
        <p className="font-body text-xs tracking-[0.3em] uppercase opacity-50 mb-6">Begin The Conversation</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
          Your privacy is<br />our precedent.
        </h2>
        <p className="font-body text-sm leading-relaxed opacity-60 max-w-md mx-auto mb-10">
          All initial consultations are conducted under strict legal privilege.
          Reach out through our secure channels.
        </p>
        <Link
          to="/contact"
          className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-primary-foreground/30 px-10 py-5 hover:bg-primary-foreground hover:text-primary transition-all duration-500"
        >
          Schedule Private Consultation
        </Link>
      </FadeInSection>
    </div>
  </section>
);

/* ── Page ── */
const Index = () => {
  return (
    <>
      <Hero />
      <Accreditations />
      <PracticeAreas />
      <OffshoreStructuring />
      <WealthMetrics />
      <PartnersSection />
      <JurisdictionMap />
      <LuxuryOffice />
      <ExperienceCounters />
      <LegalInsights />
      <Confidentiality />
      <ClientTrust />
      <ConsultationCTA />
    </>
  );
};

export default Index;
