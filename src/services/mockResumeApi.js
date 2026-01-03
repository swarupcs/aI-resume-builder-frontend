export const Resume = {
  id: '',
  title: '',
  updatedAt: '',
  createdAt: '',
  isPublic: false,
  template: '',
  accentColor: '',
};

// Mock data store
let mockResumes = [
  {
    id: '1',
    title: 'Software Engineer Resume',
    updatedAt: '2024-01-15T10:30:00Z',
    createdAt: '2024-01-10T08:00:00Z',
    isPublic: false,
    template: 'modern',
    accentColor: '#3B82F6',
  },
  {
    id: '2',
    title: 'Product Manager CV',
    updatedAt: '2024-01-12T14:20:00Z',
    createdAt: '2024-01-05T09:00:00Z',
    isPublic: true,
    template: 'classic',
    accentColor: '#10B981',
  },
  {
    id: '3',
    title: 'UX Designer Portfolio',
    updatedAt: '2024-01-08T16:45:00Z',
    createdAt: '2024-01-01T11:00:00Z',
    isPublic: false,
    template: 'creative',
    accentColor: '#8B5CF6',
  },
];

// Utility delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// GET /api/users/resumes
export const fetchResumes = async () => {
  await delay(500);
  return [...mockResumes];
};

// POST /api/resumes/create
export const createResume = async (title) => {
  await delay(300);

  const newResume = {
    id: Date.now().toString(),
    title,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    isPublic: false,
    template: 'classic',
    accentColor: '#3B82F6',
  };

  mockResumes = [newResume, ...mockResumes];
  return newResume;
};

// POST /api/ai/upload-resume
export const uploadResume = async (title, _pdfText) => {
  await delay(800);

  const newResume = {
    id: Date.now().toString(),
    title,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    isPublic: false,
    template: 'classic',
    accentColor: '#3B82F6',
  };

  mockResumes = [newResume, ...mockResumes];
  return newResume;
};

// PUT /api/resumes/update
export const updateResumeTitle = async (id, title) => {
  await delay(300);

  const index = mockResumes.findIndex((r) => r.id === id);
  if (index === -1) throw new Error('Resume not found');

  mockResumes[index] = {
    ...mockResumes[index],
    title,
    updatedAt: new Date().toISOString(),
  };

  return mockResumes[index];
};

// DELETE /api/resumes/delete/:resumeId
export const deleteResume = async (id) => {
  await delay(300);
  mockResumes = mockResumes.filter((r) => r.id !== id);
};

// POST /api/resumes/duplicate
export const duplicateResume = async (id) => {
  await delay(300);

  const original = mockResumes.find((r) => r.id === id);
  if (!original) throw new Error('Resume not found');

  const newResume = {
    ...original,
    id: Date.now().toString(),
    title: `${original.title} (Copy)`,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };

  mockResumes = [newResume, ...mockResumes];
  return newResume;
};

// PUT /api/resumes/visibility
export const toggleResumeVisibility = async (id) => {
  await delay(200);

  const index = mockResumes.findIndex((r) => r.id === id);
  if (index === -1) throw new Error('Resume not found');

  mockResumes[index] = {
    ...mockResumes[index],
    isPublic: !mockResumes[index].isPublic,
    updatedAt: new Date().toISOString(),
  };

  return mockResumes[index];
};
