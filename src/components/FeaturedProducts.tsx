import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Comfort Plus Queen Mattress",
      category: "Mattresses",
      price: 15999,
      originalPrice: 21999,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      rating: 4.7
    },
    {
      id: 2,
      name: "Vienna 3-Seater Sofa",
      category: "Sofas",
      price: 24999,
      originalPrice: 34999,
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      rating: 4.5
    },
    {
      id: 3,
      name: "Florence Queen Bed",
      category: "Beds",
      price: 18999,
      originalPrice: 27999,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      rating: 4.8
    },
    {
      id: 4,
      name: "Monaco Dining Set",
      category: "Dining",
      price: 29999,
      originalPrice: 39999,
      image: "/lovable-uploads/e5e79267-a66f-4dc6-8d0e-b67a84f08ced.png",
      rating: 4.6
    }
  ];

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#13455C] mb-2">Best Sellers</h2>
            <p className="text-gray-500">Premium furniture for your home</p>
          </div>
          <Button variant="outline" className="hidden md:flex border-[#13455C] text-[#13455C] group">
            View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-[#13455C]" />
                </div>
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                <h3 className="font-medium text-[#13455C] mb-1 truncate">{product.name}</h3>
                <div className="mb-2">
                  {renderRating(product.rating)}
                </div>
                <div className="flex items-center mb-3">
                  <span className="font-bold text-lg text-[#13455C]">{formatPrice(product.price)}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">{formatPrice(product.originalPrice)}</span>
                </div>
                <Button className="w-full bg-[#13455C] hover:bg-opacity-90 text-white flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="border-[#13455C] text-[#13455C]">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
