import { Link } from "react-router-dom";
import FadeInSection from "@/components/FadeInSection";
import partner1 from "@/assets/partner-1.jpg";
import partner2 from "@/assets/partner-2.jpg";
import partner3 from "@/assets/partner-3.jpg";

const partners = [
  {
    name: "Charles Ashford",
    title: "Senior Partner",
    specialty: "International Tax Law",
    img: partner1,
    bio: "With over 30 years of practice, Charles has advised royal families, sovereign wealth funds, and Fortune 100 executives on cross-border tax strategy. A former HMRC senior counsel, he brings unparalleled insight into the intersection of policy and private wealth.",
    education: "King's College London · Harvard Law School",
    admissions: "England & Wales · New York · Singapore"
  },
  {
    name: "Isabelle Laurent",
    title: "Managing Partner",
    specialty: "International Trusts & Foundations",
    img: partner2,
    bio: "Isabelle specializes in architecting complex multi-jurisdictional trust structures for ultra-high-net-worth families. Her practice spans Jersey, Guernsey, Liechtenstein, and the Cayman Islands, with particular expertise in family governance frameworks.",
    education: "Sciences Po Paris · University of Cambridge",
    admissions: "England & Wales · France · Jersey"
  },
  {
    name: "Edmund Hale",
    title: "Founding Partner",
    specialty: "Asset Protection & Offshore Structuring",
    img: partner3,
    bio: "Edmund co-founded the firm in 1987 with a singular vision: to provide the world's most affluent families with counsel of absolute discretion. His practice now encompasses asset protection, offshore structuring, and succession planning across 40+ jurisdictions.",
    education: "Oxford University · Georgetown Law",
    admissions: "England & Wales · BVI · Cayman Islands"
  },
];

const PartnersPage = () => (
  <>
    <section className="pt-40 pb-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Leadership</p>
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[0.95]">
            The <em className="text-accent">Partners</em>
          </h1>
        </FadeInSection>
      </div>
    </section>

    <section className="pb-32 px-8">
      <div className="max-w-[1400px] mx-auto">
        {partners.map((p, i) => (
          <FadeInSection key={p.name} delay={0.1}>
            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 py-20 ${i < partners.length - 1 ? 'border-b border-border' : ''}`}>
              <div className="lg:col-span-2">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full max-w-md aspect-[3/4] object-cover grayscale"
                />
              </div>
              <div className="lg:col-span-3 flex flex-col justify-center">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{p.title}</p>
                <h2 className="font-serif text-3xl md:text-4xl mb-2">{p.name}</h2>
                <p className="font-body text-sm text-accent mb-6">{p.specialty}</p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-lg mb-8">{p.bio}</p>
                <div className="space-y-3">
                  <div>
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Education</span>
                    <p className="font-body text-sm mt-1">{p.education}</p>
                  </div>
                  <div>
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Bar Admissions</span>
                    <p className="font-body text-sm mt-1">{p.admissions}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>

    <section className="py-32 px-8 bg-primary text-primary-foreground">
      <div className="max-w-[900px] mx-auto text-center">
        <FadeInSection>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Seek private counsel?</h2>
          <Link to="/contact" className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-primary-foreground/30 px-10 py-5 hover:bg-primary-foreground hover:text-primary transition-all duration-500">
            Request Introduction
          </Link>
        </FadeInSection>
      </div>
    </section>
  </>
);

export default PartnersPage;
