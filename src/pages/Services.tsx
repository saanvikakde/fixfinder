
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bike, Scooter, Wrench, Search, Clock, DollarSign, User, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

// Mock service data
const mockServices = [
  {
    id: 1,
    title: "Bike Tire Repair & Replacement",
    description: "Quick and affordable bike tire fixes. I can patch punctures or replace tubes completely.",
    provider: "Mike Chen",
    providerRating: 4.8,
    providerReviews: 24,
    price: "$15-25",
    location: "Near Memorial Union",
    availability: "Weekdays after 3PM",
    type: "bike",
    image: "https://images.unsplash.com/photo-1605278182227-43ef32b9923c?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    title: "Scooter Battery Replacement",
    description: "Expert scooter battery diagnosis and replacement. Most models supported.",
    provider: "Jessica Williams",
    providerRating: 4.9,
    providerReviews: 37,
    price: "$30-60",
    location: "Engineering Center",
    availability: "Weekends, some evenings",
    type: "scooter",
    image: "https://images.unsplash.com/photo-1566843972625-a3634d31c13a?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    title: "General Bike Tune-up",
    description: "Complete bike maintenance including brake adjustment, gear tuning, and lubrication.",
    provider: "David Thompson",
    providerRating: 4.7,
    providerReviews: 19,
    price: "$25-40",
    location: "West Campus",
    availability: "Daily: 4PM-8PM",
    type: "bike",
    image: "https://images.unsplash.com/photo-1593083296171-e89f67687e24?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    title: "Electronics Repair",
    description: "Fixing basic electronics issues like charging ports, screen replacements, and more.",
    provider: "Aisha Johnson",
    providerRating: 4.6,
    providerReviews: 31,
    price: "$20-50",
    location: "Tempe Marketplace area",
    availability: "Mon/Wed/Fri evenings",
    type: "other",
    image: "https://images.unsplash.com/photo-1597424216844-05e50db5885e?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 5,
    title: "Scooter Wheel Repair",
    description: "Replace or repair damaged scooter wheels for a smooth ride.",
    provider: "Carlos Rodriguez",
    providerRating: 4.5,
    providerReviews: 12,
    price: "$15-30",
    location: "South Campus",
    availability: "Weekends only",
    type: "scooter",
    image: "https://images.unsplash.com/photo-1542140846-0e69e1bf32a5?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 6,
    title: "Furniture Assembly",
    description: "Need help putting together that new desk or bookshelf? I can help with assembly and installation.",
    provider: "Emma Stevens",
    providerRating: 5.0,
    providerReviews: 15,
    price: "$20-40",
    location: "Campus-wide",
    availability: "Evenings and weekends",
    type: "other",
    image: "https://images.unsplash.com/photo-1595426496137-abcce8f86887?auto=format&fit=crop&q=80&w=500",
  },
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceType, setServiceType] = useState("all");
  const [location, setLocation] = useState("all");
  
  // Filter services based on search and filters
  const filteredServices = mockServices.filter((service) => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = serviceType === "all" || service.type === serviceType;
    
    const matchesLocation = location === "all" || service.location.includes(location);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary/20 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Services</h1>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Browse available repair services from skilled providers in the ASU community.
          </p>
          
          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search services..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="bike">Bike Repair</SelectItem>
                    <SelectItem value="scooter">Scooter Repair</SelectItem>
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
            {filteredServices.length} Services Available
          </h2>
          <Select defaultValue="recommended">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="priceAsc">Price: Low to High</SelectItem>
              <SelectItem value="priceDesc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {filteredServices.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    {service.type === "bike" && <Bike className="h-4 w-4 mr-1" />}
                    {service.type === "scooter" && <Scooter className="h-4 w-4 mr-1" />}
                    {service.type === "other" && <Wrench className="h-4 w-4 mr-1" />}
                    <span className="capitalize">{service.type} Service</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <User className="h-4 w-4 mr-2" />
                      <span>{service.provider}</span>
                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        ★ {service.providerRating} ({service.providerReviews})
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>{service.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50 flex justify-between items-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/service/${service.id}`}>View Details</Link>
                  </Button>
                  <Button size="sm">Contact Provider</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-primary mb-4">
              <Search className="h-12 w-12 mx-auto opacity-50" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No services found</h3>
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

export default Services;
