
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Notebook } from "@/components/notebook/Notebook";
import { NotebookLibrary, NotebookItem } from "@/components/notebook/NotebookLibrary";

const NotebookPage = () => {
  // Sample notebook data
  const [notebooks, setNotebooks] = useState<NotebookItem[]>([
    {
      id: "1",
      title: "Data Analysis Notebook",
      description: "Analyze your data using SQL and Python in an interactive notebook",
      createdAt: "2025-05-01T10:30:00Z",
      updatedAt: "2025-05-10T14:20:00Z"
    },
    {
      id: "2",
      title: "Financial Report",
      description: "Monthly financial analysis with trend visualization",
      createdAt: "2025-04-15T09:45:00Z",
      updatedAt: "2025-05-12T11:35:00Z"
    },
    {
      id: "3",
      title: "ESG Metrics Dashboard",
      description: "Environmental, Social, and Governance metrics calculation",
      createdAt: "2025-03-20T13:15:00Z",
      updatedAt: "2025-05-05T16:40:00Z"
    }
  ]);

  const [activeNotebookId, setActiveNotebookId] = useState<string | null>(null);
  const [showLibrary, setShowLibrary] = useState(true);

  const handleSelectNotebook = (id: string) => {
    setActiveNotebookId(id);
    setShowLibrary(false);
  };

  const handleCreateNotebook = () => {
    const newNotebook: NotebookItem = {
      id: `notebook-${Date.now()}`,
      title: "New Notebook",
      description: "A blank notebook to start your analysis",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setNotebooks([...notebooks, newNotebook]);
    setActiveNotebookId(newNotebook.id);
    setShowLibrary(false);
  };

  const handleBackToLibrary = () => {
    setShowLibrary(true);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6">
            {showLibrary ? (
              <NotebookLibrary 
                notebooks={notebooks}
                activeNotebookId={activeNotebookId}
                onSelectNotebook={handleSelectNotebook}
                onCreateNotebook={handleCreateNotebook}
              />
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <button 
                      className="text-sm text-muted-foreground mb-2 hover:text-primary flex items-center"
                      onClick={handleBackToLibrary}
                    >
                      ← Back to notebooks
                    </button>
                    <h1 className="text-2xl font-bold">
                      {notebooks.find(n => n.id === activeNotebookId)?.title || "Untitled Notebook"}
                    </h1>
                    <p className="text-muted-foreground">
                      {notebooks.find(n => n.id === activeNotebookId)?.description || 
                        "Analyze your data using SQL and Python in an interactive notebook"}
                    </p>
                  </div>
                </div>
                
                <Notebook />
              </>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default NotebookPage;
