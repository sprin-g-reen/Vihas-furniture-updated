
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Phone, Heart, ChevronDown } from 'lucide-react';
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-vihas-secondary text-white py-1">
        <div className="container flex justify-end items-center text-xs">
          <div className="flex items-center mr-4">
            <Phone className="w-3 h-3 mr-1" />
            <span>1800-456-7890</span>
          </div>
          <a href="#" className="hover:underline">Track Order</a>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-vihas-secondary"
              onClick={toggleMenu}
            >
              <Menu />
            </Button>
          </div>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <a href="/" className="text-2xl font-bold text-vihas-primary">Vihas Furniture</a>
          </div>
          
          {/* Search (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for products" 
                className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-vihas-primary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:inline-flex items-center">
              <User size={20} className="text-vihas-secondary" />
            </button>
            <button className="hidden md:inline-flex items-center">
              <Heart size={20} className="text-vihas-secondary" />
            </button>
            <button className="relative">
              <ShoppingCart size={20} className="text-vihas-secondary" />
              <span className="absolute -top-1 -right-1 bg-vihas-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Categories navigation (desktop) */}
      <div className="hidden lg:block border-t">
        <div className="container">
          <ul className="flex justify-between py-3 text-sm font-medium overflow-x-auto">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="relative"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <a href="#" className="hover:text-vihas-primary whitespace-nowrap flex items-center">
                  {category}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </a>
                
                {hoveredCategory === category && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 min-w-[200px] z-50">
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-vihas-primary block py-1">All {category}</a></li>
                      <li><a href="#" className="hover:text-vihas-primary block py-1">New Arrivals</a></li>
                      <li><a href="#" className="hover:text-vihas-primary block py-1">Best Sellers</a></li>
                      <li><a href="#" className="hover:text-vihas-primary block py-1">On Sale</a></li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="container py-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-vihas-primary">Vihas Furniture</span>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="text-vihas-secondary" />
              </Button>
            </div>
            
            <div className="mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products" 
                  className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-vihas-primary"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <ul className="space-y-4">
              {categories.map((category, index) => (
                <li key={index} className="border-b border-gray-100 pb-2">
                  <a href="#" className="flex justify-between items-center text-vihas-secondary font-medium">
                    {category}
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 space-y-4">
              <Button variant="ghost" className="flex items-center gap-2 w-full justify-start">
                <User size={18} className="text-vihas-secondary" />
                <span>Account</span>
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 w-full justify-start">
                <Heart size={18} className="text-vihas-secondary" />
                <span>Wishlist</span>
              </Button>
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-vihas-secondary" />
                  <span>1800-456-7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
