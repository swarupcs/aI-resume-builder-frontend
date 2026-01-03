import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useSignin } from '../hooks/auth/useSignin.js';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  const navigate = useNavigate();

  const { mutate: signin, isPending } = useSignin();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(formData, {
      onSuccess: () => navigate('/dashboard'),
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-background flex pt-16'>
        {/* Left Side - Branding */}
        <div className='hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 via-background to-accent/10 relative overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.15),transparent_50%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1),transparent_50%)]' />

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
              Build your perfect resume with{' '}
              <span className='text-gradient'>AI-powered</span> precision
            </h1>

            <p className='text-lg text-muted-foreground max-w-md'>
              Join thousands of professionals who landed their dream jobs using
              our intelligent resume builder.
            </p>

            <div className='mt-12 flex items-center gap-8'>
              <div>
                <p className='text-3xl font-bold text-foreground'>50K+</p>
                <p className='text-sm text-muted-foreground'>Resumes Created</p>
              </div>
              <div className='w-px h-12 bg-border' />
              <div>
                <p className='text-3xl font-bold text-foreground'>95%</p>
                <p className='text-sm text-muted-foreground'>Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
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
                Welcome back
              </h2>
              <p className='text-muted-foreground'>
                Sign in to continue building your resume
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
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
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    to='/forgot-password'
                    className='text-sm text-primary hover:text-primary/80 transition-colors'
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className='relative'>
                  <Input
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
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
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <p className='mt-8 text-center text-muted-foreground'>
              Don't have an account?{' '}
              <Link
                to='/signup'
                className='text-primary hover:text-primary/80 font-medium transition-colors'
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
