
import { Search, User, Wrench } from "lucide-react";

/**
 * HowItWorks Component - Explains the process of using the platform
 * 
 * This component breaks down the user journey into three simple steps,
 * showing how easy it is to find and connect with service providers.
 */
const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium mb-2">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Getting the help you need is simple
          </p>
        </div>
        
        {/* Three-step process explained in a grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {/* Step 1: Find */}
          <div>
            <div className="mb-3">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-1">1. Find</h3>
            <p className="text-gray-600 text-sm">
              Browse available services or search for specific help
            </p>
          </div>
          
          {/* Step 2: Connect */}
          <div>
            <div className="mb-3">
              <User className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-1">2. Connect</h3>
            <p className="text-gray-600 text-sm">
              Message the provider to discuss details
            </p>
          </div>
          
          {/* Step 3: Get Help */}
          <div>
            <div className="mb-3">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-1">3. Get Help</h3>
            <p className="text-gray-600 text-sm">
              Meet with your provider and get your task done
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
