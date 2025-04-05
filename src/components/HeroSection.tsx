
import React from 'react';
import { Button } from "@/components/ui/button";
import { Truck, Shield, RotateCcw, CreditCard } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-8 md:py-0">
      {/* Desktop Hero */}
      <div className="hidden md:block">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
            alt="Modern living room furniture" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="container">
              <div className="max-w-lg text-white animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Home with Vihas Furniture</h1>
                <p className="mb-6 text-lg">Elevate your living spaces with our premium furniture collection at unbeatable prices</p>
                <div className="flex gap-4">
                  <Button className="btn-primary">Shop Now</Button>
                  <Button variant="outline" className="bg-white hover:bg-gray-100 text-vihas-secondary">View Collection</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Hero */}
      <div className="md:hidden">
        <div className="container">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
            alt="Modern living room furniture" 
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
          <div className="text-center px-4 py-6 bg-vihas-light rounded-lg animate-fade-in">
            <h1 className="text-3xl font-bold mb-4 text-vihas-secondary">Transform Your Home with Vihas Furniture</h1>
            <p className="mb-6">Elevate your living spaces with our premium furniture collection</p>
            <Button className="btn-primary w-full mb-2">Shop Now</Button>
            <Button variant="outline" className="w-full">View Collection</Button>
          </div>
        </div>
      </div>
      
      {/* Benefits bar */}
      <div className="bg-vihas-light py-4 mt-6 md:mt-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-10 h-10 mb-2 text-vihas-primary" />
              <span className="font-medium text-sm md:text-base">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-10 h-10 mb-2 text-vihas-primary" />
              <span className="font-medium text-sm md:text-base">3-Year Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RotateCcw className="w-10 h-10 mb-2 text-vihas-primary" />
              <span className="font-medium text-sm md:text-base">100-Day Returns</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <CreditCard className="w-10 h-10 mb-2 text-vihas-primary" />
              <span className="font-medium text-sm md:text-base">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
