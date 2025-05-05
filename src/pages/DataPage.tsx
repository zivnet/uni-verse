
import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { FileUpload } from "@/components/data/FileUpload";
import { DataConnectors } from "@/components/data/DataConnectors";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Table, FileText, Filter } from "lucide-react";

const DataPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    console.log("File uploaded:", file.name);
  };

  // Sample datasets
  const datasets = [
    { id: '1', name: 'Financial Data 2023', type: 'CSV', size: '2.4 MB', rows: 5280, columns: 24, lastModified: '2023-04-28' },
    { id: '2', name: 'ESG Metrics', type: 'Excel', size: '1.1 MB', rows: 3450, columns: 18, lastModified: '2023-04-25' },
    { id: '3', name: 'Venture Capital Deals', type: 'API', size: '4.5 MB', rows: 8900, columns: 32, lastModified: '2023-04-20' },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Data Management</h1>
              <Button>New Dataset</Button>
            </div>

            <Tabs defaultValue="datasets">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="datasets">Datasets</TabsTrigger>
                <TabsTrigger value="import">Import Data</TabsTrigger>
                <TabsTrigger value="connect">Connect Sources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="datasets" className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Input placeholder="Search datasets..." className="max-w-sm" />
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {datasets.map((dataset) => (
                    <Card key={dataset.id} className="card-gradient">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {dataset.type === 'CSV' || dataset.type === 'Excel' ? (
                              <FileText className="h-4 w-4 mr-2 text-datalab-blue" />
                            ) : (
                              <Table className="h-4 w-4 mr-2 text-datalab-green" />
                            )}
                            <CardTitle className="text-md">{dataset.name}</CardTitle>
                          </div>
                          <div className="text-xs bg-secondary px-2 py-0.5 rounded-md">
                            {dataset.type}
                          </div>
                        </div>
                        <CardDescription>
                          {dataset.rows.toLocaleString()} rows × {dataset.columns} columns
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Size:</span>
                            <span>{dataset.size}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Last Modified:</span>
                            <span>{new Date(dataset.lastModified).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between mt-4">
                          <Button variant="outline" size="sm">Preview</Button>
                          <Button size="sm">Query</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="import" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Data File</CardTitle>
                    <CardDescription>
                      Upload CSV, Excel files directly from your computer
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FileUpload onFileUpload={handleFileUpload} />
                    
                    {uploadedFile && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="dataset-name">Dataset Name</Label>
                          <Input id="dataset-name" placeholder={uploadedFile.name.split('.')[0]} />
                        </div>
                        
                        <div>
                          <Label htmlFor="dataset-description">Description (optional)</Label>
                          <Input id="dataset-description" placeholder="Enter a description for this dataset" />
                        </div>
                        
                        <div className="flex space-x-2">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="has-header" className="rounded border-gray-400" defaultChecked />
                            <Label htmlFor="has-header">File has headers</Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="infer-types" className="rounded border-gray-400" defaultChecked />
                            <Label htmlFor="infer-types">Infer column types</Label>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Cancel</Button>
                          <Button>Import Data</Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="connect" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Connect External Data Sources</CardTitle>
                    <CardDescription>
                      Connect to APIs and external data providers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataConnectors />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DataPage;
