
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';



const ProfessionalTemplate = ({ data, accentColor }) => {
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
      {/* Clean header with left accent line */}
      <div className="flex">
        <div className="w-1.5 min-h-full" style={{ backgroundColor: accentColor }} />
        <div className="flex-1 p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-5">
              {personal_info.image && (
                <img 
                 src={getImageSrc()}
                  alt="Profile" 
                  className="w-20 h-20 rounded-lg object-cover"
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {personal_info.full_name || 'Your Name'}
                </h1>
                {personal_info.profession && (
                  <p className="font-medium mt-0.5" style={{ color: accentColor }}>{personal_info.profession}</p>
                )}
              </div>
            </div>
            <div className="text-right text-xs text-gray-600 space-y-1">
              {personal_info.email && (
                <p className="flex items-center justify-end gap-1.5">
                  {personal_info.email} <Mail className="w-3 h-3" style={{ color: accentColor }} />
                </p>
              )}
              {personal_info.phone && (
                <p className="flex items-center justify-end gap-1.5">
                  {personal_info.phone} <Phone className="w-3 h-3" style={{ color: accentColor }} />
                </p>
              )}
              {personal_info.location && (
                <p className="flex items-center justify-end gap-1.5">
                  {personal_info.location} <MapPin className="w-3 h-3" style={{ color: accentColor }} />
                </p>
              )}
              {personal_info.linkedin && (
                <p className="flex items-center justify-end gap-1.5">
                  LinkedIn <Linkedin className="w-3 h-3" style={{ color: accentColor }} />
                </p>
              )}
              {personal_info.website && (
                <p className="flex items-center justify-end gap-1.5">
                  Portfolio <Globe className="w-3 h-3" style={{ color: accentColor }} />
                </p>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          {professional_summary && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-700 text-xs whitespace-pre-line leading-relaxed">{professional_summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: accentColor }}>
                Work Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4">
                    <div className="text-xs text-gray-500">
                      <p>{formatDate(exp.start_date)} –</p>
                      <p>{exp.is_current ? 'Present' : formatDate(exp.end_date)}</p>
                    </div>
                    <div className="col-span-3">
                      <h3 className="font-bold text-gray-900">{exp.position || 'Position'}</h3>
                      <p className="font-medium text-xs" style={{ color: accentColor }}>{exp.company || 'Company'}</p>
                      {exp.description && (
                        <p className="text-gray-600 text-xs mt-1.5 whitespace-pre-line">{exp.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: accentColor }}>
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4">
                    <div className="text-xs text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </div>
                    <div className="col-span-3">
                      <h3 className="font-bold text-gray-900">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-xs" style={{ color: accentColor }}>{edu.institution}</p>
                      {edu.gpa && <p className="text-gray-500 text-xs">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {project.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: accentColor }}>
                Projects
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {project.map((proj, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {proj.name}
                    </h3>
                    {proj.type && <p className="text-xs text-gray-500">{proj.type}</p>}
                    {proj.description && (
                      <p className="text-gray-600 text-xs mt-1 whitespace-pre-line line-clamp-2">{proj.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1" style={{ color: accentColor }}>
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-medium border rounded-md"
                    style={{ borderColor: accentColor, color: accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
