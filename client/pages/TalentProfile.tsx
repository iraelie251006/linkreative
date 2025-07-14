import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Calendar,
  MessageSquare,
  Share2,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { mockTalents, eventTypes } from "@/lib/mockData";
import { useAuth } from "@/lib/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function TalentProfile() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    eventDate: "",
    eventTime: "",
    duration: "",
    eventType: "",
    location: "",
    description: "",
  });

  const talent = mockTalents.find((t) => t.id === id);

  if (!talent) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Talent Not Found
            </h1>
            <Link to="/browse">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Browse
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to book talent.",
        variant: "destructive",
      });
      return;
    }

    // Mock booking submission
    toast({
      title: "Booking request sent!",
      description: `Your booking request has been sent to ${talent.artistName}. They will respond within 24 hours.`,
    });

    setIsBookingOpen(false);
    setBookingForm({
      eventDate: "",
      eventTime: "",
      duration: "",
      eventType: "",
      location: "",
      description: "",
    });
  };

  const mockReviews = [
    {
      id: "1",
      clientName: "Jean Rukundo",
      rating: 5,
      comment:
        "Absolutely amazing performance! Professional, punctual, and brought incredible energy to our wedding.",
      date: "2024-01-15",
    },
    {
      id: "2",
      clientName: "Marie Uwimana",
      rating: 5,
      comment:
        "Outstanding artistry and cultural authenticity. Highly recommend for any cultural event.",
      date: "2024-01-10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/browse"
            className="inline-flex items-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="text-2xl">
                        {talent.artistName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl flex items-center space-x-2">
                        <span>{talent.artistName}</span>
                        {talent.verified && (
                          <Shield className="w-5 h-5 text-primary" />
                        )}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {talent.category}
                      </CardDescription>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{talent.rating}</span>
                          <span className="text-muted-foreground">
                            ({talent.reviewCount} reviews)
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{talent.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{talent.bio}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span>{talent.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-muted-foreground" />
                    <span>{formatPrice(talent.hourlyRate)} per hour</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {talent.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {talent.languages.map((language, index) => (
                        <Badge key={index} variant="outline">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <div className="flex flex-wrap gap-2">
                      {talent.availability.map((day, index) => (
                        <Badge key={index} variant="secondary">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs for Portfolio and Reviews */}
            <Tabs defaultValue="portfolio" className="space-y-4">
              <TabsList>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription>
                      Examples of {talent.artistName}'s work
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {talent.portfolio.images.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                        >
                          <span className="text-muted-foreground">
                            Portfolio Image {index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Reviews ({mockReviews.length})</CardTitle>
                    <CardDescription>
                      What clients say about {talent.artistName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockReviews.map((review) => (
                        <div key={review.id}>
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                {review.clientName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-medium">
                                  {review.clientName}
                                </span>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? "text-yellow-500 fill-current"
                                          : "text-muted-foreground"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {review.date}
                                </span>
                              </div>
                              <p className="text-muted-foreground">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                          <Separator className="mt-6" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book {talent.artistName}</CardTitle>
                <CardDescription>
                  Send a booking request for your event
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(talent.hourlyRate)}
                  </div>
                  <div className="text-sm text-muted-foreground">per hour</div>
                </div>

                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full" size="lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Book {talent.artistName}</DialogTitle>
                      <DialogDescription>
                        Fill in the details for your event booking request.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Event Date</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={bookingForm.eventDate}
                            onChange={(e) =>
                              setBookingForm({
                                ...bookingForm,
                                eventDate: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventTime">Time</Label>
                          <Input
                            id="eventTime"
                            type="time"
                            value={bookingForm.eventTime}
                            onChange={(e) =>
                              setBookingForm({
                                ...bookingForm,
                                eventTime: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (hours)</Label>
                        <Input
                          id="duration"
                          type="number"
                          min="1"
                          max="12"
                          value={bookingForm.duration}
                          onChange={(e) =>
                            setBookingForm({
                              ...bookingForm,
                              duration: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="eventType">Event Type</Label>
                        <Select
                          value={bookingForm.eventType}
                          onValueChange={(value) =>
                            setBookingForm({ ...bookingForm, eventType: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Event Location</Label>
                        <Input
                          id="location"
                          placeholder="Where is your event?"
                          value={bookingForm.location}
                          onChange={(e) =>
                            setBookingForm({
                              ...bookingForm,
                              location: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Event Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Tell us about your event..."
                          value={bookingForm.description}
                          onChange={(e) =>
                            setBookingForm({
                              ...bookingForm,
                              description: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Booking Request
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>Available on booking</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>Available on booking</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{talent.location}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
