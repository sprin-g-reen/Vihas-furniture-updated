
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      {/* Newsletter section */}
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-[#13455C]">Subscribe to our newsletter</h3>
              <p className="text-gray-600">Stay updated with our latest offers and launches</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex max-w-md mx-auto md:mx-0">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-l-lg w-full md:w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13455C]/30"
                />
                <button className="bg-[#13455C] text-white px-4 py-3 rounded-r-lg hover:bg-opacity-90 transition-colors flex items-center">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="bg-[#13455C] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Vihas Furniture</h2>
              <p className="text-white/80 mb-6 max-w-md">
                Premium furniture crafted with care to transform your living spaces. Quality that lasts a lifetime.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Corporate</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Store Locator</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white">Mattresses</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Sofas</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Beds</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Dining Sets</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Wardrobes</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">TV Units</a></li>
              </ul>
            </div>
            
            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white/80">123 Furniture Street, Design District, Bangalore, Karnataka - 560001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-white/80">1800-456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href="mailto:info@vihasfurniture.com" className="text-white/80 hover:text-white">info@vihasfurniture.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="font-medium mb-2">We Accept</h4>
                <div className="flex space-x-3">
                  <div className="bg-white/10 rounded-md p-2 w-12 h-8"></div>
                  <div className="bg-white/10 rounded-md p-2 w-12 h-8"></div>
                  <div className="bg-white/10 rounded-md p-2 w-12 h-8"></div>
                  <div className="bg-white/10 rounded-md p-2 w-12 h-8"></div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/80 text-sm">
                  © {currentYear} Vihas Furniture. All rights reserved.
                </p>
                <div className="flex space-x-4 justify-center md:justify-end mt-2 text-sm">
                  <a href="#" className="text-white/80 hover:text-white">Privacy Policy</a>
                  <a href="#" className="text-white/80 hover:text-white">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
