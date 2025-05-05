
import React, { useState } from 'react';
import { ExternalLink, Database, Table, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

interface ConnectorConfig {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'password' | 'url';
    placeholder: string;
    required: boolean;
  }[];
}

const connectors: ConnectorConfig[] = [
  {
    name: 'Google Sheets',
    description: 'Import data directly from Google Sheets',
    icon: Table,
    color: 'bg-green-500/20 text-green-500',
    fields: [
      {
        name: 'url',
        label: 'Sheet URL',
        type: 'url',
        placeholder: 'https://docs.google.com/spreadsheets/d/...',
        required: true,
      },
      {
        name: 'sheetName',
        label: 'Sheet Name (optional)',
        type: 'text',
        placeholder: 'Sheet1',
        required: false,
      },
    ],
  },
  {
    name: 'Alpha Vantage API',
    description: 'Financial market data from Alpha Vantage',
    icon: ExternalLink,
    color: 'bg-blue-500/20 text-blue-500',
    fields: [
      {
        name: 'apiKey',
        label: 'API Key',
        type: 'password',
        placeholder: 'Your Alpha Vantage API key',
        required: true,
      },
      {
        name: 'symbol',
        label: 'Stock Symbol',
        type: 'text',
        placeholder: 'AAPL, MSFT, etc.',
        required: true,
      },
      {
        name: 'function',
        label: 'Function',
        type: 'text',
        placeholder: 'TIME_SERIES_DAILY',
        required: true,
      },
    ],
  },
  {
    name: 'Notion',
    description: 'Import data from Notion databases',
    icon: Database,
    color: 'bg-gray-500/20 text-gray-500',
    fields: [
      {
        name: 'apiKey',
        label: 'Notion API Key',
        type: 'password',
        placeholder: 'Your Notion integration token',
        required: true,
      },
      {
        name: 'databaseId',
        label: 'Database ID',
        type: 'text',
        placeholder: '8e5d...',
        required: true,
      },
    ],
  },
  {
    name: 'PitchBook',
    description: 'Access venture capital and private equity data',
    icon: ExternalLink,
    color: 'bg-purple-500/20 text-purple-500',
    fields: [
      {
        name: 'apiKey',
        label: 'PitchBook API Key',
        type: 'password',
        placeholder: 'Your PitchBook API key',
        required: true,
      },
      {
        name: 'endpoint',
        label: 'Endpoint',
        type: 'text',
        placeholder: 'companies, investors, deals, etc.',
        required: true,
      },
    ],
  },
];

export function DataConnectors() {
  const [selectedConnector, setSelectedConnector] = useState<ConnectorConfig | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleConnectorSelect = (connector: ConnectorConfig) => {
    setSelectedConnector(connector);
    setFormValues({});
    setIsDialogOpen(true);
  };

  const handleConnectClick = () => {
    // Validate required fields
    const missingFields = selectedConnector?.fields
      .filter(field => field.required && !formValues[field.name])
      .map(field => field.label);

    if (missingFields && missingFields.length > 0) {
      toast({
        variant: "destructive",
        title: "Missing required fields",
        description: `Please fill in: ${missingFields.join(', ')}`
      });
      return;
    }

    // Simulate connection
    toast({
      title: `Connecting to ${selectedConnector?.name}`,
      description: "Please wait while we establish connection...",
    });

    // Close dialog and show success after delay
    setTimeout(() => {
      setIsDialogOpen(false);
      toast({
        title: "Connection successful",
        description: `Connected to ${selectedConnector?.name}`,
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="api" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="api">API Connectors</TabsTrigger>
          <TabsTrigger value="url">URL Import</TabsTrigger>
        </TabsList>
        
        <TabsContent value="api" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {connectors.map((connector) => (
              <Card key={connector.name} className="card-gradient">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-md font-medium">{connector.name}</CardTitle>
                  <div className={`rounded-full p-2 ${connector.color}`}>
                    <connector.icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{connector.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button size="sm" onClick={() => handleConnectorSelect(connector)}>
                    Configure
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="url">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Import Data from URL</CardTitle>
              <CardDescription>
                Import data from a direct URL to a CSV, Excel, or JSON file.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url">Data URL</Label>
                <Input 
                  id="url" 
                  placeholder="https://example.com/data.csv" 
                  type="url"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="has-header" className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" id="has-header" className="rounded border-gray-400" />
                  <span>File has headers</span>
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                Import Data <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connect to {selectedConnector?.name}</DialogTitle>
            <DialogDescription>
              Enter your credentials to connect to {selectedConnector?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedConnector?.fields.map((field) => (
              <div className="grid grid-cols-4 items-center gap-4" key={field.name}>
                <Label htmlFor={field.name} className="text-right">
                  {field.label}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="col-span-3"
                  value={formValues[field.name] || ''}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConnectClick}>
              Connect
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
