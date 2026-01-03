import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Upload, Loader2, FileText, Search, Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeCard } from "@/components/dashboard/ResumeCard";
import { CreateResumeModal } from "@/components/dashboard/CreateResumeModal";
import { UploadResumeModal } from "@/components/dashboard/UploadResumeModal";
import { EditResumeModal } from "@/components/dashboard/EditResumeModal";
import { DeleteConfirmDialog } from "@/components/dashboard/DeleteConfirmDialog";
import Navbar from "@/components/Navbar";
import {
  Resume,
  fetchResumes,
  createResume,
  uploadResume,
  updateResumeTitle,
  deleteResume,
  duplicateResume,
  toggleResumeVisibility,
} from "@/services/mockResumeApi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();


  // State
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("updated");
  const [viewMode, setViewMode] = useState("grid");

  // Modal states
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Selected resume for edit/delete
  const [selectedResume, setSelectedResume] = useState(null);

  // Fetch resumes on mount
  useEffect(() => {
    const loadResumes = async () => {
      try {
        const data = await fetchResumes();
        setResumes(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load resumes",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    loadResumes();
  }, [toast]);

  // Filter and sort resumes
  const filteredResumes = resumes
    .filter((resume) =>
      resume.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "created":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "updated":
        default:
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

  // Handlers
  const handleCreateResume = async (title) => {
    const newResume = await createResume(title);
    setResumes((prev) => [newResume, ...prev]);
    toast({ title: "Success", description: "Resume created successfully" });
    navigate(`/app/builder/${newResume.id}`);
  };

  const handleUploadResume = async (title, pdfText) => {
    const newResume = await uploadResume(title, pdfText);
    setResumes((prev) => [newResume, ...prev]);
    toast({ title: "Success", description: "Resume uploaded successfully" });
    navigate(`/app/builder/${newResume.id}`);
  };

  const handleEditResume = async (id, title) => {
    const updated = await updateResumeTitle(id, title);
    setResumes((prev) =>
      prev.map((r) => (r.id === id ? updated : r))
    );
    toast({ title: "Success", description: "Resume updated successfully" });
  };

  const handleDeleteResume = async () => {
    if (!selectedResume) return;

    setDeleteLoading(true);
    try {
      await deleteResume(selectedResume.id);
      setResumes((prev) => prev.filter((r) => r.id !== selectedResume.id));
      toast({ title: "Success", description: "Resume deleted successfully" });
      setDeleteDialogOpen(false);
      setSelectedResume(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete resume",
        variant: "destructive",
      });
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDuplicate = async (resume) => {
    try {
      const duplicated = await duplicateResume(resume.id);
      setResumes((prev) => [duplicated, ...prev]);
      toast({ title: "Success", description: "Resume duplicated successfully" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to duplicate resume",
        variant: "destructive",
      });
    }
  };

  const handleShare = async (resume) => {
    const shareUrl = `${window.location.origin}/preview/${resume.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: resume.title,
          text: `Check out my resume: ${resume.title}`,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      toast({ title: "Link copied", description: "Resume link copied to clipboard" });
    }
  };

  const handleDownload = (resume) => {
    // Navigate to builder and trigger print
    navigate(`/app/builder/${resume.id}?download=true`);
  };

  const handlePreview = (resume) => {
    navigate(`/preview/${resume.id}`);
  };

  const handleToggleVisibility = async (resume) => {
    try {
      const updated = await toggleResumeVisibility(resume.id);
      setResumes((prev) =>
        prev.map((r) => (r.id === resume.id ? updated : r))
      );
      toast({ 
        title: "Visibility updated", 
        description: `Resume is now ${updated.isPublic ? "public" : "private"}` 
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update visibility",
        variant: "destructive",
      });
    }
  };

  const openEditModal = (resume) => {
    setSelectedResume(resume);
    setEditModalOpen(true);
  };

  const openDeleteDialog = (resume) => {
    setSelectedResume(resume);
    setDeleteDialogOpen(true);
  };

  const handleCardClick = (resume) => {
    navigate(`/app/builder/${resume.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 z-10 mt-16">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">My Resumes</h1>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setUploadModalOpen(true)}
              className="gap-2"
            >
              <Upload className="h-4 w-4" />
              Upload Existing
            </Button>
            <Button onClick={() => setCreateModalOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Create Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Search and filters */}
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resumes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={sortBy} onValueChange={(v) => setSortBy(v)}>
            <SelectTrigger className="w-[140px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="updated">Last Updated</SelectItem>
              <SelectItem value="created">Date Created</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted"}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : resumes.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No resumes yet
            </h2>
            <p className="text-muted-foreground mb-6">
              Create your first resume or upload an existing one to get started.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => setUploadModalOpen(true)}
                className="gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload Existing
              </Button>
              <Button onClick={() => setCreateModalOpen(true)} className="gap-2">
                <Plus className="h-4 w-4" />
                Create Resume
              </Button>
            </div>
          </div>
        ) : filteredResumes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No resumes found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "flex flex-col gap-4"
          }>
            {filteredResumes.map((resume) => (
              <ResumeCard
                key={resume.id}
                resume={resume}
                onEdit={openEditModal}
                onDelete={openDeleteDialog}
                onClick={handleCardClick}
                onDuplicate={handleDuplicate}
                onShare={handleShare}
                onDownload={handleDownload}
                onPreview={handlePreview}
                onToggleVisibility={handleToggleVisibility}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modals */}
      <CreateResumeModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateResume}
      />

      <UploadResumeModal
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onSubmit={handleUploadResume}
      />

      <EditResumeModal
        open={editModalOpen}
        resume={selectedResume}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedResume(null);
        }}
        onSubmit={handleEditResume}
      />

      <DeleteConfirmDialog
        open={deleteDialogOpen}
        resume={selectedResume}
        loading={deleteLoading}
        onClose={() => {
          setDeleteDialogOpen(false);
          setSelectedResume(null);
        }}
        onConfirm={handleDeleteResume}
      />
    </div>
  );
};

export default Dashboard;
