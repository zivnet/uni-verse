
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

// Pages
import Index from "./pages/Index";
import CoursesPage from "./pages/CoursesPage";
import CalendarPage from "./pages/CalendarPage";
import ForumPage from "./pages/ForumPage";
import ExplorePage from "./pages/ExplorePage";
import NovaPage from "./pages/NovaPage";
import ProgressPage from "./pages/ProgressPage";
import SettingsPage from "./pages/SettingsPage";
import AuthPage from "./pages/AuthPage";
import AssignmentPage from "./pages/AssignmentPage";
import RecordingsPage from "./pages/RecordingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/courses/*" element={<CoursesPage />} />
            <Route path="/assignments" element={<AssignmentPage />} />
            <Route path="/recordings" element={<RecordingsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/nova" element={<NovaPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
