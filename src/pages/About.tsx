import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import AIAssistant from "../components/shared/AIAssistant";
import { Card } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = "About AI Yatri - Your AI-Powered Travel Companion";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About AI Yatri</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Your AI-powered companion for exploring the beauty of Maharashtra
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-yatri-blue bg-yatri-blue/10 rounded-full mb-3">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Creating Unforgettable Travel Experiences
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                AI Yatri was founded with a simple but powerful mission: to transform how people explore and experience Maharashtra. By combining artificial intelligence with deep local knowledge, we create personalized travel experiences that are both authentic and convenient.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our platform helps travelers discover hidden gems, plan detailed itineraries, and navigate local culture with ease - all while supporting sustainable tourism practices and local communities.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1580892047528-7dfd384dce65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Beautiful view of Maharashtra landscape" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium text-yatri-orange bg-yatri-orange/10 rounded-full mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How We Started
              </h2>
            </div>
            
            <div className="prose dark:prose-invert prose-lg max-w-none">
              <p>
                AI Yatri began as a passion project by a group of technologists and travel enthusiasts who saw the potential for AI to transform the travel industry. Born in 2023, our team set out to create a platform that would make exploring Maharashtra more accessible and enjoyable for travelers from all backgrounds.
              </p>
              <p>
                We noticed that while Maharashtra offers incredible diversity - from bustling cities to serene coastlines, ancient caves to modern cultural hubs - many travelers were missing out on authentic experiences because planning was too complicated or information was scattered.
              </p>
              <p>
                By leveraging artificial intelligence, we've created a tool that understands each traveler's preferences and constraints, offering personalized recommendations that go beyond the typical tourist attractions. Our AI assistant helps users navigate language barriers, cultural nuances, and logistical challenges, making travel more seamless and enjoyable.
              </p>
              <p>
                Today, AI Yatri continues to grow, constantly learning from user experiences and feedback to improve our recommendations and services. We're proud to be at the forefront of AI-powered travel in India, and we're excited about the journey ahead.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium text-yatri-blue bg-yatri-blue/10 rounded-full mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The People Behind AI Yatri
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our diverse team combines expertise in AI, travel, and local knowledge to create the best possible experience for our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Aanya Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Aanya Sharma</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300">
                  With a background in AI and a passion for travel, Aanya leads our vision for transforming regional tourism.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Vikram Desai" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Vikram Desai</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">CTO</p>
                <p className="text-gray-600 dark:text-gray-300">
                  A machine learning expert with a deep appreciation for Maharashtra's cultural heritage, Vikram oversees our technology development.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Priya Patil" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Priya Patil</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Head of Content</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Born and raised in Pune, Priya brings authentic local knowledge to our platform, ensuring our recommendations are genuine and accurate.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium text-yatri-orange bg-yatri-orange/10 rounded-full mb-3">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              These core principles guide everything we do at AI Yatri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yatri-blue/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yatri-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously push the boundaries of what's possible in travel tech to deliver exceptional experiences.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yatri-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yatri-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We support local communities and businesses, ensuring tourism benefits those who call Maharashtra home.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We promote responsible tourism practices that preserve Maharashtra's natural beauty for future generations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trust</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to providing reliable information and maintaining the highest standards of data privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium text-yatri-blue bg-yatri-blue/10 rounded-full mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <strong>General Inquiries:</strong> info@aiyatri.com
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <strong>Support:</strong> support@aiyatri.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Partnerships:</strong> partners@aiyatri.com
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Office Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  AI Yatri Technologies
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Baner Road, Pune 411045<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Follow us on social media for the latest updates and travel inspiration
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-yatri-blue transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-yatri-blue transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-yatri-blue transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-yatri-blue transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default About;
