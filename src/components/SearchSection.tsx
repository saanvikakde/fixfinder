
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

/**
 * SearchSection Component - Search functionality for finding services
 * 
 * This component contains a search form with inputs for service type and location,
 * allowing users to find specific services based on their needs and campus location.
 */
const SearchSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Search panel positioned with negative margin for overlap effect */}
        <div className="max-w-3xl mx-auto bg-white p-6 -mt-8 relative z-20 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Service search input with icon */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="What do you need help with?" 
                className="pl-10 h-12"
              />
            </div>
            
            {/* Location search input with icon */}
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Campus location" 
                className="pl-10 h-12"
              />
            </div>
            
            {/* Search button */}
            <Button className="h-12">Search</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
