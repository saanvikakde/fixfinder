
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-primary" />
          <span className="font-medium">FixFinder</span>
        </Link>
        
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
