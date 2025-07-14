import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar as CalendarIcon,
  Clock,
  RefreshCw,
  MapPin,
  DollarSign,
  Filter,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { mockBookings, mockTalents } from "@/lib/mockData";
import { useAuth } from "@/lib/AuthContext";

export default function Calendar() {
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState("upcoming");

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <CalendarIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Calendar Access
            </h1>
            <p className="text-muted-foreground mb-6">
              Please log in to view and manage your bookings.
            </p>
            <Button asChild>
              <a href="/login">Login to Continue</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-RW", {
      weekday: "long",
      year: "numeric",
      month: "long",
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "pending":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default";
      case "pending":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  // Filter bookings by user
  const userBookings = mockBookings.filter(
    (booking) => booking.clientId === user.id,
  );

  const upcomingBookings = userBookings.filter((booking) => {
    const eventDate = new Date(booking.eventDate);
    const today = new Date();
    return eventDate >= today && booking.status !== "cancelled";
  });

  const pastBookings = userBookings.filter((booking) => {
    const eventDate = new Date(booking.eventDate);
    const today = new Date();
    return eventDate < today || booking.status === "completed";
  });

  const pendingBookings = userBookings.filter(
    (booking) => booking.status === "pending",
  );

  const BookingCard = ({ booking }: { booking: any }) => {
    const talent = mockTalents.find((t) => t.id === booking.talentId);

    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>
                  {talent?.artistName
                    .split(" ")
                    .map((n) => n[0])
                    .join("") || "?"}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">
                  {talent?.artistName || "Unknown Artist"}
                </CardTitle>
                <CardDescription>{booking.eventType}</CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(booking.status)}
              <Badge variant={getStatusVariant(booking.status) as any}>
                {booking.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{booking.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span>{formatDate(booking.eventDate)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>
                {booking.eventTime} ({booking.duration}h)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{booking.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <span>{formatPrice(booking.totalAmount)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <div className="text-sm text-muted-foreground">
              Booked on {new Date(booking.createdAt).toLocaleDateString()}
            </div>
            <div className="space-x-2">
              {booking.status === "pending" && (
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              )}
              {booking.status === "confirmed" && (
                <Button variant="outline" size="sm">
                  Contact Artist
                </Button>
              )}
              {booking.status === "completed" && (
                <Button variant="outline" size="sm">
                  Leave Review
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Calendar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your bookings and upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-primary" />
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
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
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
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {pastBookings.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Completed Events
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync Calendar
              </Button>
            </div>

            {upcomingBookings.length > 0 ? (
              <div className="space-y-6">
                {upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <CalendarIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No upcoming events
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start browsing talent to book your next event
                </p>
                <Button asChild>
                  <a href="/browse">Browse Talent</a>
                </Button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Pending Requests</h2>
            </div>

            {pendingBookings.length > 0 ? (
              <div className="space-y-6">
                {pendingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No pending requests
                </h3>
                <p className="text-muted-foreground">
                  All your booking requests have been processed
                </p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Past Events</h2>
            </div>

            {pastBookings.length > 0 ? (
              <div className="space-y-6">
                {pastBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No past events</h3>
                <p className="text-muted-foreground">
                  Your completed events will appear here
                </p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
