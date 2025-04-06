import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date("2025-04-15T23:59:59");
      const now = new Date();
      const difference = endDate - now;

      return difference > 0
        ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          }
        : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-8 md:py-0">
      {/* Desktop Hero */}
      <div className="hidden md:block">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
            alt="Modern living room furniture" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="container">
              <div className="max-w-lg text-white animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Home with Vihas Furniture</h1>
                <p className="mb-6 text-lg">Elevate your living spaces with our premium furniture collection at unbeatable prices</p>
                <div className="flex gap-4">
                  <Button className="btn-primary">Shop Now</Button>
                  <Button variant="outline" className="bg-white hover:bg-gray-100 text-vihas-secondary">View Collection</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="md:hidden">
        <div className="container">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
            alt="Modern living room furniture" 
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
          <div className="text-center px-4 py-6 bg-vihas-light rounded-lg animate-fade-in">
            <h1 className="text-3xl font-bold mb-4 text-vihas-secondary">Transform Your Home with Vihas Furniture</h1>
            <p className="mb-6">Elevate your living spaces with our premium furniture collection</p>
            <Button className="btn-primary w-full mb-2">Shop Now</Button>
            <Button variant="outline" className="w-full">View Collection</Button>
          </div>
        </div>
      </div>

      {/* Sale Timer and Bank Offers */}
  {/* Sale Timer and Bank Offers */}
<div className="bg-[#fff3e8] py-6">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch gap-4">
    {/* Timer Box */}
    <div className="flex items-center justify-between border border-red-200 rounded-lg p-4 w-full md:w-1/2 bg-white">
      <div className="flex items-center">
        <img
          src="/HU_sale_unit.avif"
          alt="Home Upgrade Sale"
          className="w-16 h-16 object-contain mr-4"
        />
        <div>
          <p className="text-black text-base font-semibold mb-1">Sale Ends In:</p>
          <div className="flex gap-2 text-[#ff4d00] font-bold text-xl">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <div className="text-center" key={unit}>
                <span>{String(timeLeft[unit]).padStart(2, "0")}</span>
                <br />
                <span className="text-xs text-gray-600 capitalize">
                  {unit === "hours" ? "Hrs" : unit === "minutes" ? "Mins" : unit === "seconds" ? "Secs" : "Days"}
                </span>
                {idx < 3 && <span className="mx-1">:</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-l h-14 mx-4"></div>

      <div className="flex items-center gap-1">
        <img src="/kotak.avif" alt="Bank" className="w-6 h-6" />
        <img src="/rbl.avif" alt="Bank" className="w-6 h-6" />
        <img src="/amex.avif" alt="Bank" className="w-6 h-6" />
        <div className="ml-2 text-green-600 text-sm font-semibold">
          up to <span className="text-green-800 text-base">10% OFF</span> <span>››</span>
        </div>
      </div>
    </div>

    {/* Why Wakefit Box */}
    <div className="border border-red-200 rounded-lg p-4 w-full md:w-1/2 bg-white flex items-center justify-between">
      <div className="flex items-center gap-6 w-full">
        <div className="text-left whitespace-nowrap">
          <p className="text-purple-500 font-semibold text-sm">Why</p>
          <p className="text-purple-700 font-bold text-lg -mt-1">wakefit?</p>
        </div>

        <div className="flex items-center justify-between flex-1 text-center text-gray-700 text-sm gap-4">
          <div>
            <img src="/smiley.avif" className="w-6 h-6 mx-auto mb-1" alt="Customers" />
            <p className="font-medium text-purple-700">25 Lakhs+</p>
            <p className="text-xs">Customers</p>
          </div>
          <div>
            <img src="/shipping.avif" className="w-6 h-6 mx-auto mb-1" alt="Shipping" />
            <p className="font-medium text-purple-700">Free Shipping</p>
          </div>
          <div>
            <img src="/tools.avif" className="w-6 h-6 mx-auto mb-1" alt="Installation" />
            <p className="font-medium text-purple-700">Free Installation</p>
          </div>
          <div>
            <img src="/warranty.avif" className="w-6 h-6 mx-auto mb-1" alt="Warranty" />
            <p className="font-medium text-purple-700">Best Warranty</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default HeroSection;
