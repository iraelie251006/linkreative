import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Upload, Shield, DollarSign } from "lucide-react";

export default function JoinTalent() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join as <span className="text-primary">Talent</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your artistic talents with Rwanda and start earning from your
            craft
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Why Join Linkreative?</CardTitle>
              <CardDescription>
                Benefits of becoming a verified artist on our platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">
                    Connect with clients across Rwanda
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">
                    Showcase your portfolio to thousands
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">
                    Secure payment processing
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">
                    Calendar integration for easy scheduling
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">
                    Professional profile verification
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>
                Simple steps to become a verified artist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Create Profile</h4>
                    <p className="text-sm text-muted-foreground">
                      Fill out your artist profile with bio and experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Upload Portfolio</h4>
                    <p className="text-sm text-muted-foreground">
                      Share photos, videos, and samples of your work
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Verification</h4>
                    <p className="text-sm text-muted-foreground">
                      Our team reviews your application (24-48 hours)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Start Earning</h4>
                    <p className="text-sm text-muted-foreground">
                      Get approved and start receiving booking requests
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Verified Platform</h3>
            <p className="text-sm text-muted-foreground">
              All artists are verified for quality and authenticity
            </p>
          </Card>
          <Card className="text-center p-6">
            <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Competitive Rates</h3>
            <p className="text-sm text-muted-foreground">
              Set your own prices and keep 85% of every booking
            </p>
          </Card>
          <Card className="text-center p-6">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Build Your Reputation</h3>
            <p className="text-sm text-muted-foreground">
              Collect reviews and build your artistic reputation
            </p>
          </Card>
        </div>

        <Card className="p-8 text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Join?</CardTitle>
            <CardDescription className="text-lg">
              Artist registration will be available soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" disabled className="mb-4">
              Artist Registration Coming Soon
            </Button>
            <p className="text-muted-foreground">
              Be the first to know when applications open by following us on
              social media
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
