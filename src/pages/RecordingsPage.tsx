
import React, { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { headphones, music2, podcast, video } from "lucide-react";

export default function RecordingsPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  // Mock data for courses
  const courses = [
    { id: "cs201", name: "Data Structures", code: "CS 201" },
    { id: "cs450", name: "Machine Learning", code: "CS 450" },
    { id: "cs340", name: "Database Systems", code: "CS 340" },
    { id: "cs301", name: "Web Development", code: "CS 301" }
  ];

  // Mock data for recordings and podcasts
  const mediaContent = {
    "cs201": [
      {
        id: 1,
        title: "Introduction to Binary Trees",
        type: "recording",
        duration: "45:30",
        date: "2024-05-20",
        description: "Comprehensive overview of binary tree structures and operations"
      },
      {
        id: 2,
        title: "Data Structures Deep Dive Podcast",
        type: "podcast",
        duration: "32:15",
        date: "2024-05-18",
        description: "Discussion on advanced data structure applications in real-world scenarios"
      },
      {
        id: 3,
        title: "Hash Tables and Hash Functions",
        type: "recording",
        duration: "38:20",
        date: "2024-05-15",
        description: "Understanding hash tables, collision resolution, and performance analysis"
      }
    ],
    "cs450": [
      {
        id: 4,
        title: "Neural Networks Fundamentals",
        type: "recording",
        duration: "52:45",
        date: "2024-05-22",
        description: "Introduction to artificial neural networks and backpropagation"
      },
      {
        id: 5,
        title: "ML Research Trends Podcast",
        type: "podcast",
        duration: "28:10",
        date: "2024-05-19",
        description: "Latest trends and breakthroughs in machine learning research"
      }
    ],
    "cs340": [
      {
        id: 6,
        title: "SQL Query Optimization",
        type: "recording",
        duration: "41:30",
        date: "2024-05-21",
        description: "Advanced techniques for optimizing database queries and performance"
      },
      {
        id: 7,
        title: "Database Design Podcast",
        type: "podcast",
        duration: "35:45",
        date: "2024-05-17",
        description: "Best practices in database schema design and normalization"
      }
    ],
    "cs301": [
      {
        id: 8,
        title: "React Hooks Deep Dive",
        type: "recording",
        duration: "48:15",
        date: "2024-05-23",
        description: "Advanced React hooks and custom hook development"
      },
      {
        id: 9,
        title: "Frontend Trends Podcast",
        type: "podcast",
        duration: "30:25",
        date: "2024-05-16",
        description: "Current trends and future of frontend web development"
      }
    ]
  };

  const getMediaIcon = (type: string) => {
    if (type === "recording") {
      return <video className="h-5 w-5" />;
    } else {
      return <podcast className="h-5 w-5" />;
    }
  };

  const getMediaBadgeColor = (type: string) => {
    return type === "recording" 
      ? "bg-blue-100 text-blue-800" 
      : "bg-purple-100 text-purple-800";
  };

  const selectedCourseData = selectedCourse ? mediaContent[selectedCourse as keyof typeof mediaContent] || [] : [];

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recordings & Podcasts</h1>
          <p className="text-muted-foreground">
            Access course recordings and educational podcasts
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <headphones className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Select a course:</span>
            </div>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Choose a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.code} - {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {!selectedCourse && (
            <Card className="text-center py-12">
              <CardContent>
                <music2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Please select a course to view available recordings and podcasts
                </p>
              </CardContent>
            </Card>
          )}

          {selectedCourse && selectedCourseData.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground">
                  No recordings or podcasts available for this course yet.
                </p>
              </CardContent>
            </Card>
          )}

          {selectedCourse && selectedCourseData.length > 0 && (
            <div className="grid gap-4">
              {selectedCourseData.map((media) => (
                <Card key={media.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl flex items-center gap-2">
                          {getMediaIcon(media.type)}
                          {media.title}
                        </CardTitle>
                        <CardDescription>
                          {media.description}
                        </CardDescription>
                      </div>
                      <Badge className={getMediaBadgeColor(media.type)}>
                        {media.type === "recording" ? "Recording" : "Podcast"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Duration: {media.duration}</span>
                      <span>•</span>
                      <span>Date: {new Date(media.date).toLocaleDateString()}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm">
                        Play
                      </Button>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
