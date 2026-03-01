import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';



const ModernTemplate = ({ data, accentColor }) => {
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
    <div className="flex h-full text-sm">
      {/* Sidebar */}
      <div className="w-1/3 p-6 text-white" style={{ backgroundColor: accentColor }}>
        {personal_info.image && (
          <img 
            src={getImageSrc()} 
            alt="Profile" 
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/30"
          />
        )}
        
        <h1 className="text-xl font-bold text-center mb-1">
          {personal_info.full_name || 'Your Name'}
        </h1>
        {personal_info.profession && (
          <p className="text-center text-white/80 text-xs mb-6">{personal_info.profession}</p>
        )}

        {/* Contact */}
        <div className="space-y-2 text-xs mb-6">
          <h3 className="font-bold uppercase tracking-wider border-b border-white/30 pb-1 mb-2">Contact</h3>
          {personal_info.email && (
            <p className="flex items-center gap-2">
              <Mail className="w-3 h-3" /> {personal_info.email}
            </p>
          )}
          {personal_info.phone && (
            <p className="flex items-center gap-2">
              <Phone className="w-3 h-3" /> {personal_info.phone}
            </p>
          )}
          {personal_info.location && (
            <p className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> {personal_info.location}
            </p>
          )}
          {personal_info.linkedin && (
            <p className="flex items-center gap-2">
              <Linkedin className="w-3 h-3" /> LinkedIn
            </p>
          )}
          {personal_info.website && (
            <p className="flex items-center gap-2">
              <Globe className="w-3 h-3" /> Portfolio
            </p>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="text-xs">
            <h3 className="font-bold uppercase tracking-wider border-b border-white/30 pb-1 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-2 py-0.5 rounded bg-white/20 text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6 bg-white">
        {/* Summary */}
        {professional_summary && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
              About Me
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
                <div key={index} className="border-l-2 pl-3" style={{ borderColor: accentColor }}>
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600 text-xs">{exp.company}</p>
                  <p className="text-xs text-gray-500">
                    {formatDate(exp.start_date)} - {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                  </p>
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
                <div key={index} className="border-l-2 pl-3" style={{ borderColor: accentColor }}>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-600 text-xs">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {project.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
              Projects
            </h2>
            <div className="space-y-2">
              {project.map((proj, index) => (
                <div key={index} className="border-l-2 pl-3" style={{ borderColor: accentColor }}>
                  <h3 className="font-semibold text-gray-900">{proj.name}</h3>
                  {proj.type && <p className="text-gray-500 text-xs">{proj.type}</p>}
                  {proj.description && (
                    <p className="text-gray-700 text-xs whitespace-pre-line">{proj.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
