
import React from 'react';
import { Button } from "@/components/ui/button";
import { Truck, Shield, RotateCcw, CreditCard, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Main Hero Banner */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Modern living room furniture" 
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container">
            <div className="max-w-lg text-white animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Transform Your Home</h1>
              <p className="mb-6 text-lg opacity-90">Premium furniture at unbeatable prices</p>
              <div className="flex gap-4">
                <Button className="bg-[#13455C] hover:bg-opacity-90 text-white px-8">Shop Now</Button>
                <Button variant="outline" className="bg-white hover:bg-gray-100 text-[#13455C] border-white">
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Quick Links */}
      <div className="bg-white py-6 relative z-10">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {['Mattresses', 'Sofas', 'Beds', 'Dining', 'Wardrobes', 'TV Units'].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
              >
                <span className="text-[#13455C] font-medium text-sm md:text-base">{item}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Benefits bar */}
      <div className="bg-[#13455C] text-white py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center">
              <Truck className="w-8 h-8 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-xs opacity-80">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center">
              <Shield className="w-8 h-8 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">3-Year Warranty</p>
                <p className="text-xs opacity-80">On all products</p>
              </div>
            </div>
            <div className="flex items-center">
              <RotateCcw className="w-8 h-8 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">100-Day Returns</p>
                <p className="text-xs opacity-80">No questions asked</p>
              </div>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-8 h-8 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-xs opacity-80">100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
