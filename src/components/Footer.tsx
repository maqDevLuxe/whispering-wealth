import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase mb-4">Ashford & Hale</h3>
            <p className="font-body text-sm leading-relaxed opacity-60 max-w-md">
              Discreet counsel for those who value absolute privacy. Serving distinguished
              clients across jurisdictions since 1987.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/expertise" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">Expertise</Link>
              <Link to="/partners" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">Partners</Link>
              <Link to="/contact" className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-6 opacity-40">Offices</h4>
            <div className="flex flex-col gap-3 font-body text-sm opacity-60">
              <span>London</span>
              <span>Zurich</span>
              <span>Singapore</span>
              <span>Cayman Islands</span>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs opacity-40">© 2026 Ashford & Hale. All rights reserved.</p>
          <p className="font-body text-xs opacity-40">Absolute discretion. Uncompromising standards.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
