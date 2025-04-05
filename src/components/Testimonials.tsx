
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      comment: "The quality of the furniture is exceptional, and it's exactly as shown in the pictures. I'm very happy with my purchase from Vihas Furniture.",
      rating: 5,
      product: "Venice 3-Seater Sofa",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Rahul Khanna",
      location: "Delhi",
      comment: "Amazing comfort and quality. The delivery was on time, and the assembly service was professional. Will definitely buy again.",
      rating: 5,
      product: "Comfort Plus Mattress",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Ananya Patel",
      location: "Bangalore",
      comment: "The bed frame is sturdy and looks elegant. The customer service was exceptional throughout my buying journey.",
      rating: 4,
      product: "Florence Queen Bed",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const renderRating = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#13455C] mb-2">What Our Customers Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-6 rounded-lg relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-200 w-10 h-10" />
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#13455C]"
                />
                <div className="ml-4">
                  <h3 className="font-medium text-[#13455C]">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mb-3">
                {renderRating(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
              
              <div className="text-sm text-gray-500 mt-4 pt-4 border-t">
                Purchased: <span className="text-[#13455C] font-medium">{testimonial.product}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex items-center bg-[#13455C]/10 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-2" />
            <span className="font-medium text-[#13455C]">4.8 average rating from 10,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
