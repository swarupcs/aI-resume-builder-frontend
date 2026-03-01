
import { Mail, Phone, MapPin } from 'lucide-react';



const MinimalImageTemplate = ({ data, accentColor }) => {
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
      {/* Header with Image */}
      <div className="flex items-start gap-6 mb-6 pb-6 border-b" style={{ borderColor: accentColor }}>
        {personal_info.image && (
          <img 
            src={getImageSrc()} 
            alt="Profile" 
            className="w-28 h-28 rounded-lg object-cover shadow-md"
          />
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold" style={{ color: accentColor }}>
            {personal_info.full_name || 'Your Name'}
          </h1>
          {personal_info.profession && (
            <p className="text-gray-600 mt-1">{personal_info.profession}</p>
          )}
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
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
          </div>
        </div>
      </div>

      {/* Summary */}
      {professional_summary && (
        <div className="mb-5">
          <p className="text-gray-700 text-xs whitespace-pre-line">{professional_summary}</p>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-5 gap-6">
        {/* Main Content */}
        <div className="col-span-3 space-y-5">
          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>
                Experience
              </h2>
              <div className="space-y-3">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900">{exp.position}</h3>
                    <p className="text-gray-500 text-xs">
                      {exp.company} • {formatDate(exp.start_date)} - {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                    </p>
                    {exp.description && (
                      <p className="text-gray-600 text-xs mt-1 whitespace-pre-line">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {project.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>
                Projects
              </h2>
              <div className="space-y-2">
                {project.map((proj, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900">{proj.name}</h3>
                    {proj.type && <p className="text-gray-500 text-xs">{proj.type}</p>}
                    {proj.description && (
                      <p className="text-gray-600 text-xs whitespace-pre-line">{proj.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-span-2 space-y-5">
          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>
                Education
              </h2>
              <div className="space-y-2">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 text-xs">{edu.degree}</h3>
                    {edu.field && <p className="text-gray-600 text-xs">{edu.field}</p>}
                    <p className="text-gray-500 text-xs">{edu.institution}</p>
                    <p className="text-gray-400 text-xs">{formatDate(edu.graduation_date)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>
                Skills
              </h2>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-0.5 rounded text-xs"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
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

export default MinimalImageTemplate;
