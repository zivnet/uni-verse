
import React, { useCallback, useState } from 'react';
import { Upload, File, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  acceptedFileTypes?: string;
}

export function FileUpload({ onFileUpload, acceptedFileTypes = '.csv,.xlsx,.xls' }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { toast } = useToast();
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileUpload = useCallback((file: File) => {
    // Reset state
    setError(null);
    setUploadedFile(null);
    setUploadProgress(0);
    
    // Validate file
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const validExtensions = acceptedFileTypes.split(',').map(ext => ext.replace('.', ''));
    
    if (fileExtension && !validExtensions.includes(fileExtension)) {
      setError(`Invalid file type. Please upload ${acceptedFileTypes} files only.`);
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: `Please upload ${acceptedFileTypes} files only.`
      });
      return;
    }
    
    // Simulate upload progress
    setIsUploading(true);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadedFile(file);
          onFileUpload(file);
          toast({
            title: "File uploaded successfully",
            description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`
          });
          return 100;
        }
        return newProgress;
      });
    }, 150);
    
  }, [acceptedFileTypes, onFileUpload, toast]);
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFileUpload(file);
    }
  }, [handleFileUpload]);
  
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      handleFileUpload(file);
    }
  }, [handleFileUpload]);

  return (
    <div className="w-full">
      <div
        className={`dropzone ${isDragging ? 'dropzone-active' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isUploading ? (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-center">
              <File className="h-10 w-10 text-muted-foreground animate-pulse" />
            </div>
            <div className="text-center">
              <p className="font-medium">Uploading file...</p>
              <p className="text-sm text-muted-foreground">{uploadProgress}%</p>
            </div>
            <Progress value={uploadProgress} className="w-full" />
          </div>
        ) : uploadedFile ? (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-datalab-green" />
            </div>
            <div className="text-center">
              <p className="font-medium">File uploaded successfully</p>
              <p className="text-sm text-muted-foreground">
                {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            </div>
            <Button variant="outline" onClick={() => setUploadedFile(null)}>
              Upload another file
            </Button>
          </div>
        ) : error ? (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-datalab-red" />
            </div>
            <div className="text-center">
              <p className="font-medium">Upload failed</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
            <Button variant="outline" onClick={() => setError(null)}>
              Try again
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center">
              <Upload className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium">Drag and drop your file here</p>
              <p className="text-sm text-muted-foreground mt-1">
                or click to browse from your computer
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: CSV, Excel
              </p>
            </div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept={acceptedFileTypes}
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Button variant="outline" className="mt-4">
                Browse Files
              </Button>
            </label>
          </>
        )}
      </div>
    </div>
  );
}
