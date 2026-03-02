import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useCreateResume } from '@/hooks/resume/useCreateResume.js';
import { useNavigate } from 'react-router-dom';

export const CreateResumeModal = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const { mutate: createResume, isPending } = useCreateResume();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    createResume(title.trim(), {
      onSuccess: (data) => {
        setTitle('');
        onClose();
        navigate(`/app/builder/${data.data.resume._id}`);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Create New Resume</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='space-y-4 py-4'>
            <div className='space-y-2'>
              <Label htmlFor='title'>Resume Title</Label>
              <Input
                id='title'
                placeholder='e.g., Software Engineer Resume'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isPending}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type='submit' disabled={!title.trim() || isPending}>
              {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
