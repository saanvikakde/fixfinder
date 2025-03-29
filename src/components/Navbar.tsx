
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

/**
 * Navbar Component - Main navigation header
 * 
 * This component provides site-wide navigation, displaying the brand logo,
 * main navigation links, and authentication buttons.
 */
const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-primary" />
          <span className="font-medium">FixFinder</span>
        </Link>
        
        {/* Navigation links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/services" className="text-gray-600 hover:text-primary transition-colors text-sm">
            Services
          </Link>
          <Link to="/providers" className="text-gray-600 hover:text-primary transition-colors text-sm">
            Providers
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary transition-colors text-sm">
            About
          </Link>
        </nav>
        
        {/* Authentication buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
