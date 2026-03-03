import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  EyeOff,
  FileText,
  FolderIcon,
  GraduationCap,
  Share2,
  Sparkles,
  User,
  Save,
  Loader2,
} from 'lucide-react';
import { toast } from 'sonner';

import Navbar from '@/components/Navbar';
import PersonalInfoForm from '@/components/builder/PersonalInfoForm';
import ProfessionalSummaryForm from '@/components/builder/ProfessionalSummaryForm';
import ExperienceForm from '@/components/builder/ExperienceForm';
import EducationForm from '@/components/builder/EducationForm';
import ProjectForm from '@/components/builder/ProjectForm';
import SkillsForm from '@/components/builder/SkillsForm';
import ResumePreview from '@/components/builder/ResumePreview';
import TemplateSelector from '@/components/builder/TemplateSelector';
import ColorPicker from '@/components/builder/ColorPicker';
import { useResumeById } from '@/hooks/resume/useResumeById';
import { useUpdateResume } from '@/hooks/resume/useUpdateResume';
import { useToggleResumeVisibility } from '@/hooks/resume/useToggleResumeVisibility';

const sections = [
  { id: 'personal', name: 'Personal Info', icon: User },
  { id: 'summary', name: 'Summary', icon: FileText },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'projects', name: 'Projects', icon: FolderIcon },
  { id: 'skills', name: 'Skills', icon: Sparkles },
];

const DEFAULT_RESUME = {
  title: 'Untitled Resume',
  personal_info: {},
  professional_summary: '',
  experience: [],
  education: [],
  project: [],
  skills: [],
  template: 'classic',
  accent_color: '#3B82F6',
  public: false,
};

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const { data: fetchedResume, isLoading } = useResumeById(resumeId, {
    onError: (error) => toast.error(error.message || 'Failed to load resume'),
  });

  const serverResume = useMemo(() => {
    const resume = fetchedResume?.data?.resume;
    if (!resume) return null;
    return {
      _id: resume._id,
      title: resume.title ?? DEFAULT_RESUME.title,
      personal_info: {
        full_name: resume.personal_info?.full_name ?? '',
        email: resume.personal_info?.email ?? '',
        phone: resume.personal_info?.phone ?? '',
        location: resume.personal_info?.location ?? '',
        profession: resume.personal_info?.profession ?? '',
        linkedin: resume.personal_info?.linkedin ?? '',
        website: resume.personal_info?.website ?? '',
        image: resume.personal_info?.image ?? '',
      },
      professional_summary: resume.professional_summary ?? '',
      experience: (resume.experience ?? []).map((exp) => ({
        company: exp.company ?? '',
        position: exp.position ?? '',
        start_date: exp.start_date ?? '',
        end_date: exp.end_date ?? '',
        description: exp.description ?? '',
        is_current: exp.is_current ?? false,
      })),
      education: (resume.education ?? []).map((edu) => ({
        institution: edu.institution ?? '',
        degree: edu.degree ?? '',
        field: edu.field ?? '',
        graduation_date: edu.graduation_date ?? '',
        gpa: edu.gpa ?? '',
      })),
      project: (resume.project ?? []).map((proj) => ({
        name: proj.name ?? '',
        type: proj.type ?? '',
        description: proj.description ?? '',
      })),
      skills: (resume.skills ?? []).map((skill) => String(skill)),
      template: resume.template ?? DEFAULT_RESUME.template,
      accent_color: resume.accent_color ?? DEFAULT_RESUME.accent_color,
      public: resume.isPublic ?? DEFAULT_RESUME.public,
    };
  }, [fetchedResume]);

  const [localOverrides, setLocalOverrides] = useState({});
  const resumeData = useMemo(
    () => ({ ...DEFAULT_RESUME, ...serverResume, ...localOverrides }),
    [serverResume, localOverrides],
  );

  const setResumeData = (updater) => {
    setLocalOverrides((prev) => {
      const current = { ...DEFAULT_RESUME, ...serverResume, ...prev };
      const next = typeof updater === 'function' ? updater(current) : updater;
      return next;
    });
  };

  const { mutate: updateResume, isPending: isSaving } =
    useUpdateResume(resumeId);

  const saveResume = () => {
    const hasNewImage = resumeData.personal_info?.image instanceof File;
    const resumeDataToSend = {
      ...resumeData,
      personal_info: {
        ...resumeData.personal_info,
        ...(hasNewImage ? { image: undefined } : {}),
      },
    };
    updateResume(
      {
        resumeId,
        resumeData: resumeDataToSend,
        image: hasNewImage ? resumeData.personal_info.image : null,
        removeBackground,
      },
      {
        onSuccess: (data) => {
          setResumeData((prev) => ({
            ...prev,
            personal_info: data.data.resume.personal_info ?? prev.personal_info,
            public: data.data.resume.isPublic ?? prev.public,
          }));
        },
      },
    );
  };

  const { mutate: toggleVisibility, isPending: isTogglingVisibility } =
    useToggleResumeVisibility();

  const changeResumeVisibility = () => {
    toggleVisibility(resumeId, {
      onSuccess: (data) => {
        setResumeData((prev) => ({
          ...prev,
          public: data.data.resume.isPublic,
        }));
      },
    });
  };

  const handleShare = () => {
    const resumeUrl = `${window.location.origin}/view/${resumeId}`;
    if (navigator.share)
      navigator.share({ url: resumeUrl, title: resumeData.title });
    else {
      navigator.clipboard.writeText(resumeUrl);
      toast.success('Link copied to clipboard!');
    }
  };

  const progressPercent = (activeSectionIndex / (sections.length - 1)) * 100;

  if (isLoading) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <div className='relative'>
            <div className='absolute inset-0 rounded-full bg-primary/15 blur-xl animate-pulse scale-150' />
            <Loader2 className='size-10 animate-spin text-primary relative z-10' />
          </div>
          <p className='text-sm text-muted-foreground animate-pulse font-medium'>
            Loading resume...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      {/* Back nav */}
      <div className='max-w-7xl mx-auto px-4 py-5 mt-16'>
        <Link
          to='/dashboard'
          className='inline-flex gap-2 items-center text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group'
        >
          <ArrowLeft className='size-4 transition-transform group-hover:-translate-x-0.5' />
          Back to Dashboard
        </Link>
      </div>

      {/* Main grid */}
      <div className='max-w-7xl mx-auto px-4 pb-10'>
        <div className='grid lg:grid-cols-12 gap-6'>
          {/* Left panel */}
          <div className='lg:col-span-5'>
            <div className='bg-card rounded-2xl border border-border shadow-sm overflow-hidden'>
              {/* Progress bar */}
              <div className='h-1 bg-muted'>
                <div
                  className='h-full transition-all duration-500 rounded-r-full'
                  style={{
                    width: `${progressPercent}%`,
                    background:
                      'linear-gradient(90deg, var(--primary), oklch(0.65 0.28 305))',
                  }}
                />
              </div>

              {/* Toolbar */}
              <div className='flex items-center justify-between px-5 py-3.5 border-b border-border bg-secondary/20'>
                <div className='flex items-center gap-2'>
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) =>
                      setResumeData((prev) => ({ ...prev, template }))
                    }
                  />
                  <ColorPicker
                    selectedColor={resumeData.accent_color}
                    onChange={(color) =>
                      setResumeData((prev) => ({
                        ...prev,
                        accent_color: color,
                      }))
                    }
                  />
                </div>

                <div className='flex items-center gap-1'>
                  {activeSectionIndex !== 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((p) => Math.max(p - 1, 0))
                      }
                      className='flex items-center gap-1 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all'
                    >
                      <ChevronLeft className='size-3.5' /> Prev
                    </button>
                  )}
                  <button
                    onClick={() =>
                      setActiveSectionIndex((p) =>
                        Math.min(p + 1, sections.length - 1),
                      )
                    }
                    disabled={activeSectionIndex === sections.length - 1}
                    className='flex items-center gap-1 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all disabled:opacity-30'
                  >
                    Next <ChevronRight className='size-3.5' />
                  </button>
                </div>
              </div>

              {/* Section tabs */}
              <div className='flex items-center gap-1.5 px-5 py-3 border-b border-border overflow-x-auto no-scrollbar'>
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = index === activeSectionIndex;
                  const isDone = index < activeSectionIndex;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSectionIndex(index)}
                      title={section.name}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                        isActive
                          ? 'text-primary-foreground'
                          : isDone
                            ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                      }`}
                      style={
                        isActive
                          ? {
                              background:
                                'linear-gradient(135deg, var(--primary), oklch(0.65 0.28 305))',
                              boxShadow: '0 2px 8px oklch(0.72 0.22 280 / 0.3)',
                            }
                          : {}
                      }
                    >
                      <Icon className='size-3.5' />
                      <span className='hidden sm:block'>{section.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Form content */}
              <div className='p-5 min-h-[420px]'>
                {sections[activeSectionIndex].id === 'personal' && (
                  <PersonalInfoForm
                    data={resumeData.personal_info}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_info: data,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}
                {sections[activeSectionIndex].id === 'summary' && (
                  <ProfessionalSummaryForm
                    data={resumeData.professional_summary}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        professional_summary: data,
                      }))
                    }
                  />
                )}
                {sections[activeSectionIndex].id === 'experience' && (
                  <ExperienceForm
                    data={resumeData.experience}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, experience: data }))
                    }
                  />
                )}
                {sections[activeSectionIndex].id === 'education' && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, education: data }))
                    }
                  />
                )}
                {sections[activeSectionIndex].id === 'projects' && (
                  <ProjectForm
                    data={resumeData.project}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, project: data }))
                    }
                  />
                )}
                {sections[activeSectionIndex].id === 'skills' && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={(data) =>
                      setResumeData((prev) => ({ ...prev, skills: data }))
                    }
                  />
                )}
              </div>

              {/* Save button */}
              <div className='px-5 pb-5'>
                <button
                  onClick={saveResume}
                  disabled={isSaving}
                  className='w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-display font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:scale-100'
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.55 0.22 165), oklch(0.50 0.20 185))',
                    boxShadow: '0 4px 16px oklch(0.55 0.22 165 / 0.35)',
                  }}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className='size-4 animate-spin' /> Saving...
                    </>
                  ) : (
                    <>
                      <Save className='size-4' /> Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right panel - Preview */}
          <div className='lg:col-span-7'>
            {/* Action buttons */}
            <div className='flex items-center justify-end gap-2 mb-4'>
              {resumeData.public && (
                <button
                  onClick={handleShare}
                  className='flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/15 transition-colors'
                >
                  <Share2 className='size-3.5' /> Share
                </button>
              )}
              <button
                onClick={changeResumeVisibility}
                disabled={isTogglingVisibility}
                className='flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 transition-colors disabled:opacity-50'
              >
                {isTogglingVisibility ? (
                  <Loader2 className='size-3.5 animate-spin' />
                ) : resumeData.public ? (
                  <Eye className='size-3.5' />
                ) : (
                  <EyeOff className='size-3.5' />
                )}
                {resumeData.public ? 'Public' : 'Private'}
              </button>
              <button
                onClick={() => window.print()}
                className='flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20 hover:bg-green-500/15 transition-colors'
              >
                <Download className='size-3.5' /> Download PDF
              </button>
            </div>

            <ResumePreview
              data={resumeData}
              template={resumeData.template}
              accentColor={resumeData.accent_color}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
