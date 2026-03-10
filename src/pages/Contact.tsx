import { useState } from "react";
import { Lock, Mail, Phone, MapPin } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <FadeInSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Private Enquiry</p>
            <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[0.95]">
              Begin the<br /><em className="text-accent">conversation</em>
            </h1>
          </FadeInSection>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-8">
              <Lock className="w-4 h-4 text-accent" strokeWidth={1} />
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                All communications encrypted & privileged
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">First Name</label>
                    <input type="text" required className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Email</label>
                  <input type="email" required className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Area of Interest</label>
                  <select className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors text-foreground">
                    <option>Tax Advisory</option>
                    <option>Offshore Structuring</option>
                    <option>Asset Protection</option>
                    <option>Trust & Estate</option>
                    <option>Regulatory Compliance</option>
                    <option>Private Client</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground block mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-border py-3 font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                </div>
                <button type="submit" className="font-body text-xs tracking-[0.3em] uppercase bg-primary text-primary-foreground px-10 py-5 hover:bg-accent transition-colors duration-500 mt-4">
                  Submit Secure Enquiry
                </button>
              </form>
            ) : (
              <div className="py-20 text-center">
                <Lock className="w-8 h-8 mx-auto mb-6 text-accent" strokeWidth={1} />
                <h3 className="font-serif text-2xl mb-3">Enquiry Received</h3>
                <p className="font-body text-sm text-muted-foreground">A partner will respond within 24 hours via secure channel.</p>
              </div>
            )}
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="space-y-12 lg:pl-12 lg:border-l border-border">
              <div>
                <h3 className="font-serif text-xl mb-6">Offices</h3>
                <div className="space-y-6">
                  {[
                    { city: "London", address: "One Threadneedle Street, EC2R 8AY" },
                    { city: "Zurich", address: "Bahnhofstrasse 42, 8001" },
                    { city: "Singapore", address: "1 Raffles Place, Tower 2, Level 42" },
                    { city: "Cayman Islands", address: "Ugland House, George Town" },
                  ].map((office) => (
                    <div key={office.city} className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" strokeWidth={1} />
                      <div>
                        <p className="font-body text-sm font-medium">{office.city}</p>
                        <p className="font-body text-xs text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" strokeWidth={1} />
                    <span className="font-body text-sm">enquiries@ashfordhale.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" strokeWidth={1} />
                    <span className="font-body text-sm">+44 (0) 20 7946 0958</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-8">
                <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">Confidentiality Notice</p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  All communications with Ashford & Hale are protected by legal professional privilege. 
                  Initial consultations are conducted on a strictly confidential, no-obligation basis.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
