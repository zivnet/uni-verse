
import React, { useState } from 'react';
import { Play, Plus, Trash, ChevronDown, ChevronRight, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QueryEditor } from './QueryEditor';
import { cn } from '@/lib/utils';

type CellType = 'code' | 'markdown' | 'sql';

interface NotebookCell {
  id: string;
  type: CellType;
  content: string;
  output?: string | null;
  isExecuting?: boolean;
  isCollapsed?: boolean;
}

export function Notebook() {
  const [cells, setCells] = useState<NotebookCell[]>([
    {
      id: '1',
      type: 'markdown',
      content: '# Data Analysis Notebook\n\nUse this notebook to analyze your data using SQL and Python.',
      output: null,
    },
    {
      id: '2',
      type: 'code',
      content: 'import pandas as pd\nimport numpy as np\n\n# Load the dataset\ndf = pd.read_csv("sample_data.csv")\n\n# Display the first few rows\ndf.head()',
      output: 'DataFrame with 5 rows and 3 columns',
      isCollapsed: false,
    },
    {
      id: '3',
      type: 'sql',
      content: 'SELECT * FROM sample_data LIMIT 5;',
      output: 'Query executed successfully. 5 rows returned.',
      isCollapsed: false,
    }
  ]);
  
  const [activeCell, setActiveCell] = useState<string | null>(null);
  
  const addCell = (type: CellType, afterId?: string) => {
    const newCell: NotebookCell = {
      id: Date.now().toString(),
      type,
      content: type === 'markdown' ? '# New Section' : 
               type === 'sql' ? 'SELECT * FROM dataset LIMIT 10;' : 
               'import pandas as pd\n\n# Your code here',
      output: null,
    };
    
    if (!afterId) {
      setCells([...cells, newCell]);
      return;
    }
    
    const index = cells.findIndex(cell => cell.id === afterId);
    if (index !== -1) {
      const newCells = [...cells];
      newCells.splice(index + 1, 0, newCell);
      setCells(newCells);
    }
  };
  
  const deleteCell = (id: string) => {
    setCells(cells.filter(cell => cell.id !== id));
  };
  
  const updateCellContent = (id: string, content: string) => {
    setCells(cells.map(cell => 
      cell.id === id ? { ...cell, content } : cell
    ));
  };
  
  const executeCell = (id: string) => {
    setCells(cells.map(cell => {
      if (cell.id === id) {
        return { 
          ...cell, 
          isExecuting: true 
        };
      }
      return cell;
    }));
    
    // Simulate execution delay
    setTimeout(() => {
      setCells(cells.map(cell => {
        if (cell.id === id) {
          let output;
          
          if (cell.type === 'code') {
            output = 'Code executed successfully. Result: Sample output';
          } else if (cell.type === 'sql') {
            output = 'Query executed successfully. 10 rows returned.';
          } else {
            output = null;
          }
          
          return { 
            ...cell, 
            isExecuting: false,
            output 
          };
        }
        return cell;
      }));
    }, 1000);
  };
  
  const toggleCollapse = (id: string) => {
    setCells(cells.map(cell => 
      cell.id === id ? { ...cell, isCollapsed: !cell.isCollapsed } : cell
    ));
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Untitled Notebook</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Play className="mr-2 h-4 w-4" />
            Run All
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {cells.map((cell) => (
          <div 
            key={cell.id} 
            className={cn(
              "notebook-cell", 
              activeCell === cell.id && "notebook-cell-active"
            )}
            onClick={() => setActiveCell(cell.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => toggleCollapse(cell.id)}
                >
                  {cell.isCollapsed ? (
                    <ChevronRight className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                <span className="text-xs text-muted-foreground">
                  {cell.type === 'code' ? 'Python' : cell.type.charAt(0).toUpperCase() + cell.type.slice(1)}
                </span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-foreground"
                  onClick={() => executeCell(cell.id)}
                  disabled={cell.isExecuting || cell.type === 'markdown'}
                >
                  <Play className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-destructive"
                  onClick={() => deleteCell(cell.id)}
                >
                  <Trash className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            {!cell.isCollapsed && (
              <>
                {cell.type === 'markdown' ? (
                  <div className="p-3 border border-border rounded-md">
                    <textarea
                      className="w-full bg-transparent resize-none focus:outline-none min-h-[100px]"
                      value={cell.content}
                      onChange={(e) => updateCellContent(cell.id, e.target.value)}
                      placeholder="Enter markdown content"
                    />
                  </div>
                ) : cell.type === 'sql' ? (
                  <QueryEditor
                    defaultValue={cell.content}
                    language="sql"
                    onExecute={(code) => {
                      updateCellContent(cell.id, code);
                      executeCell(cell.id);
                    }}
                  />
                ) : (
                  <QueryEditor
                    defaultValue={cell.content}
                    language="python"
                    onExecute={(code) => {
                      updateCellContent(cell.id, code);
                      executeCell(cell.id);
                    }}
                  />
                )}
                
                {cell.output && (
                  <div className="notebook-cell-output">
                    <pre>{cell.output}</pre>
                  </div>
                )}
              </>
            )}

            <div className="flex justify-center mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => addCell('code', cell.id)}
              >
                <Plus className="h-3 w-3 mr-1" /> Add Cell
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => addCell('markdown')}>
            Add Markdown
          </Button>
          <Button variant="outline" onClick={() => addCell('code')}>
            Add Python
          </Button>
          <Button variant="outline" onClick={() => addCell('sql')}>
            Add SQL
          </Button>
        </div>
      </div>
    </div>
  );
}
