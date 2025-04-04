
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vihas-secondary text-white">
      {/* Newsletter section */}
      <div className="bg-vihas-primary py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-white/80">Stay updated with our latest offers and product releases</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-l-lg w-full md:w-64 text-gray-800 focus:outline-none"
                />
                <button className="bg-vihas-secondary text-white px-4 py-3 rounded-r-lg hover:bg-opacity-90 transition-colors flex items-center">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Vihas Furniture</h2>
            <p className="text-white/70 mb-6">
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
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white">Mattresses</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Sofas</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Beds</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Dining Sets</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Wardrobes</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">TV Units</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white">Track Your Order</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Shipping & Delivery</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Returns & Refunds</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">123 Furniture Street, Design District, Bangalore, Karnataka - 560001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-white/70">1800-456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@vihasfurniture.com" className="text-white/70 hover:text-white">info@vihasfurniture.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-white/70 text-sm">
                © {currentYear} Vihas Furniture. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
