
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Notebook } from "@/components/notebook/Notebook";

const NotebookPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Data Analysis Notebook</h1>
              <p className="text-muted-foreground">
                Analyze your data using SQL and Python in an interactive notebook
              </p>
            </div>
            
            <Notebook />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default NotebookPage;
