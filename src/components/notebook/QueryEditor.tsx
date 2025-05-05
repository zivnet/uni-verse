
import React, { useState } from 'react';
import { Play, Download, Copy, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface QueryEditorProps {
  defaultValue?: string;
  language?: 'sql' | 'python';
  onExecute?: (code: string) => void;
}

export function QueryEditor({ 
  defaultValue = 'SELECT * FROM dataset LIMIT 10;', 
  language = 'sql',
  onExecute 
}: QueryEditorProps) {
  const [code, setCode] = useState(defaultValue);
  const [activeTab, setActiveTab] = useState<'sql' | 'python'>(language);
  const { toast } = useToast();
  
  const handleRun = () => {
    if (onExecute) {
      onExecute(code);
    } else {
      toast({
        title: "Executed Query",
        description: `${activeTab.toUpperCase()} query executed successfully`,
      });
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The query has been copied to your clipboard",
    });
  };

  const handleTabChange = (tab: string) => {
    if (tab === 'sql') {
      setActiveTab('sql');
      setCode('SELECT * FROM dataset LIMIT 10;');
    } else if (tab === 'python') {
      setActiveTab('python');
      setCode('import pandas as pd\n\ndf = pd.read_csv("dataset.csv")\ndf.head()');
    }
  };

  return (
    <div className="border rounded-md bg-background">
      <div className="flex items-center justify-between border-b p-2">
        <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="sql">SQL</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={handleCopy}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
                            
              <Button onClick={handleRun} size="sm" className="flex items-center">
                <Play className="mr-2 h-4 w-4" /> Run
              </Button>
            </div>
          </div>

          <TabsContent value="sql" className="mt-0">
            <div className="relative mt-2">
              <textarea
                className="editor-container w-full h-40 p-4 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter SQL query"
                spellCheck={false}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="python" className="mt-0">
            <div className="relative mt-2">
              <textarea
                className="editor-container w-full h-40 p-4 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter Python code"
                spellCheck={false}
              />
            </div>
            
            <div className="bg-secondary/30 px-3 py-2 text-xs rounded-b-md flex items-center">
              <Info className="h-3 w-3 mr-1" />
              <span>Python execution is powered by Pyodide (browser-based Python)</span>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
