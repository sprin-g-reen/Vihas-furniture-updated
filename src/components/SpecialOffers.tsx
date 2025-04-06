
import React from 'react';
import { Button } from "@/components/ui/button";

const SpecialOffers = () => {
  return (
    <section className="py-12 md:py-16 bg-vihas-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Offer */}
          <div className="relative rounded-2xl overflow-hidden animate-fade-in">
            <img 
 src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"               alt="Special offer on mattresses" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-6 md:p-8">
                <div className="mb-1 text-sm text-white/80">Limited Time</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Up to 50% OFF</h3>
                <p className="text-white/90 mb-4">On premium mattresses for a limited time</p>
                <Button className="bg-white text-vihas-secondary hover:bg-gray-100">Shop Now</Button>
              </div>
            </div>
          </div>
          
          {/* Second Offer */}
          <div className="relative rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Special offer on sofas" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-6 md:p-8">
                <div className="mb-1 text-sm text-white/80">New Arrivals</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Modern Sofas</h3>
                <p className="text-white/90 mb-4">Starting at just ₹19,999 with free delivery</p>
                <Button className="bg-white text-vihas-secondary hover:bg-gray-100">View Collection</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
