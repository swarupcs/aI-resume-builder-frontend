



const MinimalTemplate = ({ data, accentColor }) => {
  const { personal_info, professional_summary, experience, education, project, skills } = data;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="p-8 text-gray-900 text-sm leading-relaxed h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-light tracking-tight" style={{ color: accentColor }}>
          {personal_info.full_name || 'Your Name'}
        </h1>
        {personal_info.profession && (
          <p className="text-gray-500 mt-1">{personal_info.profession}</p>
        )}
        <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
          {personal_info.email && <span>{personal_info.email}</span>}
          {personal_info.phone && <span>• {personal_info.phone}</span>}
          {personal_info.location && <span>• {personal_info.location}</span>}
        </div>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Summary */}
      {professional_summary && (
        <div className="mb-6">
          <p className="text-gray-700 text-xs whitespace-pre-line">{professional_summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium" style={{ color: accentColor }}>{exp.position}</h3>
                  <span className="text-xs text-gray-400">
                    {formatDate(exp.start_date)} — {exp.is_current ? 'Present' : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-600 text-xs">{exp.company}</p>
                {exp.description && (
                  <p className="text-gray-600 text-xs mt-1 whitespace-pre-line">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-medium" style={{ color: accentColor }}>
                    {edu.degree} {edu.field && `— ${edu.field}`}
                  </h3>
                  <p className="text-gray-600 text-xs">{edu.institution}</p>
                </div>
                <span className="text-xs text-gray-400">{formatDate(edu.graduation_date)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {project.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Projects
          </h2>
          <div className="space-y-2">
            {project.map((proj, index) => (
              <div key={index}>
                <h3 className="font-medium" style={{ color: accentColor }}>
                  {proj.name} {proj.type && <span className="font-normal text-gray-400">/ {proj.type}</span>}
                </h3>
                {proj.description && (
                  <p className="text-gray-600 text-xs whitespace-pre-line">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Skills
          </h2>
          <p className="text-gray-700 text-xs">{skills.join(' • ')}</p>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate;
