import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Book Your Next Event?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found the perfect
            talent for their events. Start browsing our verified artists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto bg-background text-primary hover:bg-background/90 border border-background"
              >
                Start Browsing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/join-talent">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-background hover:bg-background hover:text-primary"
                style={{ color: "#ff7a1b" }}
              >
                Join as Artist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HH</span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Hexa Hype
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Connecting Rwanda's artistic community with events and
                celebrations across the nation. Preserving culture, creating
                opportunities.
              </p>
              <div className="flex space-x-4 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <Phone className="w-5 h-5" />
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/browse" className="hover:text-foreground">
                    Browse Talent
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="hover:text-foreground">
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link to="/join-talent" className="hover:text-foreground">
                    Join as Artist
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              © 2024 Hexa Hype. Made with ❤️ for Rwanda's artistic community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
