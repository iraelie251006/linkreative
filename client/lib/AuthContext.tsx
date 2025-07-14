import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "./mockData";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (userData: Omit<User, "id" | "joinedDate">) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (localStorage simulation)
    const savedUser = localStorage.getItem("hexaHypeUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock authentication - in real app, this would call an API
    if (email === "demo@hexahype.com" && password === "demo123") {
      const mockUser: User = {
        id: "demo-user",
        firstName: "Demo",
        lastName: "User",
        email: "demo@hexahype.com",
        phone: "+250 788 000 000",
        location: "Kigali",
        joinedDate: new Date().toISOString().split("T")[0],
      };

      setUser(mockUser);
      localStorage.setItem("hexaHypeUser", JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const signup = async (
    userData: Omit<User, "id" | "joinedDate">,
  ): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newUser: User = {
      ...userData,
      id: `user-${Date.now()}`,
      joinedDate: new Date().toISOString().split("T")[0],
    };

    setUser(newUser);
    localStorage.setItem("hexaHypeUser", JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hexaHypeUser");
  };

  const value = {
    user,
    login,
    logout,
    signup,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
