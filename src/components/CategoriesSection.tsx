
import React from 'react';

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
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",

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
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="section-title text-center">Shop By Category</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Explore our wide range of furniture collections designed to transform every space in your home
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-medium text-center">{category.name}</h3>
                  <p className="text-white/80 text-xs text-center">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
