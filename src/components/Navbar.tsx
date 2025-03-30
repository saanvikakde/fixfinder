import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false); // new state for confirmation
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    setShowConfirmLogout(false); // close modal
    navigate("/");
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-primary" />
          <span className="font-medium">FixFinder</span>
        </Link>

        {/* Nav links */}
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

        {/* Right side */}
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              {user?.name
                ? `Hi, ${user.name.split(" ")[0][0].toUpperCase()}${user.name
                    .split(" ")[0]
                    .slice(1)}`
                : "My Profile"}
            </span>
            <Button variant="outline" size="sm" onClick={() => setShowConfirmLogout(true)}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/signin">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmLogout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">
            <p className="mb-4 text-sm text-gray-700">Are you sure you want to log out?</p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleLogout} size="sm">Confirm</Button>
              <Button variant="outline" onClick={() => setShowConfirmLogout(false)} size="sm">Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
