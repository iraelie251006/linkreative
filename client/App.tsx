import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./lib/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BrowseTalent from "./pages/BrowseTalent";
import Calendar from "./pages/Calendar";
import JoinTalent from "./pages/JoinTalent";
import Dashboard from "./pages/Dashboard";
import TalentProfile from "./pages/TalentProfile";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="hexa-hype-theme">
      <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/browse" element={<BrowseTalent />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/join-talent" element={<JoinTalent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/talent/:id" element={<TalentProfile />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
    </ThemeProvider>
    
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
