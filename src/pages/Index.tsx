
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";

/**
 * Index Component - Main landing page of the application
 * 
 * This component serves as the home page and organizes the layout of various sections
 * including hero banner, search functionality, service listings, how the platform works,
 * and call-to-action sections.
 */
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SearchSection />
      <ServiceCard />
      <HowItWorks />
      <CTASection />
    </Layout>
  );
};

export default Index;
