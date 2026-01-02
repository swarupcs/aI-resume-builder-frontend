import { ArrowRight, FileText, Sparkles, Upload } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Import Your Details',
    description:
      'Upload your existing resume or LinkedIn profile, or start fresh by entering your information.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'AI Enhancement',
    description:
      'Our AI analyzes your experience and the target job to craft compelling, optimized content.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Download & Apply',
    description:
      'Choose your template, make final tweaks, and download your polished resume in PDF format.',
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id='how-it-works'
      className='relative py-24 sm:py-32 bg-secondary/30'
    >
      <div className='container mx-auto px-4'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
            Create Your Resume in
            <br />
            <span className='text-gradient'>Three Simple Steps</span>
          </h2>
          <p className='max-w-2xl mx-auto text-muted-foreground text-lg'>
            No more staring at a blank page. Our streamlined process makes
            resume creation effortless.
          </p>
        </div>

        {/* Steps */}
        <div className='relative max-w-5xl mx-auto'>
          {/* Connection line */}
          <div className='absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block' />

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {steps.map((step, index) => (
              <div key={step.number} className='relative'>
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className='hidden lg:flex absolute top-24 -right-4 z-10 h-8 w-8 items-center justify-center rounded-full bg-background border border-border'>
                    <ArrowRight className='h-4 w-4 text-primary' />
                  </div>
                )}

                <div className='group text-center lg:text-left'>
                  {/* Step number and icon */}
                  <div className='relative inline-flex items-center justify-center mb-6'>
                    <div className='h-20 w-20 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors'>
                      <step.icon className='h-8 w-8 text-primary' />
                    </div>
                    <span className='absolute -top-2 -right-2 h-8 w-8 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center'>
                      {step.number}
                    </span>
                  </div>

                  <h3 className='font-display text-xl font-semibold text-foreground mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
