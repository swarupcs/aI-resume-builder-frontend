import { useState, useCallback } from 'react';
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
import { Loader2, Upload, FileText, X } from 'lucide-react';



export const UploadResumeModal = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === 'application/pdf') {
        setFile(droppedFile);
      }
    }
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const extractTextFromPdf = async (pdfFile) => {
    // Mock PDF text extraction - in production, use pdf.js or similar
    return `Extracted content from ${pdfFile.name}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !file) return;

    setLoading(true);
    try {
      const pdfText = await extractTextFromPdf(file);
      await onSubmit(title.trim(), pdfText);
      setTitle('');
      setFile(null);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setTitle('');
    setFile(null);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Upload Existing Resume</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='space-y-4 py-4'>
            <div className='space-y-2'>
              <Label htmlFor='upload-title'>Resume Title</Label>
              <Input
                id='upload-title'
                placeholder='e.g., My Professional Resume'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className='space-y-2'>
              <Label>PDF File</Label>
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {file ? (
                  <div className='flex items-center justify-center gap-3'>
                    <FileText className='h-8 w-8 text-primary' />
                    <div className='text-left'>
                      <p className='font-medium text-foreground'>{file.name}</p>
                      <p className='text-sm text-muted-foreground'>
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <button
                      type='button'
                      onClick={() => setFile(null)}
                      className='p-1 rounded hover:bg-muted'
                    >
                      <X className='h-4 w-4' />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className='h-10 w-10 text-muted-foreground mx-auto mb-3' />
                    <p className='text-foreground font-medium'>
                      Drag & drop your PDF here
                    </p>
                    <p className='text-sm text-muted-foreground mt-1'>
                      or click to browse
                    </p>
                    <input
                      type='file'
                      accept='.pdf'
                      onChange={handleFileChange}
                      className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                      disabled={loading}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={resetAndClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type='submit' disabled={!title.trim() || !file || loading}>
              {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Upload
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
