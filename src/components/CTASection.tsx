
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-medium mb-4">Join the community</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Connect with the ASU community for services you need
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
