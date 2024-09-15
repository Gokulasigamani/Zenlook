import React from "react";
import PriceCard from "./PriceCard";
function PriceList() {
  const prices = [
    {
      plan: "Basic",
      amt: 345.89,
      services: [
        "Up to 5 pages (Home, About,Services, Contact, etc.)",
        "Bacis SEO Optimization",
        "Responsive Design (Mobile & Tabtet Friendly)",
        "Social Media Integration",
        "Basic Contact Form",
        "Delivery: 2-3 Weeks",
      ],
    },
    {
      plan: "Standard",
      amt: 345.89,
      services: [
        "Up to 10 pages (Home, About,Services, Contact, etc.)",
        "Advanced SEO Optimization",
        "Responsive Design (Mobile & Tablet Friendly)",
        "Social Media Integration",
        "Custom Contact Forms & Integrations",
        "Delivery: 3-4 Weeks",
      ],
    },
    {
      plan: "Premium",
      amt: 345.89,
      services: [
        "Up to 20 pages",
        "Full SEO Optimization",
        "Custom Responsive Design",
        "Social Media Integration",
        "Advanced Contact Forms & CRM Integration",
        "Full E-commerce Functionality (Unlimited Products)",
        "Content Management System",
        "Delivery: 4-6 Weeks",
      ],
    },
  ];
  return (
    <div className="mb-28">
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d97] to-[#ff6ac4] text-5xl font-bold mb-24">
        The Pricing Behind Our Website <br /> Solutions
      </h2>

      <div className="flex justify-around gap-6">
        {prices.map((price, index) => (
          <PriceCard key={index} price={price} />
        ))}
      </div>
    </div>
  );
}

export default PriceList;
