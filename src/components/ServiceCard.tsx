
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bike, Scissors, Pencil, Book, Wrench, Briefcase } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Bike className="h-8 w-8 text-primary" />,
    title: "Bike & Scooter Repairs",
    description: "Flat tires, chain issues, brake adjustments and more.",
  },
  {
    id: 2,
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: "Beauty & Styling",
    description: "Haircuts, manicures, nail art, makeup and fashion advice.",
  },
  {
    id: 3,
    icon: <Pencil className="h-8 w-8 text-primary" />,
    title: "Creative Services",
    description: "Sewing, art commissions, graphic design, photography and more.",
  },
  {
    id: 4,
    icon: <Book className="h-8 w-8 text-primary" />,
    title: "Academic Help",
    description: "Tutoring, essay editing, research assistance and study groups.",
  },
  {
    id: 5,
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "General Fixes",
    description: "Electronics repair, furniture assembly and other quick fixes.",
  },
  {
    id: 6,
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Career Services",
    description: "Resume writing, interview prep, portfolio reviews and career advice.",
  },
];

const ServiceCard = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium mb-2">Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Connect with skilled providers in the ASU community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="border-none hover:shadow-sm transition-shadow">
              <CardContent className="p-4">
                <div className="mb-3">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
