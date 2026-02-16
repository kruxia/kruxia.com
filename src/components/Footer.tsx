import KruxiaLogo from './KruxiaLogo';

const Footer = () => (
  <footer className="bg-darkest-section py-16 px-6">
    <div className="container-narrow">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <KruxiaLogo variant="light" className="h-7 w-7" />
            <span className="font-heading font-bold text-lg">Kruxia</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            Expert AI implementation for small &amp; mid-sized businesses.
          </p>
          <p className="text-xs text-white/30">© 2014–2026 Kruxia Corp</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white/80">Company</h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li><a href="#why-kruxia" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="https://kruxia.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Newsletter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white/80">Technology</h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li><a href="https://kruxiaflow.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kruxia Flow</a></li>
            <li><a href="https://github.com/kruxia/kruxiaflow" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
            <li><a href="https://kruxiaflow.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="https://github.com/kruxia/kruxiaflow" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Open Source</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-white/80">Connect</h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            <li><a href="https://bsky.app/profile/kruxia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bluesky</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://kruxia.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Substack</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <p className="text-xs text-white/30 text-center">
          Kruxia Corp · Wheaton, IL · Operating since 2014
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
