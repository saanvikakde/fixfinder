
import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">FixFinder</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Connecting ASU students with affordable repair services.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
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
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">For Providers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
                  Provider Dashboard
                </Link>
              </li>
              <li>
                <Link to="/add-service" className="text-gray-600 hover:text-primary transition-colors">
                  Add a Service
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-gray-600 hover:text-primary transition-colors">
                  Tips for Success
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
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
        
        <div className="border-t mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FixFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
