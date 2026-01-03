import {
  Pencil,
  Trash2,
  FileText,
  Copy,
  Share2,
  Download,
  Eye,
  Globe,
  Lock,
  MoreVertical,
} from 'lucide-react';
import { format } from 'date-fns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';



const cardColors = [
  'from-primary/20 to-accent/20',
  'from-accent/20 to-primary/20',
  'from-primary/30 to-primary/10',
  'from-accent/30 to-accent/10',
];

export const ResumeCard = ({
  resume,
  onEdit,
  onDelete,
  onClick,
  onDuplicate,
  onShare,
  onDownload,
  onPreview,
  onToggleVisibility,
}) => {
  const colorIndex = parseInt(resume.id) % cardColors.length;

  return (
    <div
      onClick={() => onClick(resume)}
      className={`group relative p-6 rounded-xl bg-gradient-to-br ${cardColors[colorIndex]} border border-border/50 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-glow hover:border-primary/50`}
    >
      {/* Status badge */}
      <div className='absolute top-4 left-4'>
        <Badge
          variant={resume.isPublic ? 'default' : 'secondary'}
          className='text-xs gap-1'
        >
          {resume.isPublic ? (
            <>
              <Globe className='h-3 w-3' />
              Public
            </>
          ) : (
            <>
              <Lock className='h-3 w-3' />
              Private
            </>
          )}
        </Badge>
      </div>

      {/* Action menu */}
      <div className='absolute top-4 right-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              onClick={(e) => e.stopPropagation()}
              className='p-2 rounded-lg bg-background/80 hover:bg-primary/20 text-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100'
              aria-label='Resume actions'
            >
              <MoreVertical className='h-4 w-4' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' onClick={(e) => e.stopPropagation()}>
            <DropdownMenuItem onClick={() => onPreview(resume)}>
              <Eye className='h-4 w-4 mr-2' />
              Preview
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit(resume)}>
              <Pencil className='h-4 w-4 mr-2' />
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDuplicate(resume)}>
              <Copy className='h-4 w-4 mr-2' />
              Duplicate
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onDownload(resume)}>
              <Download className='h-4 w-4 mr-2' />
              Download PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onShare(resume)}>
              <Share2 className='h-4 w-4 mr-2' />
              Share Link
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onToggleVisibility(resume)}>
              {resume.isPublic ? (
                <>
                  <Lock className='h-4 w-4 mr-2' />
                  Make Private
                </>
              ) : (
                <>
                  <Globe className='h-4 w-4 mr-2' />
                  Make Public
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => onDelete(resume)}
              className='text-destructive focus:text-destructive'
            >
              <Trash2 className='h-4 w-4 mr-2' />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Resume icon with accent color indicator */}
      <div className='w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mt-6 relative'>
        <FileText className='h-6 w-6 text-primary' />
        {resume.accentColor && (
          <div
            className='absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background'
            style={{ backgroundColor: resume.accentColor }}
          />
        )}
      </div>

      {/* Resume title */}
      <h3 className='text-lg font-semibold text-foreground mb-1 line-clamp-2'>
        {resume.title}
      </h3>

      {/* Template info */}
      {resume.template && (
        <p className='text-xs text-muted-foreground mb-2 capitalize'>
          {resume.template} template
        </p>
      )}

      {/* Last updated */}
      <p className='text-sm text-muted-foreground'>
        Updated {format(new Date(resume.updatedAt), 'MMM d, yyyy')}
      </p>

      {/* Quick actions on hover */}
      <div className='flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity'>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreview(resume);
          }}
          className='flex-1 py-2 px-3 rounded-lg bg-background/80 hover:bg-primary/20 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center justify-center gap-1.5'
        >
          <Eye className='h-3.5 w-3.5' />
          Preview
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDownload(resume);
          }}
          className='flex-1 py-2 px-3 rounded-lg bg-background/80 hover:bg-primary/20 text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center justify-center gap-1.5'
        >
          <Download className='h-3.5 w-3.5' />
          Download
        </button>
      </div>
    </div>
  );
};
