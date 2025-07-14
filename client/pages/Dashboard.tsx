import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Calendar,
  Star,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Clock,
  MapPin,
  Plus,
  ArrowRight,
} from "lucide-react";
import { mockBookings, mockTalents } from "@/lib/mockData";
import { useAuth } from "@/lib/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Dashboard Access
            </h1>
            <p className="text-muted-foreground mb-6">
              Please log in to view your dashboard.
            </p>
            <Button asChild>
              <a href="/login">Login to Continue</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Filter bookings by user
  const userBookings = mockBookings.filter(
    (booking) => booking.clientId === user.id,
  );

  const upcomingBookings = userBookings.filter((booking) => {
    const eventDate = new Date(booking.eventDate);
    const today = new Date();
    return eventDate >= today && booking.status !== "cancelled";
  });

  const pendingBookings = userBookings.filter(
    (booking) => booking.status === "pending",
  );

  const recentBookings = userBookings.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-RW", {
      month: "short",
      day: "numeric",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalSpent = userBookings.reduce(
    (sum, booking) => sum + booking.totalAmount,
    0,
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Welcome back, {user.firstName}! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's an overview of your Linkreative activity
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {upcomingBookings.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Upcoming Events
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {pendingBookings.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Pending Requests
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {formatPrice(totalSpent)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Spent
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {userBookings.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Bookings
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>
                      Your latest booking activity
                    </CardDescription>
                  </div>
                  <Link to="/calendar">
                    <Button variant="outline" size="sm">
                      View All
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {recentBookings.length > 0 ? (
                  <div className="space-y-4">
                    {recentBookings.map((booking) => {
                      const talent = mockTalents.find(
                        (t) => t.id === booking.talentId,
                      );
                      return (
                        <div
                          key={booking.id}
                          className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Avatar>
                            <AvatarFallback>
                              {talent?.artistName
                                .split(" ")
                                .map((n) => n[0])
                                .join("") || "?"}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium truncate">
                              {talent?.artistName || "Unknown Artist"}
                            </h4>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>{booking.eventType}</span>
                              <span>•</span>
                              <span>{formatDate(booking.eventDate)}</span>
                              <span>•</span>
                              <Badge
                                variant={
                                  booking.status === "confirmed"
                                    ? "default"
                                    : booking.status === "pending"
                                      ? "secondary"
                                      : "destructive"
                                }
                                className="text-xs"
                              >
                                {booking.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {formatPrice(booking.totalAmount)}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium mb-2">No bookings yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Start exploring our amazing talent
                    </p>
                    <Link to="/browse">
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Browse Talent
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Profile */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Manage your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>
                      {`${user.firstName[0]}${user.lastName[0]}`}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">
                      {user.firstName} {user.lastName}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <Link to="/profile">
                  <Button variant="outline" className="w-full">
                    <User className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/browse">
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="w-4 h-4 mr-2" />
                    Browse Talent
                  </Button>
                </Link>
                <Link to="/calendar">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Calendar
                  </Button>
                </Link>
                <Link to="/join-talent">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Become Artist
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  disabled
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Messages (Soon)
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      Book artists in advance for better availability and rates
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      Check artist portfolios and reviews before booking
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      Leave reviews to help other clients and support artists
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
