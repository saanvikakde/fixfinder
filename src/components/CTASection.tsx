
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * CTASection Component - Call to Action section to encourage sign-ups
 * 
 * This component provides a final encouragement for users to join the platform,
 * with direct links to sign up or browse available services.
 */
const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section header */}
        <h2 className="text-2xl text-black font-medium mb-4">Join the community</h2>
        <p className="text-black max-w-xl mx-auto mb-6">
          Connect with the ASU community for services you need
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button size="lg"  asChild>
            <Link to="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
