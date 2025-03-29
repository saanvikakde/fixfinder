
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Bike, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">FixFinder</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
            Find Services
          </Link>
          <Link to="/providers" className="text-gray-600 hover:text-primary transition-colors">
            Service Providers
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
