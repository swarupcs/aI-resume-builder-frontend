import { Sparkles, Github, Twitter, Linkedin, Heart, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='border-t border-border bg-card/30'>
      <div className='container mx-auto px-4 py-14'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <a href='/' className='flex items-center gap-2.5 mb-4 group w-fit'>
              <div className='relative flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary to-purple-600' />
                <Zap className='h-4.5 w-4.5 text-white relative z-10 fill-white' />
              </div>
              <span className='font-display text-lg font-bold text-foreground tracking-tight'>
                Resume<span className='text-gradient'>AI</span>
              </span>
            </a>
            <p className='text-sm text-muted-foreground leading-relaxed max-w-xs mb-5'>
              Build professional, ATS-optimized resumes with the power of AI.
              Land your dream job faster.
            </p>
            <div className='flex items-center gap-3'>
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href='#'
                  aria-label={label}
                  className='flex items-center justify-center w-9 h-9 rounded-xl border border-border bg-secondary/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200'
                >
                  <Icon className='h-4 w-4' />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Product',
              links: [
                'Features',
                'Templates',
                'Pricing',
                'Examples',
                'Changelog',
              ],
            },
            {
              title: 'Resources',
              links: [
                'Blog',
                'Resume Guide',
                'Career Tips',
                'Help Center',
                'API Docs',
              ],
            },
            {
              title: 'Company',
              links: ['About', 'Careers', 'Privacy', 'Terms', 'Contact'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className='font-display font-bold text-foreground mb-4 text-sm uppercase tracking-wider'>
                {col.title}
              </h4>
              <ul className='space-y-3'>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href='#'
                      className='text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-0.5 inline-block'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className='border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-muted-foreground flex items-center gap-1.5'>
            © 2026 ResumeIQ. Made with{' '}
            <Heart className='h-3.5 w-3.5 text-rose-500 fill-rose-500' /> All
            rights reserved.
          </p>
          <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/30'>
            <span className='w-2 h-2 rounded-full bg-green-500 pulse-dot' />
            <span className='text-xs text-muted-foreground font-medium'>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
