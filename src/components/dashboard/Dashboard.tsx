
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Database, BarChart2, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Dashboard() {
  // Mock data
  const recentDatasets = [
    { id: '1', name: 'Financial Data 2023', size: '2.4 MB', rows: 5280, date: '2023-04-28' },
    { id: '2', name: 'ESG Metrics', size: '1.1 MB', rows: 3450, date: '2023-04-25' },
    { id: '3', name: 'Venture Capital Deals', size: '4.5 MB', rows: 8900, date: '2023-04-20' },
  ];

  const recentAnalyses = [
    { id: '1', name: 'Financial Performance Analysis', date: '2023-04-28', status: 'Completed' },
    { id: '2', name: 'Market Comparison', date: '2023-04-25', status: 'In Progress' },
    { id: '3', name: 'ESG Impact Study', date: '2023-04-22', status: 'Scheduled' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Datasets</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 since last month</p>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Notebooks</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+3 since last month</p>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visualizations</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5 since last month</p>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Jobs</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">+1 since last month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 card-gradient">
          <CardHeader>
            <CardTitle>Recent Datasets</CardTitle>
            <CardDescription>Recently added or modified datasets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {recentDatasets.map(dataset => (
                <div key={dataset.id} className="flex items-center">
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">{dataset.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {dataset.rows.toLocaleString()} rows • {dataset.size}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(dataset.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full">View All Datasets</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Storage Usage</p>
                  <p className="text-sm">45%</p>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-datalab-blue rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">API Quota</p>
                  <p className="text-sm">72%</p>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-datalab-yellow rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="rounded-md bg-datalab-orange/20 p-3">
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-datalab-orange" />
                    <span className="ml-2 text-sm font-medium text-datalab-orange">API quota nearing limit</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    72% of monthly API quota used. Reset in 8 days.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 grid-cols-1">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Recent Analyses</CardTitle>
            <CardDescription>Your recent analysis notebooks and queries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {recentAnalyses.map(analysis => (
                <div key={analysis.id} className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      <p className="text-sm font-medium leading-none">{analysis.name}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Last modified on {new Date(analysis.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className={`w-2 h-2 rounded-full mr-2 ${
                        analysis.status === 'Completed' ? 'bg-datalab-green' : 
                        analysis.status === 'In Progress' ? 'bg-datalab-blue' : 
                        'bg-datalab-yellow'
                      }`}
                    />
                    <span className="text-sm">{analysis.status}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end space-x-2">
              <Button variant="outline">View All</Button>
              <Button>Create New Analysis</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
