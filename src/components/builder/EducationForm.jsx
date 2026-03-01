import { GraduationCap, Plus, Trash2 } from 'lucide-react';



const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: ""
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">Education</h3>
          <p className="text-sm text-muted-foreground">Add your education details</p>
        </div>
        <button 
          onClick={addEducation} 
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors dark:bg-green-900/30 dark:text-green-300"
        >
          <Plus className="size-4" />
          Add Education
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No education added yet.</p>
          <p className="text-sm">Click "Add Education" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div key={index} className="p-4 border border-border rounded-lg space-y-3 bg-card">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-foreground">Education #{index + 1}</h4>
                <button 
                  onClick={() => removeEducation(index)} 
                  className="text-destructive hover:text-destructive/80 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input 
                  value={education.institution || ""} 
                  onChange={(e) => updateEducation(index, "institution", e.target.value)} 
                  type="text" 
                  placeholder="Institution Name" 
                  className="px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
                <input 
                  value={education.degree || ""} 
                  onChange={(e) => updateEducation(index, "degree", e.target.value)} 
                  type="text" 
                  placeholder="Degree (e.g., Bachelor's, Master's)" 
                  className="px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
                <input 
                  value={education.field || ""} 
                  onChange={(e) => updateEducation(index, "field", e.target.value)} 
                  type="text" 
                  placeholder="Field of Study" 
                  className="px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
                <input 
                  value={education.graduation_date || ""} 
                  onChange={(e) => updateEducation(index, "graduation_date", e.target.value)} 
                  type="month" 
                  className="px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
              </div>

              <input 
                value={education.gpa || ""} 
                onChange={(e) => updateEducation(index, "gpa", e.target.value)} 
                type="text" 
                placeholder="GPA (optional)" 
                className="w-full md:w-1/2 px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
