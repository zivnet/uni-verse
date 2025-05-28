
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, User } from "lucide-react";

export default function AssignmentPage() {
  // Mock assignment data
  const assignments = [
    {
      id: 1,
      title: "Data Structures Final Project",
      course: "CS 201",
      dueDate: "2024-06-15",
      status: "pending",
      description: "Implement a binary search tree with full CRUD operations",
      instructor: "Dr. Smith"
    },
    {
      id: 2,
      title: "Research Paper on Machine Learning",
      course: "CS 450",
      dueDate: "2024-06-20",
      status: "in-progress",
      description: "Write a 10-page research paper on recent advances in neural networks",
      instructor: "Prof. Johnson"
    },
    {
      id: 3,
      title: "Database Design Assignment",
      course: "CS 340",
      dueDate: "2024-06-10",
      status: "completed",
      description: "Design and implement a normalized database schema for an e-commerce system",
      instructor: "Dr. Williams"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "pending":
        return "Pending";
      default:
        return "Unknown";
    }
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
          <p className="text-muted-foreground">
            Manage and track your course assignments
          </p>
        </div>

        <div className="grid gap-6">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{assignment.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      {assignment.course}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(assignment.status)}>
                    {getStatusText(assignment.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {assignment.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {assignment.instructor}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {assignment.status !== "completed" && (
                    <Button size="sm">
                      {assignment.status === "pending" ? "Start Assignment" : "Continue"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
