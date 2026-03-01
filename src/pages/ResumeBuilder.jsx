import { useState, useEffect } from 'react';
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
  Loader2
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
import { Button } from '@/components/ui/button';



const sections = [
  { id: "personal", name: "Personal Info", icon: User },
  { id: "summary", name: "Summary", icon: FileText },
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "projects", name: "Projects", icon: FolderIcon },
  { id: "skills", name: "Skills", icon: Sparkles },
];

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const [isSaving, setIsSaving] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const [resumeData, setResumeData] = useState({
    _id: resumeId || '',
    title: 'Untitled Resume',
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });

  const activeSection = sections[activeSectionIndex];

  useEffect(() => {
    // Mock loading existing resume data
    const loadResume = async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      // In production, this would fetch from API
      setResumeData(prev => ({
        ...prev,
        title: `Resume ${resumeId}`,
      }));
    };
    
    if (resumeId) {
      loadResume();
    }
  }, [resumeId]);

  const saveResume = async () => {
    setIsSaving(true);
    try {
      // Mock API save
      await new Promise(resolve => setTimeout(resolve, 800));
      toast.success('Resume saved successfully!');
    } catch (error) {
      toast.error('Failed to save resume');
    } finally {
      setIsSaving(false);
    }
  };

  const changeResumeVisibility = async () => {
    setResumeData(prev => ({ ...prev, public: !prev.public }));
    toast.success(resumeData.public ? 'Resume is now private' : 'Resume is now public');
  };

  const handleShare = () => {
    const resumeUrl = `${window.location.origin}/view/${resumeId}`;
    
    if (navigator.share) {
      navigator.share({ url: resumeUrl, title: resumeData.title });
    } else {
      navigator.clipboard.writeText(resumeUrl);
      toast.success('Link copied to clipboard!');
    }
  };

  const downloadResume = () => {
    window.print();
  };

  const progressPercent = (activeSectionIndex / (sections.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-6 mt-16">
        <Link 
          to="/dashboard" 
          className="inline-flex gap-2 items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to Dashboard
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel - Form */}
          <div className="relative lg:col-span-5">
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 pt-4 relative overflow-hidden">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Section Navigation */}
              <div className="flex justify-between items-center mb-6 border-b border-border pb-3 pt-2">
                <div className="flex items-center gap-2">
                  <TemplateSelector 
                    selectedTemplate={resumeData.template} 
                    onChange={(template) => setResumeData(prev => ({ ...prev, template }))}
                  />
                  <ColorPicker 
                    selectedColor={resumeData.accent_color} 
                    onChange={(color) => setResumeData(prev => ({ ...prev, accent_color: color }))}
                  />
                </div>

                <div className="flex items-center">
                  {activeSectionIndex !== 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveSectionIndex(prev => Math.max(prev - 1, 0))}
                      className="text-muted-foreground"
                    >
                      <ChevronLeft className="size-4 mr-1" /> Previous
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveSectionIndex(prev => Math.min(prev + 1, sections.length - 1))}
                    disabled={activeSectionIndex === sections.length - 1}
                    className="text-muted-foreground"
                  >
                    Next <ChevronRight className="size-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Section Indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSectionIndex(index)}
                      className={`p-2 rounded-lg transition-colors ${
                        index === activeSectionIndex
                          ? 'bg-primary text-primary-foreground'
                          : index < activeSectionIndex
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-muted text-muted-foreground'
                      }`}
                      title={section.name}
                    >
                      <Icon className="size-4" />
                    </button>
                  );
                })}
              </div>

              {/* Form Content */}
              <div className="space-y-6 min-h-[400px]">
                {activeSection.id === 'personal' && (
                  <PersonalInfoForm 
                    data={resumeData.personal_info} 
                    onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))}
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}
                {activeSection.id === 'summary' && (
                  <ProfessionalSummaryForm 
                    data={resumeData.professional_summary} 
                    onChange={(data) => setResumeData(prev => ({ ...prev, professional_summary: data }))}
                  />
                )}
                {activeSection.id === 'experience' && (
                  <ExperienceForm 
                    data={resumeData.experience} 
                    onChange={(data) => setResumeData(prev => ({ ...prev, experience: data }))}
                  />
                )}
                {activeSection.id === 'education' && (
                  <EducationForm 
                    data={resumeData.education} 
                    onChange={(data) => setResumeData(prev => ({ ...prev, education: data }))}
                  />
                )}
                {activeSection.id === 'projects' && (
                  <ProjectForm 
                    data={resumeData.project} 
                    onChange={(data) => setResumeData(prev => ({ ...prev, project: data }))}
                  />
                )}
                {activeSection.id === 'skills' && (
                  <SkillsForm 
                    data={resumeData.skills} 
                    onChange={(data) => setResumeData(prev => ({ ...prev, skills: data }))}
                  />
                )}
              </div>

              {/* Save Button */}
              <Button 
                onClick={saveResume}
                disabled={isSaving}
                className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                {isSaving ? (
                  <Loader2 className="size-4 animate-spin mr-2" />
                ) : (
                  <Save className="size-4 mr-2" />
                )}
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:col-span-7">
            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2 mb-4">
              {resumeData.public && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
                >
                  <Share2 className="size-4 mr-2" /> Share
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={changeResumeVisibility}
                className="bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800"
              >
                {resumeData.public ? <Eye className="size-4 mr-2" /> : <EyeOff className="size-4 mr-2" />}
                {resumeData.public ? 'Public' : 'Private'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadResume}
                className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
              >
                <Download className="size-4 mr-2" /> Download
              </Button>
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
