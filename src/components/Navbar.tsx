
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone, Heart, ChevronDown, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    "Mattresses", "Beds", "Sofas", "Dining", "TV Units", 
    "Work From Home", "Wardrobes", "Chairs", "Tables", "Sale"
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[#13455C] text-white py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Deliver to: </span>
              <button className="font-medium ml-1 underline">Enter Pincode</button>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <a href="#" className="hover:underline">Track Order</a>
              <a href="#" className="hover:underline">Customer Support</a>
              <a href="#" className="hover:underline">Find a Store</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="border-b">
        <div className="container py-3">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700"
                onClick={toggleMenu}
              >
                <Menu />
              </Button>
            </div>
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-[#13455C]">Vihas</a>
            </div>
            
            {/* Search (hidden on mobile) */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search for products" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#13455C]/30"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            {/* Icons */}
            <div className="flex items-center space-x-1 md:space-x-3">
              <a href="#" className="hidden md:flex flex-col items-center p-2">
                <User size={20} className="text-gray-700" />
                <span className="text-xs mt-1">Account</span>
              </a>
              <a href="#" className="hidden md:flex flex-col items-center p-2">
                <Heart size={20} className="text-gray-700" />
                <span className="text-xs mt-1">Wishlist</span>
              </a>
              <a href="#" className="flex flex-col items-center p-2 relative">
                <ShoppingCart size={20} className="text-gray-700" />
                <span className="text-xs mt-1">Cart</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories navigation (desktop) */}
      <div className="hidden lg:block border-b bg-white">
        <div className="container">
          <ul className="flex justify-between py-3 text-sm font-medium overflow-x-auto">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="relative px-1"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <a href="#" className="hover:text-[#13455C] whitespace-nowrap flex items-center">
                  {category}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </a>
                
                {hoveredCategory === category && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 min-w-[250px] z-50 border">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      <a href="#" className="hover:text-[#13455C] py-1">All {category}</a>
                      <a href="#" className="hover:text-[#13455C] py-1">New Arrivals</a>
                      <a href="#" className="hover:text-[#13455C] py-1">Best Sellers</a>
                      <a href="#" className="hover:text-[#13455C] py-1">On Sale</a>
                      <a href="#" className="hover:text-[#13455C] py-1">Premium</a>
                      <a href="#" className="hover:text-[#13455C] py-1">Budget Friendly</a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile search (visible only on mobile) */}
      <div className="block md:hidden border-b">
        <div className="container py-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for products" 
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#13455C]/30"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="container py-4">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <span className="text-xl font-bold text-[#13455C]">Vihas</span>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="text-gray-700" />
              </Button>
            </div>
            
            <div className="mb-6 flex items-center">
              <User className="mr-4 text-[#13455C]" />
              <div>
                <p className="font-medium">Welcome</p>
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-[#13455C]">Login</a>
                  <span>|</span>
                  <a href="#" className="text-[#13455C]">Register</a>
                </div>
              </div>
            </div>
            
            <ul className="space-y-4 mb-6">
              {categories.map((category, index) => (
                <li key={index} className="border-b border-gray-100 pb-3">
                  <a href="#" className="flex justify-between items-center text-gray-700 font-medium">
                    {category}
                    <ChevronDown className="w-5 h-5" />
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-gray-700">
                <Heart size={18} />
                <span>My Wishlist</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-700">
                <ShoppingCart size={18} />
                <span>My Cart</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-700">
                <Phone size={18} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
