
import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";

/**
 * Footer Component - Site-wide footer
 * 
 * This component appears at the bottom of every page and contains
 * the brand logo, navigation links organized into categories,
 * and copyright information.
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <span className="font-medium text-lg">FixFinder</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Connecting ASU students with services.
            </p>
          </div>
          
          {/* Services links section */}
          <div>
            <h3 className="font-medium text-base mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Find Services
                </Link>
              </li>
              <li>
                <Link to="/providers" className="text-gray-600 hover:text-primary transition-colors">
                  Service Providers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support links section */}
          <div>
            <h3 className="font-medium text-base mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t mt-6 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FixFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
