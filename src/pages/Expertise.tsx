import { Link } from "react-router-dom";
import { Shield, Scale, Globe, Building2, Lock, FileText, Landmark, Users, Briefcase } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const areas = [
  {
    icon: Scale,
    title: "International Tax Advisory",
    desc: "We design bespoke tax strategies for ultra-high-net-worth individuals, family offices, and multinational entities. Our counsel spans income tax, capital gains, inheritance tax, and VAT across 42 jurisdictions.",
    details: ["Cross-border tax optimization", "Transfer pricing advisory", "Permanent establishment planning", "Tax treaty analysis"]
  },
  {
    icon: Globe,
    title: "Offshore Structuring",
    desc: "Multi-layered entity formation across BVI, Cayman Islands, Jersey, Guernsey, and 35+ additional jurisdictions. Full compliance with substance requirements and beneficial ownership regulations.",
    details: ["SPV & holding company formation", "Substance compliance", "Economic nexus analysis", "Regulatory liaison"]
  },
  {
    icon: Shield,
    title: "Asset Protection",
    desc: "Comprehensive strategies to insulate generational wealth from litigation, creditor claims, political instability, and regulatory overreach.",
    details: ["Discretionary trust structures", "Foundation & Anstalt formation", "Firewall jurisdictions", "Litigation shielding"]
  },
  {
    icon: Building2,
    title: "Trust & Estate Planning",
    desc: "We architect multigenerational trust structures that balance control, tax efficiency, and family governance across complex international landscapes.",
    details: ["Dynasty trust design", "Protector & enforcer frameworks", "Succession planning", "Philanthropic vehicles"]
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    desc: "Navigating the evolving landscape of FATCA, CRS, DAC6, Pillar Two, and emerging reporting obligations across all operational jurisdictions.",
    details: ["FATCA & CRS reporting", "DAC6 disclosure", "Pillar Two compliance", "AML/KYC frameworks"]
  },
  {
    icon: Landmark,
    title: "Private Client Advisory",
    desc: "Holistic legal counsel for distinguished individuals addressing residency planning, citizenship-by-investment, art & collectibles, and family governance.",
    details: ["Residency & citizenship planning", "Art & luxury asset structuring", "Family constitution drafting", "Prenuptial & postnuptial counsel"]
  },
];

const ExpertisePage = () => (
  <>
    <section className="pt-40 pb-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Practice</p>
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[0.95]">
            Expertise refined<br />over <em className="text-accent">decades</em>
          </h1>
        </FadeInSection>
      </div>
    </section>

    <section className="pb-32 px-8">
      <div className="max-w-[1400px] mx-auto">
        {areas.map((area, i) => (
          <FadeInSection key={area.title} delay={0.1}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 ${i < areas.length - 1 ? 'border-b border-border' : ''}`}>
              <div>
                <area.icon className="w-6 h-6 text-accent mb-6" strokeWidth={1} />
                <h2 className="font-serif text-3xl md:text-4xl mb-4">{area.title}</h2>
                <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-md">{area.desc}</p>
              </div>
              <div className="flex items-center">
                <ul className="space-y-4">
                  {area.details.map((d) => (
                    <li key={d} className="font-body text-sm text-foreground/70 flex items-center gap-3">
                      <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>

    <section className="py-32 px-8 bg-primary text-primary-foreground">
      <div className="max-w-[900px] mx-auto text-center">
        <FadeInSection>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Require specialist counsel?</h2>
          <p className="font-body text-sm opacity-60 mb-10">All enquiries are handled under strict legal privilege.</p>
          <Link to="/contact" className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-primary-foreground/30 px-10 py-5 hover:bg-primary-foreground hover:text-primary transition-all duration-500">
            Contact Us
          </Link>
        </FadeInSection>
      </div>
    </section>
  </>
);

export default ExpertisePage;
