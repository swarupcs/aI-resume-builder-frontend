import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className='relative py-24 sm:py-32 overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent' />

      {/* Glow effect */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-glow pointer-events-none' />

      <div className='container relative mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6'>
            <Sparkles className='h-4 w-4 text-primary' />
            <span className='text-sm text-primary font-medium'>
              Start Free Today
            </span>
          </div>

          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            Ready to Build Your
            <br />
            <span className='text-gradient'>Winning Resume?</span>
          </h2>

          <p className='text-lg text-muted-foreground mb-10 max-w-xl mx-auto'>
            Join 50,000+ professionals who have transformed their job search
            with AI-powered resumes.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button variant='hero' size='xl'>
              Create Your Resume Free
              <ArrowRight className='h-5 w-5' />
            </Button>
          </div>

          <p className='mt-6 text-sm text-muted-foreground'>
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
