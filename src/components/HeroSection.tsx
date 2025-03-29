
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium mb-4">
            Student Skills,<br />
            <span className="text-primary">Campus Connections</span>
          </h1>
          <p className="text-gray-700 mb-8 max-w-lg">
            Find affordable services from talented ASU students - from bike repairs to creative work.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link to="/services">Find a Service</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/providers">Offer a Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
