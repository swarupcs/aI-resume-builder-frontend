
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';



const ClassicTemplate = ({ data, accentColor }) => {
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
    <div className="p-8 text-gray-900 text-sm leading-relaxed h-full">
      {/* Header */}
      <div className="text-center border-b-2 pb-4 mb-6" style={{ borderColor: accentColor }}>
        {personal_info.image && (
          <img 
            src={getImageSrc()} 
            alt="Profile" 
            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2"
            style={{ borderColor: accentColor }}
          />
        )}
        <h1 className="text-2xl font-bold" style={{ color: accentColor }}>
          {personal_info.full_name || 'Your Name'}
        </h1>
        {personal_info.profession && (
          <p className="text-gray-600 mt-1">{personal_info.profession}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-gray-600">
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

      {/* Professional Summary */}
      {professional_summary && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
            Professional Summary
          </h2>
          <p className="text-gray-700 text-xs whitespace-pre-line">{professional_summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
            Experience
          </h2>
          <div className="space-y-3">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.position || 'Position'}</h3>
                    <p className="text-gray-600 text-xs">{exp.company || 'Company'}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatDate(exp.start_date)} - {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                  </span>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-xs mt-1 whitespace-pre-line">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600 text-xs">{edu.institution}</p>
                  {edu.gpa && <p className="text-gray-500 text-xs">GPA: {edu.gpa}</p>}
                </div>
                <span className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {project.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
            Projects
          </h2>
          <div className="space-y-2">
            {project.map((proj, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">
                  {proj.name} {proj.type && <span className="font-normal text-gray-500">({proj.type})</span>}
                </h3>
                {proj.description && (
                  <p className="text-gray-700 text-xs whitespace-pre-line">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 rounded text-xs text-white"
                style={{ backgroundColor: accentColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
