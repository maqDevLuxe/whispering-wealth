import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Expertise", to: "/expertise" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-6">
        <Link to="/" className="font-serif text-xl tracking-[0.3em] uppercase text-primary-foreground">
          Ashford & Hale
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-[0.15em] uppercase transition-opacity duration-300 text-primary-foreground ${
                location.pathname === link.to ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary px-8 py-10 flex flex-col gap-6"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-[0.15em] uppercase text-secondary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
