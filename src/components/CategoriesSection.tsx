
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    { 
      name: "Mattresses", 
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      count: "120+ Products"
    },
    { 
      name: "Sofas", 
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      count: "95+ Products"
    },
    { 
      name: "Beds", 
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      count: "80+ Products"
    },
    { 
      name: "Dining Sets", 
      image: "/lovable-uploads/e5e79267-a66f-4dc6-8d0e-b67a84f08ced.png",
      count: "60+ Products"
    },
    { 
      name: "Wardrobes", 
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      count: "45+ Products" 
    },
    { 
      name: "TV Units", 
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      count: "35+ Products"
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#13455C] mb-2">Shop By Category</h2>
            <p className="text-gray-500 max-w-2xl">Explore our wide range of furniture collections</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-[#13455C] font-medium mt-4 md:mt-0 group">
            View All Categories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href="#"
              className="block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium text-[#13455C]">{category.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{category.count}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-[#13455C] font-medium">
            View All Categories <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
