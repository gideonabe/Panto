"use client"

import { images } from '@/constants';
import { MoveLeft, MoveRight } from 'lucide-react';
import React, { act, useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Bestselling = () => {
  const [activeTab, setActiveTab] = useState("chair");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const tabs = [
    {id: "chair", label: "Chair" },
    {id: "beds", label: "Beds"},
    {id: "sofa", label: "Sofa"},
    {id: "lamp", label: "Lamp"},
  ]

  const chairs = [
    { image: images.chair1, label: 'Chair', name: 'Sakarias Chair', price: 392 },
    { image: images.chair2, label: 'Chair', name: 'Baltsar Chair', price: 299 },
    { image: images.chair3, label: 'Chair', name: 'Anjay Chair', price: 519 },
    { image: images.chair4, label: 'Chair', name: 'Nyantuy Chair', price: 921 },
    { image: images.chair1, label: 'Chair', name: 'Sakarias Chair', price: 392 },
    { image: images.chair2, label: 'Chair', name: 'Baltsar Chair', price: 299 },
    { image: images.chair3, label: 'Chair', name: 'Anjay Chair', price: 519 },
    { image: images.chair4, label: 'Chair', name: 'Nyantuy Chair', price: 921 },
  ];

  const beds = [
    {
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Aurelia Bed",
      price: 799,
    },
    {
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Luna Bed",
      price: 899,
    },
    {
      image: "https://images.unsplash.com/photo-1560184897-502a475f7a0d?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Orion Bed",
      price: 1050,
    },
    {
      image: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Zenith Bed",
      price: 1200,
    },
    {
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Aurelia Bed",
      price: 799,
    },
    {
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Luna Bed",
      price: 899,
    },
    {
      image: "https://images.unsplash.com/photo-1560184897-502a475f7a0d?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Orion Bed",
      price: 1050,
    },
    {
      image: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=700&auto=format&fit=crop&q=60",
      label: "Bed",
      name: "Zenith Bed",
      price: 1200,
    },
  ];
  
  const sofas = [
    {
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Maya Sofa",
      price: 699,
    },
    {
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Nara Sofa",
      price: 850,
    },
    {
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Caspian Sofa",
      price: 1100,
    },
    {
      image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Elysia Sofa",
      price: 950,
    },
    {
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Maya Sofa",
      price: 699,
    },
    {
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Nara Sofa",
      price: 850,
    },
    {
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Caspian Sofa",
      price: 1100,
    },
    {
      image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=700&auto=format&fit=crop&q=60",
      label: "Sofa",
      name: "Elysia Sofa",
      price: 950,
    },
  ];
  
  const lamps = [
    {
      image: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Aurora Lamp",
      price: 120,
    },
    {
      image: "https://images.unsplash.com/photo-1475783006851-1d68dd683eff?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Nova Lamp",
      price: 145,
    },
    {
      image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Luna Lamp",
      price: 160,
    },
    {
      image: "https://images.unsplash.com/photo-1553797794-4c4d2c55dbfb?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Sol Lamp",
      price: 180,
    },
    {
      image: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Aurora Lamp",
      price: 120,
    },
    {
      image: "https://images.unsplash.com/photo-1475783006851-1d68dd683eff?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Nova Lamp",
      price: 145,
    },
    {
      image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Luna Lamp",
      price: 160,
    },
    {
      image: "https://images.unsplash.com/photo-1553797794-4c4d2c55dbfb?w=700&auto=format&fit=crop&q=60",
      label: "Lamp",
      name: "Sol Lamp",
      price: 180,
    },
  ];
  

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 640){
        setVisibleCount(1); // mobile
      } else if(window.innerWidth < 1024){
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize(); //initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);


  const Prev = () => {
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0))
  }

  const Next = (items) => {
    setCurrentIndex((prev) => 
      Math.min(prev + visibleCount, items.length - visibleCount)
    );
  };

  const getItemsForTab = () => {
    switch (activeTab) {
      case 'chair':
        return chairs;
      case 'beds':
        return beds; 
      case 'sofa':
        return sofas; 
      case 'lamp':
        return lamps;
      default:
        return [];
    }
  };

  const renderTabContent = () => {
    const items = getItemsForTab();
    const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

    return (
      <div className="flex items-center gap-4 w-full relative">
        <button
          onClick={Prev}
          disabled={currentIndex === 0}
          className="disabled:opacity-30 absolute -left-6"
        >
          <MoveLeft className="text-btntext w-10 h-10 bg-white p-2 rounded-full shadow-xl" />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {visibleItems.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
        <button
          onClick={() => Next(items)}
          disabled={currentIndex + visibleCount >= items.length}
          className="disabled:opacity-30 absolute -right-6"
        >
          <MoveRight className="text-btntext w-10 h-10 bg-white p-2 rounded-full shadow-xl" />
        </button>
      </div>
    );
  };



  return (
    <section className='max-w-full p-6 bg-gray'>
      <div className='max-w-[90%] mx-auto'>
        <p className='text-center font-bold text-4xl mb-4'>Bestselling</p>
        <div className='max-w-[50%] mx-auto mb-4'>
          <nav className='flex justify-between w-full px-2 py-2 rounded-full bg-gray-200'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 text-sm md:text-base text-graytext font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white rounded-full"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab content */}
        <div className='w-full'>{renderTabContent()}</div>

        <div className='w-full flex justify-center mt-6'>
          <p className=' text-center flex items-center text-orange font-normal text-sm md:text-base'>View all <MoveRight className='w-10 h-5 text-orange'/></p>
        </div>
      </div>
    </section>
  )
}

export default Bestselling