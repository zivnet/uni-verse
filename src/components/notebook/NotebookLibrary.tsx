
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Notebook as NotebookIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NotebookItem {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

interface NotebookLibraryProps {
  notebooks: NotebookItem[];
  activeNotebookId: string | null;
  onSelectNotebook: (id: string) => void;
  onCreateNotebook: () => void;
}

export function NotebookLibrary({
  notebooks,
  activeNotebookId,
  onSelectNotebook,
  onCreateNotebook
}: NotebookLibraryProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">My Notebooks</h2>
        <Button onClick={onCreateNotebook} size="sm">
          <Plus className="mr-1 h-4 w-4" /> New Notebook
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notebooks.map((notebook) => (
          <div
            key={notebook.id}
            className={cn(
              "p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors",
              activeNotebookId === notebook.id ? "border-primary bg-secondary/30" : "border-border"
            )}
            onClick={() => onSelectNotebook(notebook.id)}
          >
            <div className="flex items-start">
              <NotebookIcon className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">{notebook.title}</h3>
                {notebook.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {notebook.description}
                  </p>
                )}
                <div className="flex items-center space-x-3 mt-2">
                  <span className="text-xs text-muted-foreground">
                    Updated: {new Date(notebook.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
