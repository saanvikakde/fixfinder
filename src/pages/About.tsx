
import React from "react";
import { Bike, Wrench, Users, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary/20 to-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About FixFinder</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Connecting ASU students with affordable and accessible repair services
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              FixFinder was created to solve a common problem at ASU: access to affordable, 
              convenient repair services for bikes, scooters, and other everyday items.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that students shouldn't have to pay expensive shop rates or travel 
              far from campus to get quick repairs. At the same time, we know that many 
              students have valuable skills they could share with the community.
            </p>
            <p className="text-gray-700">
              Our platform connects these two groups, creating a community-based solution 
              that helps everyone save time and money while fostering connections within 
              the ASU community.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Student fixing a device" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary/20 w-32 h-32 rounded-full -z-10"></div>
            <div className="absolute -top-5 -left-5 bg-primary/20 w-24 h-24 rounded-full -z-10"></div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-10">Why Choose FixFinder?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenience</h3>
              <p className="text-gray-600">
                Find service providers right on campus, near where you live and study.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="text-gray-600">
                Student-friendly prices that are typically lower than professional shops.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bike className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Specialized</h3>
              <p className="text-gray-600">
                Focus on common student needs like bike and scooter repairs.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Support fellow students and build connections within ASU.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">How do I find a service?</h3>
              <p className="text-gray-600">
                Browse our services page, filter by type of repair, and contact the provider directly through our platform.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">How do I become a service provider?</h3>
              <p className="text-gray-600">
                Sign up for an account, create a profile highlighting your skills, and list the services you offer.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Is there any fee to use the platform?</h3>
              <p className="text-gray-600">
                FixFinder is completely free for ASU students and community members to use.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">How are payments handled?</h3>
              <p className="text-gray-600">
                Payments are arranged directly between service providers and customers. We recommend discussing rates before meeting.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What if I'm not satisfied with a service?</h3>
              <p className="text-gray-600">
                We encourage open communication between providers and customers. You can also leave reviews to help others make informed decisions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            FixFinder was created by ASU students who understand the challenges of campus life and wanted to create a practical solution.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* You would replace these with actual team members */}
            <div className="p-4">
              <img 
                src="https://i.pravatar.cc/200?img=1" 
                alt="Team Member" 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Alex Rodriguez</h3>
              <p className="text-primary">Founder & Developer</p>
              <p className="text-gray-600 mt-2">
                Computer Science major with a passion for community building.
              </p>
            </div>
            
            <div className="p-4">
              <img 
                src="https://i.pravatar.cc/200?img=5" 
                alt="Team Member" 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-primary">Co-Founder & Designer</p>
              <p className="text-gray-600 mt-2">
                Design student who creates intuitive digital experiences.
              </p>
            </div>
            
            <div className="p-4">
              <img 
                src="https://i.pravatar.cc/200?img=3" 
                alt="Team Member" 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-primary">Marketing & Outreach</p>
              <p className="text-gray-600 mt-2">
                Business major focusing on growing the FixFinder community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
