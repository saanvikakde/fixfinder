
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Bike, Truck, User, Search, MapPin, Scissors, Pencil, Book, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    id: 1,
    icon: <Bike className="h-10 w-10 text-primary" />,
    title: "Bike & Scooter Repairs",
    description: "Flat tires, chain issues, brake adjustments and more.",
  },
  {
    id: 2,
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: "Beauty & Styling",
    description: "Haircuts, manicures, nail art, makeup and fashion advice.",
  },
  {
    id: 3,
    icon: <Pencil className="h-10 w-10 text-primary" />,
    title: "Creative Services",
    description: "Sewing, art commissions, graphic design, photography and more.",
  },
  {
    id: 4,
    icon: <Book className="h-10 w-10 text-primary" />,
    title: "Academic Help",
    description: "Tutoring, essay editing, research assistance and study groups.",
  },
  {
    id: 5,
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "General Fixes",
    description: "Electronics repair, furniture assembly and other quick fixes.",
  },
  {
    id: 6,
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Career Services",
    description: "Resume writing, interview prep, portfolio reviews and career advice.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Student Skills,<br />
                <span className="text-primary">Campus Connections</span>
              </h1>
              <p className="text-gray-700 mb-8 max-w-lg">
                Find affordable services from talented ASU students - from bike repairs and nail art 
                to tutoring and creative work. Connect with skilled peers near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/services">Find a Service</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/providers">Become a Provider</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Service provider helping with a repair" 
                className="rounded-lg shadow-md relative z-10 w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 -mt-12 relative z-20 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-center">Find the right service quickly</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="What do you need help with?" 
                  className="pl-10 h-12"
                />
              </div>
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Campus location" 
                  className="pl-10 h-12"
                />
              </div>
              <Button className="h-12">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From repairs to beauty services, academic help to creative work, connect with 
              skilled providers in the ASU community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 bg-accent/50 w-16 h-16 rounded-full mx-auto items-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting the help you need is easy and convenient with FixFinder
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Find a Service</h3>
              <p className="text-gray-600">
                Browse through available services or search for the specific help you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Connect</h3>
              <p className="text-gray-600">
                Message the service provider to discuss details and arrange a meeting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Get Fixed</h3>
              <p className="text-gray-600">
                Meet with your provider, get your repairs done, and you're good to go!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join the FixFinder community?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you need help with a task or want to offer your skills, FixFinder connects the ASU community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/signup">Sign Up Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
