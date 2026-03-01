import { Check, Layout } from 'lucide-react';
import { useState } from 'react';



const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A clean, traditional resume format with clear sections and professional typography"
    },
    {
      id: "modern",
      name: "Modern",
      preview: "Sleek design with strategic use of color and modern font choices"
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a profile image and clean typography"
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your content front and center"
    },
    {
      id: "executive",
      name: "Executive",
      preview: "Bold header with timeline layout, perfect for senior professionals"
    },
    {
      id: "creative",
      name: "Creative",
      preview: "Dynamic design with playful elements for creative industries"
    },
    {
      id: "professional",
      name: "Professional",
      preview: "Clean grid layout with accent line, ideal for corporate roles"
    },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-1.5 text-sm text-primary bg-primary/10 hover:bg-primary/20 transition-all px-3 py-2 rounded-lg"
      >
        <Layout size={14} /> 
        <span className="max-sm:hidden">Template</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 w-72 p-3 mt-2 space-y-3 z-20 bg-popover rounded-lg border border-border shadow-lg">
            {templates.map((template) => (
              <div 
                key={template.id} 
                onClick={() => { onChange(template.id); setIsOpen(false); }} 
                className={`relative p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedTemplate === template.id 
                    ? "border-primary bg-primary/10" 
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2">
                    <div className="size-5 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                )}

                <div className="space-y-1 pr-6">
                  <h4 className="font-medium text-foreground">{template.name}</h4>
                  <p className="text-xs text-muted-foreground">{template.preview}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TemplateSelector;
