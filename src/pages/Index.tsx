
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Bike, Scooter, User, Search, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    id: 1,
    icon: <Bike className="h-10 w-10 text-primary" />,
    title: "Bike Repairs",
    description: "Flat tires, chain issues, brake adjustments and more.",
  },
  {
    id: 2,
    icon: <Scooter className="h-10 w-10 text-primary" />,
    title: "Scooter Maintenance",
    description: "Battery issues, wheel replacements, and general tune-ups.",
  },
  {
    id: 3,
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "General Fixes",
    description: "Other repairs like electronics, furniture assembly and more.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "ASU Engineering Student",
    content: "Found someone to fix my bike in under an hour. Saved me from missing class!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Service Provider",
    content: "I've been able to help fellow students while earning extra income between classes.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 3,
    name: "David Thompson",
    role: "ASU Business Major",
    content: "Quick and affordable scooter repair right on campus. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/20 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quick Repairs,<br />
                <span className="text-primary">Local Connections</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Find affordable repair services from skilled ASU students and local 
                providers for your bike, scooter, or other quick fixes.
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
                className="rounded-lg shadow-xl relative z-10 w-full max-w-lg mx-auto"
              />
              <div className="absolute top-10 -right-4 bg-primary/30 w-72 h-72 rounded-full blur-3xl -z-10 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-20">
            <h2 className="text-2xl font-semibold mb-4 text-center">Find the right service quickly</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="What needs fixing?" 
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From quick fixes to more complex repairs, connect with 
              skilled providers in the ASU community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
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
              Getting your items fixed is easy and convenient with FixFinder
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Find a Service</h3>
              <p className="text-gray-600">
                Browse through available services or search for the specific help you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Connect</h3>
              <p className="text-gray-600">
                Message the service provider to discuss details and arrange a meeting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students and service providers in the ASU community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-md">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join the FixFinder community?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you need a quick fix or want to offer your skills, FixFinder connects the ASU community.
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
