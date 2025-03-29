
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, Star, Search, Bike, Scooter, Wrench } from "lucide-react";
import Layout from "@/components/Layout";

// Mock providers data
const mockProviders = [
  {
    id: 1,
    name: "Mike Chen",
    bio: "Engineering student specializing in bike repairs. Quick and affordable service with 3+ years of experience.",
    rating: 4.8,
    reviews: 24,
    location: "Near Memorial Union",
    skills: ["Bike Repairs", "Tire Replacement", "Brake Adjustment"],
    serviceCount: 3,
    avatar: "https://i.pravatar.cc/150?img=11",
    serviceTypes: ["bike"],
  },
  {
    id: 2,
    name: "Jessica Williams",
    bio: "Electrical engineering major with expertise in scooter and small electronics repair. Affordable rates!",
    rating: 4.9,
    reviews: 37,
    location: "Engineering Center",
    skills: ["Scooter Repair", "Battery Replacement", "Electronics"],
    serviceCount: 4,
    avatar: "https://i.pravatar.cc/150?img=5",
    serviceTypes: ["scooter", "other"],
  },
  {
    id: 3,
    name: "David Thompson",
    bio: "Avid cyclist and mechanical engineering student. I can help with all types of bike maintenance and repairs.",
    rating: 4.7,
    reviews: 19,
    location: "West Campus",
    skills: ["Bike Tune-ups", "Chain Repair", "Gear Adjustment"],
    serviceCount: 2,
    avatar: "https://i.pravatar.cc/150?img=3",
    serviceTypes: ["bike"],
  },
  {
    id: 4,
    name: "Aisha Johnson",
    bio: "Computer science major specializing in electronics repair. Can fix most charging ports, screens, and more.",
    rating: 4.6,
    reviews: 31,
    location: "Tempe Marketplace area",
    skills: ["Electronics Repair", "Screen Replacement", "Battery Issues"],
    serviceCount: 3,
    avatar: "https://i.pravatar.cc/150?img=9",
    serviceTypes: ["other"],
  },
  {
    id: 5,
    name: "Carlos Rodriguez",
    bio: "Transportation design student with expertise in scooter and skateboard repairs. Quick turnaround times.",
    rating: 4.5,
    reviews: 12,
    location: "South Campus",
    skills: ["Scooter Repair", "Wheel Replacement", "Motor Issues"],
    serviceCount: 2,
    avatar: "https://i.pravatar.cc/150?img=12",
    serviceTypes: ["scooter"],
  },
  {
    id: 6,
    name: "Emma Stevens",
    bio: "Architecture student offering furniture assembly and repair services. Skilled with various tools and materials.",
    rating: 5.0,
    reviews: 15,
    location: "Campus-wide",
    skills: ["Furniture Assembly", "Small Repairs", "Installation"],
    serviceCount: 1,
    avatar: "https://i.pravatar.cc/150?img=8",
    serviceTypes: ["other"],
  },
];

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceType, setServiceType] = useState("all");
  const [location, setLocation] = useState("all");
  
  // Filter providers based on search and filters
  const filteredProviders = mockProviders.filter((provider) => {
    const matchesSearch = 
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesType = serviceType === "all" || provider.serviceTypes.includes(serviceType);
    
    const matchesLocation = location === "all" || provider.location.includes(location);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary/20 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Service Providers</h1>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Connect with skilled service providers in the ASU community.
          </p>
          
          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search providers..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specializations</SelectItem>
                    <SelectItem value="bike">Bike Specialist</SelectItem>
                    <SelectItem value="scooter">Scooter Specialist</SelectItem>
                    <SelectItem value="other">Other Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Memorial Union">Memorial Union</SelectItem>
                    <SelectItem value="West Campus">West Campus</SelectItem>
                    <SelectItem value="Engineering">Engineering Center</SelectItem>
                    <SelectItem value="South Campus">South Campus</SelectItem>
                    <SelectItem value="Tempe">Tempe Area</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button>
                <Search className="mr-2 h-4 w-4" /> Filter Results
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {filteredProviders.length} Providers Available
          </h2>
          <Select defaultValue="rating">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="services">Most Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {filteredProviders.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <Card key={provider.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                    <img 
                      src={provider.avatar} 
                      alt={provider.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{provider.name}</h3>
                      <div className="flex items-center text-sm text-yellow-500 mb-1">
                        <Star className="h-4 w-4 fill-yellow-500 mr-1" />
                        <span>{provider.rating}</span>
                        <span className="text-gray-500 ml-1">({provider.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{provider.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{provider.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {provider.serviceTypes.includes("bike") && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs flex items-center">
                          <Bike className="h-3 w-3 mr-1" /> Bike
                        </span>
                      )}
                      {provider.serviceTypes.includes("scooter") && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs flex items-center">
                          <Scooter className="h-3 w-3 mr-1" /> Scooter
                        </span>
                      )}
                      {provider.serviceTypes.includes("other") && (
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs flex items-center">
                          <Wrench className="h-3 w-3 mr-1" /> Other
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {provider.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {provider.serviceCount} active {provider.serviceCount === 1 ? 'service' : 'services'}
                    </span>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/provider/${provider.id}`}>View Profile</Link>
                      </Button>
                      <Button size="sm">Contact</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-primary mb-4">
              <User className="h-12 w-12 mx-auto opacity-50" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No providers found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setServiceType("all");
              setLocation("all");
            }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Providers;
