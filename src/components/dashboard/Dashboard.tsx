import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CalendarCheck, MessageSquare, Trophy, Bot, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

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

  const upcomingDeadlines = [
    { id: '1', title: 'Database Design Project', course: 'Database Systems', dueDate: '2025-05-25', status: 'Due Soon' },
    { id: '2', title: 'Midterm Exam', course: 'Operating Systems', dueDate: '2025-05-28', status: 'Upcoming' },
    { id: '3', title: 'Team Presentation', course: 'Software Engineering', dueDate: '2025-05-30', status: 'In Progress' },
  ];

  const recentActivity = [
    { id: '1', type: 'forum', message: 'New reply to your post in Database Systems', time: '2 hours ago' },
    { id: '2', type: 'achievement', message: 'Earned "Quick Learner" badge', time: '5 hours ago' },
    { id: '3', type: 'grade', message: 'Received 95% on Algorithm Analysis Quiz', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6</div>
            <p className="text-xs text-blue-600/80 dark:text-blue-400/80">Spring Semester 2025</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Trophy className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">85%</div>
            <p className="text-xs text-green-600/80 dark:text-green-400/80">+5% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Forum Activity</CardTitle>
            <MessageSquare className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">28</div>
            <p className="text-xs text-purple-600/80 dark:text-purple-400/80">Active discussions</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/50 dark:to-orange-800/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Assistant Usage</CardTitle>
            <Bot className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">45</div>
            <p className="text-xs text-orange-600/80 dark:text-orange-400/80">Questions answered today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Tasks and assignments due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map(deadline => (
                <div key={deadline.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{deadline.title}</p>
                    <p className="text-sm text-muted-foreground">{deadline.course}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-muted-foreground">Due {new Date(deadline.dueDate).toLocaleDateString()}</p>
                    <Badge variant={
                      deadline.status === 'Due Soon' ? 'destructive' : 
                      deadline.status === 'In Progress' ? 'default' : 
                      'secondary'
                    }>
                      {deadline.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Current semester progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>XP Level 12</span>
                  <span>2400/3000</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Course Completion</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Assignment Score</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>

              <Button variant="outline" className="w-full mt-4">View Detailed Progress</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest interactions and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-center">
                  <div className="mr-4">
                    {activity.type === 'forum' && <MessageSquare className="h-8 w-8 text-purple-500" />}
                    {activity.type === 'achievement' && <Trophy className="h-8 w-8 text-yellow-500" />}
                    {activity.type === 'grade' && <BookOpen className="h-8 w-8 text-green-500" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">View All Activity</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
            <CardDescription>Upcoming classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <CalendarCheck className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Database Systems</p>
                  <p className="text-xs text-muted-foreground">Today, 2:00 PM</p>
                </div>
                <Badge>Online</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <CalendarCheck className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Operating Systems</p>
                  <p className="text-xs text-muted-foreground">Today, 4:00 PM</p>
                </div>
                <Badge variant="outline">Room 302</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <CalendarCheck className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Software Engineering</p>
                  <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                </div>
                <Badge>Online</Badge>
              </div>
              <Button variant="outline" className="w-full mt-2">View Full Schedule</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
