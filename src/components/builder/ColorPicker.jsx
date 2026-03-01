import { Check, Palette } from 'lucide-react';
import { useState } from 'react';



const ColorPicker = ({ selectedColor, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Indigo", value: "#6366F1" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Violet", value: "#7C3AED" },
    { name: "Green", value: "#10B981" },
    { name: "Emerald", value: "#059669" },
    { name: "Red", value: "#EF4444" },
    { name: "Rose", value: "#F43F5E" },
    { name: "Orange", value: "#F97316" },
    { name: "Amber", value: "#F59E0B" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Cyan", value: "#06B6D4" },
    { name: "Pink", value: "#EC4899" },
    { name: "Fuchsia", value: "#D946EF" },
    { name: "Sky", value: "#0EA5E9" },
    { name: "Lime", value: "#84CC16" },
    { name: "Slate", value: "#475569" },
    { name: "Zinc", value: "#71717A" },
    { name: "Stone", value: "#78716C" },
    { name: "Black", value: "#1F2937" }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-1.5 text-sm text-purple-600 bg-purple-100 hover:bg-purple-200 transition-all px-3 py-2 rounded-lg dark:bg-purple-900/30 dark:text-purple-300"
      >
        <Palette size={14} /> 
        <span className="max-sm:hidden">Accent</span>
        <div 
          className="w-4 h-4 rounded-full border-2 border-white shadow-sm" 
          style={{ backgroundColor: selectedColor }}
        />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="grid grid-cols-5 w-64 gap-2 absolute top-full left-0 p-3 mt-2 z-20 bg-popover rounded-lg border border-border shadow-lg">
            {colors.map((color) => (
              <div 
                key={color.value} 
                className="relative cursor-pointer group flex flex-col items-center" 
                onClick={() => { onChange(color.value); setIsOpen(false); }}
              >
                <div 
                  className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-foreground/25 transition-colors shadow-sm" 
                  style={{ backgroundColor: color.value }}
                >
                  {selectedColor === color.value && (
                    <div className="w-full h-full flex items-center justify-center">
                      <Check className="size-4 text-white drop-shadow-md" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-center mt-1 text-muted-foreground">{color.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ColorPicker;
