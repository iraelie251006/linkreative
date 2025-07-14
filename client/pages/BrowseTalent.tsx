import { useState, useMemo } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Shield,
} from "lucide-react";
import {
  mockTalents,
  talentCategories,
  rwandanProvinces,
  TalentProfile,
} from "@/lib/mockData";

export default function BrowseTalent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredTalents = useMemo(() => {
    return mockTalents.filter((talent) => {
      const matchesSearch =
        talent.artistName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" || talent.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "all" || talent.location === selectedLocation;

      const matchesPrice = (() => {
        if (priceRange === "all") return true;
        const rate = talent.hourlyRate;
        switch (priceRange) {
          case "low":
            return rate < 50000;
          case "medium":
            return rate >= 50000 && rate < 100000;
          case "high":
            return rate >= 100000;
          default:
            return true;
        }
      })();

      return (
        matchesSearch && matchesCategory && matchesLocation && matchesPrice
      );
    });
  }, [searchQuery, selectedCategory, selectedLocation, priceRange]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const TalentCard = ({ talent }: { talent: TalentProfile }) => (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback>
                {talent.artistName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {talent.artistName}
              </CardTitle>
              <CardDescription className="flex items-center space-x-2">
                <span>{talent.category}</span>
                {talent.verified && (
                  <Shield className="w-4 h-4 text-primary" aria-label="Verified" />
                )}
              </CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{talent.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({talent.reviewCount})
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-2">{talent.bio}</p>

        <div className="flex flex-wrap gap-2">
          {talent.specialties.slice(0, 3).map((specialty, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
          {talent.specialties.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{talent.specialties.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{talent.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{talent.experience} exp</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-lg font-semibold text-primary">
            <DollarSign className="w-5 h-5" />
            <span>{formatPrice(talent.hourlyRate)}/hr</span>
          </div>
          <Link to={`/talent/${talent.id}`}>
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Browse Talent
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and book amazing artists across Rwanda
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filter Talent</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search artists..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {talentCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {rwandanProvinces.map((province) => (
                      <SelectItem key={province} value={province}>
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Price Range</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="low">Under 50,000 RWF</SelectItem>
                    <SelectItem value="medium">50,000 - 100,000 RWF</SelectItem>
                    <SelectItem value="high">Over 100,000 RWF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredTalents.length} artists
            {searchQuery && <span> for "{searchQuery}"</span>}
          </p>
        </div>

        {filteredTalents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalents.map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No talent found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all categories
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedLocation("all");
                setPriceRange("all");
              }}
            >
              Clear Filters
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
