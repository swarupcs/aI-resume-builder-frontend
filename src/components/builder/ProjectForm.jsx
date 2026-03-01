import { FolderIcon, Plus, Trash2 } from 'lucide-react';



const ProjectForm = ({ data, onChange }) => {
  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: ""
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">Projects</h3>
          <p className="text-sm text-muted-foreground">Add your notable projects</p>
        </div>
        <button 
          onClick={addProject} 
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors dark:bg-green-900/30 dark:text-green-300"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <FolderIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No projects added yet.</p>
          <p className="text-sm">Click "Add Project" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((project, index) => (
            <div key={index} className="p-4 border border-border rounded-lg space-y-3 bg-card">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-foreground">Project #{index + 1}</h4>
                <button 
                  onClick={() => removeProject(index)} 
                  className="text-destructive hover:text-destructive/80 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid gap-3">
                <input 
                  value={project.name || ""} 
                  onChange={(e) => updateProject(index, "name", e.target.value)} 
                  type="text" 
                  placeholder="Project Name" 
                  className="px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
                <input 
                  value={project.type || ""} 
                  onChange={(e) => updateProject(index, "type", e.target.value)} 
                  type="text" 
                  placeholder="Project Type (e.g., Web App, Mobile App)" 
                  className="px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
                <textarea 
                  rows={4} 
                  value={project.description || ""} 
                  onChange={(e) => updateProject(index, "description", e.target.value)} 
                  placeholder="Describe your project, technologies used, and your role..." 
                  className="w-full px-3 py-2 text-sm rounded-lg resize-none border border-border bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
