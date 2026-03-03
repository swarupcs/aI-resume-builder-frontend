import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='border-t border-border bg-card/30'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          {/* Brand */}
          <Link to='/' className='flex items-center gap-2.5'>
            <div className='relative flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary to-purple-600' />
              <Zap className='h-4 w-4 text-white fill-white relative z-10' />
            </div>
            <span className='font-display text-base font-bold text-foreground'>
              Resum<span className='text-gradient'>IQ</span>
            </span>
          </Link>

          {/* Copyright */}
          <p className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} ResumIQ. All rights reserved.
          </p>

          {/* Legal links */}
          <div className='flex items-center gap-4'>
            <a
              href='#'
              className='text-xs text-muted-foreground hover:text-foreground transition-colors'
            >
              Privacy Policy
            </a>
            <div className='w-px h-3 bg-border' />
            <a
              href='#'
              className='text-xs text-muted-foreground hover:text-foreground transition-colors'
            >
              Terms of Service
            </a>
            <div className='w-px h-3 bg-border' />
            <a
              href='#'
              className='text-xs text-muted-foreground hover:text-foreground transition-colors'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
