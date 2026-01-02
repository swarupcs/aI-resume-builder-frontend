import { Button } from '@/components/ui/button';
import { LogOut, Sparkles, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
  const { user, logout } = {};
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return user?.email?.[0]?.toUpperCase() || 'U';
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link to='/' className='flex items-center gap-2 group'>
          <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors'>
            <Sparkles className='h-5 w-5 text-primary' />
          </div>
          <span className='font-display text-xl font-bold text-foreground'>
            Resume<span className='text-primary'>AI</span>
          </span>
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          <a
            href='#features'
            className='text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            Features
          </a>
          <a
            href='#how-it-works'
            className='text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            How it Works
          </a>
          <a
            href='#testimonials'
            className='text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            Testimonials
          </a>
        </div>

        <div className='flex items-center gap-3'>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className='relative h-9 w-9 rounded-full'
                >
                  <Avatar className='h-9 w-9'>
                    <AvatarFallback className='bg-primary/10 text-primary font-medium'>
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-56'>
                <div className='flex items-center gap-2 p-2'>
                  <Avatar className='h-8 w-8'>
                    <AvatarFallback className='bg-primary/10 text-primary text-sm'>
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium'>
                      {user.firstName} {user.lastName}
                    </span>
                    <span className='text-xs text-muted-foreground'>
                      {user.email}
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to='/dashboard' className='cursor-pointer'>
                    <User className='mr-2 h-4 w-4' />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className='text-destructive cursor-pointer'
                >
                  <LogOut className='mr-2 h-4 w-4' />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant='ghost'
                size='sm'
                className='hidden sm:inline-flex'
                asChild
              >
                <Link to='/login'>Log in</Link>
              </Button>
              <Button size='sm' asChild>
                <Link to='/signup'>Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
