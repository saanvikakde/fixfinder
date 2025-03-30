import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="ppy-16 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Text Section - Left */}
        <div className="max-w-2xl text-left">
          <h1 className="text-3xl font-medium mb-4">
            Student Skills,<br />
            <span className="text-primary">One App, Countless Fixes!</span>
          </h1>
          
          <p className="text-white-700 mb-8 max-w-lg">
            Find affordable services from talented ASU students and Freelancers around you - from bike repairs to creative work.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link to="/services">Find a Service</Link>
            </Button>
            <Button size="lg" asChild>
              <Link to="/providers">Offer a Service</Link>
            </Button>
          </div>
        </div>

        {/* Image Section - Right */}
        <div className="flex-shrink-0">
          <img
            src="/logo5.png"
            alt="Students collaborating"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

