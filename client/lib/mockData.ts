// Mock data for the Hexa Hype platform

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
  location: string;
  joinedDate: string;
}

export interface TalentProfile {
  id: string;
  userId: string;
  artistName: string;
  category: string;
  specialties: string[];
  bio: string;
  experience: string;
  hourlyRate: number;
  location: string;
  availability: string[];
  portfolio: {
    images: string[];
    videos: string[];
    audio: string[];
  };
  rating: number;
  reviewCount: number;
  verified: boolean;
  languages: string[];
}

export interface Booking {
  id: string;
  clientId: string;
  talentId: string;
  eventDate: string;
  eventTime: string;
  duration: number;
  eventType: string;
  location: string;
  description: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  totalAmount: number;
  createdAt: string;
}

export interface Review {
  id: string;
  bookingId: string;
  clientId: string;
  talentId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Mock users
export const mockUsers: User[] = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Rukundo",
    email: "jean.rukundo@gmail.com",
    phone: "+250 788 123 456",
    location: "Kigali",
    joinedDate: "2024-01-15",
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Uwimana",
    email: "marie.uwimana@gmail.com",
    phone: "+250 789 234 567",
    location: "Butare",
    joinedDate: "2024-02-20",
  },
];

// Mock talent profiles
export const mockTalents: TalentProfile[] = [
  {
    id: "1",
    userId: "2",
    artistName: "Amahoro Traditional Dancers",
    category: "Traditional Dance",
    specialties: ["Intore Dance", "Wedding Ceremonies", "Cultural Events"],
    bio: "Professional traditional dance group specializing in authentic Rwandan cultural performances. We bring the spirit of Rwanda to every event.",
    experience: "8 years",
    hourlyRate: 50000,
    location: "Kigali",
    availability: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
    portfolio: {
      images: ["/placeholder.svg", "/placeholder.svg"],
      videos: [],
      audio: [],
    },
    rating: 4.8,
    reviewCount: 24,
    verified: true,
    languages: ["Kinyarwanda", "English", "French"],
  },
  {
    id: "2",
    userId: "3",
    artistName: "Safari Jazz Ensemble",
    category: "Contemporary Music",
    specialties: ["Jazz", "Afro-fusion", "Corporate Events"],
    bio: "Modern jazz band blending traditional Rwandan rhythms with contemporary sounds. Perfect for sophisticated events and celebrations.",
    experience: "5 years",
    hourlyRate: 75000,
    location: "Kigali",
    availability: ["Thursday", "Friday", "Saturday", "Sunday"],
    portfolio: {
      images: ["/placeholder.svg"],
      videos: [],
      audio: [],
    },
    rating: 4.9,
    reviewCount: 18,
    verified: true,
    languages: ["English", "Kinyarwanda", "Swahili"],
  },
  {
    id: "3",
    userId: "4",
    artistName: "Ubusanane Arts Collective",
    category: "Visual Arts",
    specialties: ["Imigongo Painting", "Basket Weaving", "Cultural Workshops"],
    bio: "Collective of master artisans preserving and sharing traditional Rwandan craft techniques through live demonstrations and workshops.",
    experience: "12 years",
    hourlyRate: 40000,
    location: "Nyanza",
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    portfolio: {
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      videos: [],
      audio: [],
    },
    rating: 4.7,
    reviewCount: 31,
    verified: true,
    languages: ["Kinyarwanda", "English"],
  },
];

// Mock bookings
export const mockBookings: Booking[] = [
  {
    id: "1",
    clientId: "1",
    talentId: "1",
    eventDate: "2024-02-15",
    eventTime: "18:00",
    duration: 3,
    eventType: "Wedding Reception",
    location: "Kigali Serena Hotel",
    description:
      "Traditional dance performance for wedding reception with 150 guests",
    status: "confirmed",
    totalAmount: 150000,
    createdAt: "2024-01-20",
  },
  {
    id: "2",
    clientId: "1",
    talentId: "2",
    eventDate: "2024-02-28",
    eventTime: "19:30",
    duration: 2,
    eventType: "Corporate Event",
    location: "Kigali Convention Centre",
    description: "Jazz performance for company annual dinner",
    status: "pending",
    totalAmount: 150000,
    createdAt: "2024-01-25",
  },
];

// Mock reviews
export const mockReviews: Review[] = [
  {
    id: "1",
    bookingId: "1",
    clientId: "1",
    talentId: "1",
    rating: 5,
    comment:
      "Absolutely amazing performance! The dancers were professional and brought such beautiful energy to our wedding. Highly recommended!",
    createdAt: "2024-01-22",
  },
];

// Rwandan provinces for location filters
export const rwandanProvinces = [
  "Kigali",
  "Northern Province",
  "Southern Province",
  "Eastern Province",
  "Western Province",
];

// Talent categories
export const talentCategories = [
  "Traditional Music",
  "Contemporary Music",
  "Traditional Dance",
  "Modern Dance",
  "Visual Arts",
  "Theatre & Drama",
  "Cultural Ceremonies",
  "Poetry & Spoken Word",
  "Photography",
  "Fashion & Design",
];

// Event types
export const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Cultural Festival",
  "Conference",
  "Product Launch",
  "Anniversary",
  "Community Event",
  "Educational Workshop",
  "Religious Ceremony",
];
