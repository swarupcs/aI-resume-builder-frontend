import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';



const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const fields = [
    { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
    { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel", required: false },
    { key: "location", label: "Location", icon: MapPin, type: "text", required: false },
    { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text", required: false },
    { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url", required: false },
    { key: "website", label: "Personal Website", icon: Globe, type: "url", required: false }
  ];

  const getImageSrc = () => {
    if (!data.image) return null;
    if (typeof data.image === 'string') return data.image;
    return URL.createObjectURL(data.image);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
      <p className="text-sm text-muted-foreground">Get started with the personal information</p>
      
      <div className="flex items-center gap-4 mt-4">
        <label className="cursor-pointer">
          {data.image ? (
            <img 
              src={getImageSrc() || ''}
              alt="Profile" 
              className="w-16 h-16 rounded-full object-cover ring-2 ring-border hover:opacity-80 transition-opacity"
            />
          ) : (
            <div className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              <User className="size-10 p-2.5 border border-border rounded-full" />
              <span className="text-sm">Upload photo</span>
            </div>
          )}
          <input 
            type="file" 
            accept="image/jpeg, image/png" 
            className="hidden" 
            onChange={(e) => e.target.files?.[0] && handleChange("image", e.target.files[0])}
          />
        </label>
        
        {typeof data.image === 'object' && (
          <div className="flex items-center gap-3 pl-4">
            <Label htmlFor="remove-bg" className="text-sm text-muted-foreground">Remove Background</Label>
            <Switch 
              id="remove-bg"
              checked={removeBackground} 
              onCheckedChange={setRemoveBackground}
            />
          </div>
        )}
      </div>

      {fields.map((field) => {
        const Icon = field.icon;
        return (
          <div key={field.key} className="space-y-1 mt-5">
            <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icon className="size-4" />
              {field.label}
              {field.required && <span className="text-destructive">*</span>}
            </label>
            <input 
              type={field.type} 
              value={(data[field.key] || "")} 
              onChange={(e) => handleChange(field.key, e.target.value)} 
              className="mt-1 w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-colors text-sm" 
              placeholder={`Enter your ${field.label.toLowerCase()}`} 
              required={field.required}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfoForm;
