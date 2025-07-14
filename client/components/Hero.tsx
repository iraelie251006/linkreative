import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calendar, Users, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 py-16 sm:py-24">
      {/* Background Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-50'
        }
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Book</span> Rwanda's{" "}
            <span className="text-accent">Finest Artists</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with talented musicians, dancers, artists, and performers
            across Rwanda. From traditional ceremonies to modern events, find
            the perfect talent for your occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/browse">
              <Button size="lg" className="w-full sm:w-auto">
                <Search className="w-5 h-5 mr-2" />
                Browse Talent
              </Button>
            </Link>
            <Link to="/join-talent">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Star className="w-5 h-5 mr-2" />
                Join as Artist
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">
                  Verified Artists
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1,200+</div>
                <div className="text-sm text-muted-foreground">
                  Events Booked
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <div className="w-8 h-8 text-accent mx-auto mb-2 flex items-center justify-center">
                  🇷🇼
                </div>
                <div className="text-2xl font-bold text-foreground">All</div>
                <div className="text-sm text-muted-foreground">
                  Rwanda Provinces
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
