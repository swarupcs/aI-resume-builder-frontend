
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';



const ExecutiveTemplate = ({ data, accentColor }) => {
  const { personal_info, professional_summary, experience, education, project, skills } = data;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getImageSrc = () => {
    if (!personal_info.image) return null;
    if (typeof personal_info.image === 'string') return personal_info.image;
    return URL.createObjectURL(personal_info.image);
  };

  return (
    <div className="h-full bg-white text-gray-900 text-sm leading-relaxed">
      {/* Header with full-width accent band */}
      <div className="px-8 py-6" style={{ backgroundColor: accentColor }}>
        <div className="flex items-center gap-6">
          {personal_info.image && (
            <img 
              src={getImageSrc()} 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
            />
          )}
          <div className="text-white">
            <h1 className="text-3xl font-bold tracking-tight">
              {personal_info.full_name || 'Your Name'}
            </h1>
            {personal_info.profession && (
              <p className="text-white/90 text-lg mt-1">{personal_info.profession}</p>
            )}
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-white/80">
              {personal_info.email && (
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" /> {personal_info.email}
                </span>
              )}
              {personal_info.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {personal_info.phone}
                </span>
              )}
              {personal_info.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {personal_info.location}
                </span>
              )}
              {personal_info.linkedin && (
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </span>
              )}
              {personal_info.website && (
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Portfolio
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        {professional_summary && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-2 pb-1 border-b-2" style={{ color: accentColor, borderColor: accentColor }}>
              Executive Summary
            </h2>
            <p className="text-gray-700 text-xs whitespace-pre-line leading-relaxed">{professional_summary}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            {experience.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b-2" style={{ color: accentColor, borderColor: accentColor }}>
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-4 border-l-2" style={{ borderColor: accentColor + '40' }}>
                      <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900">{exp.position || 'Position'}</h3>
                          <p className="font-medium text-xs" style={{ color: accentColor }}>{exp.company || 'Company'}</p>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {formatDate(exp.start_date)} - {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                        </span>
                      </div>
                      {exp.description && (
                        <p className="text-gray-600 text-xs mt-2 whitespace-pre-line">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {project.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b-2" style={{ color: accentColor, borderColor: accentColor }}>
                  Key Projects
                </h2>
                <div className="space-y-3">
                  {project.map((proj, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">
                        {proj.name} {proj.type && <span className="font-normal text-gray-500 text-xs">• {proj.type}</span>}
                      </h3>
                      {proj.description && (
                        <p className="text-gray-600 text-xs mt-1 whitespace-pre-line">{proj.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Education */}
            {education.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b-2" style={{ color: accentColor, borderColor: accentColor }}>
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-900 text-xs">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-xs" style={{ color: accentColor }}>{edu.institution}</p>
                      <p className="text-gray-500 text-xs">{formatDate(edu.graduation_date)}</p>
                      {edu.gpa && <p className="text-gray-500 text-xs">GPA: {edu.gpa}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b-2" style={{ color: accentColor, borderColor: accentColor }}>
                  Core Competencies
                </h2>
                <div className="space-y-1.5">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                      <span className="text-xs text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
