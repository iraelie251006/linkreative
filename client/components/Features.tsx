import { Calendar, Shield, Star, Clock, MapPin, Camera } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Calendar Integration",
      description:
        "Seamlessly manage bookings with integrated calendar system. View availability, schedule events, and sync with your existing calendar apps.",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Verified Talent Profiles",
      description:
        "All artists undergo verification process. Browse detailed profiles with portfolios, reviews, and performance history for confident booking decisions.",
      color: "text-accent",
    },
    {
      icon: Star,
      title: "Review & Rating System",
      description:
        "Make informed choices with comprehensive reviews from previous clients. Rate and review artists to help build our trusted community.",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Quick Booking Process",
      description:
        "Book talent in minutes with our streamlined process. Instant confirmations, secure payments, and clear communication channels.",
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description:
        "Find talent across all provinces of Rwanda. From Kigali to rural areas, connect with artists in your preferred location.",
      color: "text-primary",
    },
    {
      icon: Camera,
      title: "Portfolio Showcase",
      description:
        "Rich media portfolios featuring photos, videos, and audio samples. Experience artists' work before making your booking decision.",
      color: "text-accent",
    },
  ];

  const categories = [
    { name: "Traditional Music", icon: "🥁", count: "120+ Artists" },
    { name: "Modern Dance", icon: "💃", count: "85+ Artists" },
    { name: "Cultural Ceremonies", icon: "🎭", count: "95+ Artists" },
    { name: "Contemporary Music", icon: "🎤", count: "150+ Artists" },
    { name: "Visual Arts", icon: "🎨", count: "75+ Artists" },
    { name: "Theatre & Drama", icon: "🎪", count: "60+ Artists" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Hexa Hype?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most trusted platform for booking artistic talent in Rwanda,
            designed to connect culture with community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      feature.color === "text-primary"
                        ? "bg-primary/10"
                        : "bg-accent/10"
                    }`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Explore Talent Categories
          </h3>
          <p className="text-lg text-muted-foreground">
            Discover artists across diverse categories of Rwandan arts and
            culture
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow cursor-pointer border-border"
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">
                  {category.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {category.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
