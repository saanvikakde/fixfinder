
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Interface for Layout component props
 */
interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout Component - Provides consistent page structure
 * 
 * This component wraps page content with a consistent layout,
 * including the navigation bar at the top and footer at the bottom.
 * It ensures the footer stays at the bottom even with minimal content.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
