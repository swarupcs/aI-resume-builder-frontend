import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='border-t border-border bg-card/50'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='md:col-span-1'>
            <a href='/' className='flex items-center gap-2 mb-4'>
              <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10'>
                <Sparkles className='h-5 w-5 text-primary' />
              </div>
              <span className='font-display text-xl font-bold text-foreground'>
                Resume<span className='text-primary'>AI</span>
              </span>
            </a>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Build professional, ATS-optimized resumes with the power of AI.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className='font-semibold text-foreground mb-4'>Product</h4>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-foreground mb-4'>Resources</h4>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Resume Guide
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Career Tips
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-foreground mb-4'>Company</h4>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-sm text-muted-foreground'>
            © 2026 ResumeAI. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <a
              href='#'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              Twitter
            </a>
            <a
              href='#'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              LinkedIn
            </a>
            <a
              href='#'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
