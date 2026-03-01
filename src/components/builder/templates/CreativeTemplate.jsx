
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';



const CreativeTemplate = ({ data, accentColor }) => {
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

  // Generate a lighter version of the accent for backgrounds
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="h-full bg-white text-gray-900 text-sm leading-relaxed overflow-hidden">
      {/* Diagonal header design */}
      <div className="relative">
        <div 
          className="absolute inset-0 h-48 -skew-y-3 origin-top-left" 
          style={{ backgroundColor: hexToRgba(accentColor, 0.1), top: '-20px' }}
        />
        <div className="relative px-8 pt-8 pb-4 flex items-start gap-6">
          {personal_info.image && (
            <img 
              src={getImageSrc()} 
              alt="Profile" 
              className="w-28 h-28 rounded-2xl object-cover shadow-lg border-4"
              style={{ borderColor: accentColor }}
            />
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-black tracking-tight" style={{ color: accentColor }}>
              {personal_info.full_name || 'Your Name'}
            </h1>
            {personal_info.profession && (
              <p className="text-gray-600 text-lg font-medium mt-1">{personal_info.profession}</p>
            )}
            <div className="flex flex-wrap gap-3 mt-3">
              {personal_info.email && (
                <span className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: hexToRgba(accentColor, 0.15), color: accentColor }}>
                  <Mail className="w-3 h-3" /> {personal_info.email}
                </span>
              )}
              {personal_info.phone && (
                <span className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: hexToRgba(accentColor, 0.15), color: accentColor }}>
                  <Phone className="w-3 h-3" /> {personal_info.phone}
                </span>
              )}
              {personal_info.location && (
                <span className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: hexToRgba(accentColor, 0.15), color: accentColor }}>
                  <MapPin className="w-3 h-3" /> {personal_info.location}
                </span>
              )}
            </div>
            <div className="flex gap-3 mt-2">
              {personal_info.linkedin && (
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </span>
              )}
              {personal_info.website && (
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Globe className="w-3 h-3" /> Portfolio
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pb-8 pt-2">
        {/* Professional Summary */}
        {professional_summary && (
          <div className="mb-5 p-4 rounded-xl" style={{ backgroundColor: hexToRgba(accentColor, 0.05) }}>
            <h2 className="text-sm font-bold mb-2" style={{ color: accentColor }}>
              ✨ About Me
            </h2>
            <p className="text-gray-700 text-xs whitespace-pre-line">{professional_summary}</p>
          </div>
        )}

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 space-y-5">
            {/* Experience */}
            {experience.length > 0 && (
              <div>
                <h2 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: accentColor }}>
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>💼</span>
                  Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-4">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" style={{ backgroundColor: hexToRgba(accentColor, 0.3) }} />
                      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3px]" style={{ backgroundColor: accentColor }} />
                      <h3 className="font-bold text-gray-900">{exp.position || 'Position'}</h3>
                      <p className="text-xs font-medium" style={{ color: accentColor }}>{exp.company || 'Company'}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {formatDate(exp.start_date)} → {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                      </p>
                      {exp.description && (
                        <p className="text-gray-600 text-xs mt-1.5 whitespace-pre-line">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {project.length > 0 && (
              <div>
                <h2 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: accentColor }}>
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>🚀</span>
                  Projects
                </h2>
                <div className="grid gap-2">
                  {project.map((proj, index) => (
                    <div key={index} className="p-3 border rounded-xl border-gray-100 hover:shadow-sm transition-shadow">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {proj.name}
                        {proj.type && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{proj.type}</span>}
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

          <div className="col-span-2 space-y-5">
            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <h2 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: accentColor }}>
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>⚡</span>
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: hexToRgba(accentColor, 0.15), color: accentColor }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div>
                <h2 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: accentColor }}>
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: accentColor }}>🎓</span>
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="p-3 rounded-xl" style={{ backgroundColor: hexToRgba(accentColor, 0.05) }}>
                      <h3 className="font-semibold text-gray-900 text-xs">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-xs font-medium" style={{ color: accentColor }}>{edu.institution}</p>
                      <p className="text-gray-500 text-xs">{formatDate(edu.graduation_date)}</p>
                      {edu.gpa && <p className="text-gray-500 text-xs">GPA: {edu.gpa}</p>}
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

export default CreativeTemplate;
