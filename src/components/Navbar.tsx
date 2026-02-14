import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import KruxiaLogo from './KruxiaLogo';

const navLinks = [
  { label: 'The Problem', href: '#problem' },
  { label: 'How We Help', href: '#solution' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Kruxia', href: '#why-kruxia' },
];

const focusContactName = () => {
  setTimeout(() => {
    document.getElementById('contact-name')?.focus();
  }, 600);
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container-narrow flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2">
          <KruxiaLogo variant="light" className="h-8 w-8" />
          <span className="text-primary-foreground font-heading font-bold text-xl tracking-tight">Kruxia</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={focusContactName}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-lg shadow-accent/25"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/80 hover:text-primary-foreground font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => { setOpen(false); focusContactName(); }}
            className="block w-full text-center rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
