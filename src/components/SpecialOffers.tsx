
import React from 'react';
import { Button } from "@/components/ui/button";

const SpecialOffers = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#13455C] mb-2">Special Offers</h2>
          <p className="text-gray-500">Limited time deals you don't want to miss</p>
        </div>
        
        {/* Banner offers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Offer */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1505693414898-9db606e72066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Special offer on mattresses" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="p-8 text-white">
                <div className="inline-block bg-red-500 px-3 py-1 rounded text-sm mb-3">Limited Time</div>
                <h3 className="text-3xl font-bold mb-2">Up to 50% OFF</h3>
                <p className="mb-4 opacity-90">On premium mattresses for a limited time</p>
                <Button className="bg-white text-[#13455C] hover:bg-gray-100">Shop Now</Button>
              </div>
            </div>
          </div>
          
          {/* Second Offer */}
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Special offer on sofas" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="p-8 text-white">
                <div className="inline-block bg-green-500 px-3 py-1 rounded text-sm mb-3">New Arrivals</div>
                <h3 className="text-3xl font-bold mb-2">Modern Sofas</h3>
                <p className="mb-4 opacity-90">Starting at just ₹19,999 with free delivery</p>
                <Button className="bg-white text-[#13455C] hover:bg-gray-100">View Collection</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional mini offers section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#13455C] text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Clearance Sale</h3>
            <p className="opacity-90 mb-4">Up to 60% off on selected items</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#13455C]">
              Explore
            </Button>
          </div>
          <div className="bg-amber-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#13455C] mb-2">Free Assembly</h3>
            <p className="text-gray-700 mb-4">On all furniture purchases above ₹15,000</p>
            <Button className="bg-[#13455C] text-white">Learn More</Button>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#13455C] mb-2">Refer & Earn</h3>
            <p className="text-gray-700 mb-4">Get ₹1,000 for every successful referral</p>
            <Button className="bg-[#13455C] text-white">Refer Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
