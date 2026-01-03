import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Sparkles, Check, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useSignup } from '../hooks/auth/useSignup.js';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
  });

  const navigate = useNavigate();

  const { mutate: signup, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(formData, {
      onSuccess: () => {
        navigate('/dashboard');
      },
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordRequirements = [
    { label: 'At least 8 characters', met: formData.password.length >= 8 },
    { label: 'Contains a number', met: /\d/.test(formData.password) },
    { label: 'Contains uppercase', met: /[A-Z]/.test(formData.password) },
  ];

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-background flex pt-16'>
        {/* Left Side - Branding */}
        <div className='hidden lg:flex lg:w-1/2 bg-gradient-to-br from-accent/20 via-background to-primary/10 relative overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]' />

          <div className='relative z-10 flex flex-col justify-center px-12 xl:px-20'>
            <Link to='/' className='flex items-center gap-2 mb-12'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-primary' />
              </div>
              <span className='text-2xl font-display font-bold text-foreground'>
                Resume<span className='text-primary'>AI</span>
              </span>
            </Link>

            <h1 className='text-4xl xl:text-5xl font-display font-bold text-foreground mb-6 leading-tight'>
              Start your journey to{' '}
              <span className='text-gradient'>career success</span>
            </h1>

            <p className='text-lg text-muted-foreground max-w-md mb-8'>
              Create a professional resume in minutes with our AI-powered tools
              and expert templates.
            </p>

            <div className='space-y-4'>
              {[
                'AI-powered content suggestions',
                'ATS-optimized templates',
                'Real-time preview',
                'Export to PDF instantly',
              ].map((feature, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <div className='w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center'>
                    <Check className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-foreground'>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className='w-full lg:w-1/2 flex items-center justify-center px-6 py-12'>
          <div className='w-full max-w-md'>
            {/* Mobile Logo */}
            <Link to='/' className='flex items-center gap-2 mb-8 lg:hidden'>
              <div className='w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-primary' />
              </div>
              <span className='text-2xl font-display font-bold text-foreground'>
                Resume<span className='text-primary'>AI</span>
              </span>
            </Link>

            <div className='mb-8'>
              <h2 className='text-3xl font-display font-bold text-foreground mb-2'>
                Create your account
              </h2>
              <p className='text-muted-foreground'>
                Get started with your free resume builder
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='John'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className='h-12 bg-secondary/50 border-border focus:border-primary'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Doe'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className='h-12 bg-secondary/50 border-border focus:border-primary'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='emailId'>Email Address</Label>
                <Input
                  id='emailId'
                  name='emailId'
                  type='email'
                  placeholder='john@example.com'
                  value={formData.emailId}
                  onChange={handleChange}
                  required
                  className='h-12 bg-secondary/50 border-border focus:border-primary'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                  <Input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Create a strong password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className='h-12 bg-secondary/50 border-border focus:border-primary pr-12'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {showPassword ? (
                      <EyeOff className='w-5 h-5' />
                    ) : (
                      <Eye className='w-5 h-5' />
                    )}
                  </button>
                </div>

                {/* Password Requirements */}
                {formData.password && (
                  <div className='mt-3 space-y-2'>
                    {passwordRequirements.map((req, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-2 text-sm transition-colors ${
                          req.met ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                            req.met ? 'bg-primary/20' : 'bg-secondary'
                          }`}
                        >
                          {req.met && <Check className='w-3 h-3' />}
                        </div>
                        {req.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type='submit'
                variant='hero'
                size='lg'
                className='w-full flex items-center justify-center gap-2'
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className='w-5 h-5 animate-spin' />
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>

            <p className='mt-6 text-center text-sm text-muted-foreground'>
              By signing up, you agree to our{' '}
              <Link to='/terms' className='text-primary hover:text-primary/80'>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to='/privacy'
                className='text-primary hover:text-primary/80'
              >
                Privacy Policy
              </Link>
            </p>

            <p className='mt-6 text-center text-muted-foreground'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='text-primary hover:text-primary/80 font-medium transition-colors'
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
