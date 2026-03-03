import { Brain, FileCheck, Palette, Target, Wand2, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Writing',
    description:
      'Our AI analyzes job descriptions and crafts compelling bullet points that highlight your achievements.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'oklch(0.60 0.25 290)',
  },
  {
    icon: Target,
    title: 'ATS Optimization',
    description:
      'Beat applicant tracking systems with keyword optimization and proper formatting.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'oklch(0.65 0.20 220)',
  },
  {
    icon: Palette,
    title: 'Beautiful Templates',
    description:
      'Choose from professionally designed templates that make your resume stand out.',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'oklch(0.65 0.25 0)',
  },
  {
    icon: Wand2,
    title: 'One-Click Generation',
    description:
      'Enter your details once and generate multiple versions tailored to different roles.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'oklch(0.75 0.20 60)',
  },
  {
    icon: FileCheck,
    title: 'Real-Time Feedback',
    description:
      "Get instant suggestions to improve your resume's impact and readability.",
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'oklch(0.70 0.18 165)',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Create a professional resume in under 2 minutes with our streamlined process.',
    gradient: 'from-primary to-indigo-500',
    glow: 'oklch(0.65 0.22 280)',
  },
];

const FeaturesSection = () => {
  return (
    <section id='features' className='relative py-24 sm:py-32 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-mesh opacity-30' />
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-border' />

      <div className='container relative mx-auto px-4'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <div
            className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border'
            style={{
              background: 'oklch(from var(--primary) l c h / 0.06)',
              borderColor: 'oklch(from var(--primary) l c h / 0.2)',
            }}
          >
            <Zap className='h-3.5 w-3.5 text-primary' />
            <span className='text-sm text-primary font-medium font-display'>
              Powerful Features
            </span>
          </div>

          <h2 className='font-display text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight'>
            Everything You Need to
            <br />
            <span className='text-gradient'>Land Your Dream Job</span>
          </h2>
          <p className='max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed'>
            Powerful features designed to help you create the perfect resume and
            stand out from other candidates.
          </p>
        </div>

        {/* Features grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className='group relative rounded-2xl border border-border bg-card p-6 hover:border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shine overflow-hidden cursor-default'
              style={{
                animationDelay: `${index * 0.08}s`,
                ['--feature-glow']: feature.glow,
              }}
            >
              {/* Hover gradient bg */}
              <div
                className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{
                  background: `radial-gradient(ellipse at top left, ${feature.glow}15, transparent 60%)`,
                }}
              />

              {/* Gradient border on hover */}
              <div
                className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{
                  boxShadow: `0 0 0 1px ${feature.glow}40, 0 8px 32px ${feature.glow}20`,
                }}
              />

              <div className='relative z-10'>
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className='h-6 w-6 text-white' />
                </div>

                <h3 className='font-display text-lg font-bold text-foreground mb-2.5 group-hover:text-gradient transition-all duration-300'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed text-sm'>
                  {feature.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div
                className='absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl'
                style={{ background: feature.glow }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
