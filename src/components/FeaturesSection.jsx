import { Brain, FileCheck, Palette, Target, Wand2, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Writing',
    description:
      'Our AI analyzes job descriptions and crafts compelling bullet points that highlight your achievements.',
  },
  {
    icon: Target,
    title: 'ATS Optimization',
    description:
      'Beat applicant tracking systems with keyword optimization and proper formatting.',
  },
  {
    icon: Palette,
    title: 'Beautiful Templates',
    description:
      'Choose from professionally designed templates that make your resume stand out.',
  },
  {
    icon: Wand2,
    title: 'One-Click Generation',
    description:
      'Enter your details once and generate multiple versions tailored to different roles.',
  },
  {
    icon: FileCheck,
    title: 'Real-Time Feedback',
    description:
      "Get instant suggestions to improve your resume's impact and readability.",
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Create a professional resume in under 2 minutes with our streamlined process.',
  },
];

const FeaturesSection = () => {
  return (
    <section id='features' className='relative py-24 sm:py-32'>
      <div className='container mx-auto px-4'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
            Everything You Need to
            <br />
            <span className='text-gradient'>Land Your Dream Job</span>
          </h2>
          <p className='max-w-2xl mx-auto text-muted-foreground text-lg'>
            Powerful features designed to help you create the perfect resume and
            stand out from other candidates.
          </p>
        </div>

        {/* Features grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className='group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

              <div className='relative'>
                <div className='inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors'>
                  <feature.icon className='h-6 w-6' />
                </div>
                <h3 className='font-display text-xl font-semibold text-foreground mb-2'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
