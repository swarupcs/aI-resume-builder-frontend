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
import { useUpdateResumeTitle } from '@/hooks/resume/useUpdateResumeTitle.js';

// ── Inner form — remounts fresh whenever resume changes via key prop ──
const EditForm = ({ resume, onClose }) => {
  const [title, setTitle] = useState(resume.title);
  const { mutate: updateTitle, isPending } = useUpdateResumeTitle();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    updateTitle(
      { id: resume._id, title: title.trim() },
      {
        onSuccess: () => onClose(),
      },
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-4 py-4'>
        <div className='space-y-2'>
          <Label htmlFor='edit-title'>Resume Title</Label>
          <Input
            id='edit-title'
            placeholder='Enter resume title'
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
          Save Changes
        </Button>
      </DialogFooter>
    </form>
  );
};

export const EditResumeModal = ({ open, resume, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Edit Resume Title</DialogTitle>
        </DialogHeader>
        {/* key=resume._id remounts EditForm with fresh state when resume changes */}
        {resume && (
          <EditForm key={resume._id} resume={resume} onClose={onClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};
