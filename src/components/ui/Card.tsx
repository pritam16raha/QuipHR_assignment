'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import { Star } from 'lucide-react';
import { Show } from '@/types';
import { motion } from 'framer-motion';

interface CardProps {
  show: Show;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Card: React.FC<CardProps> = ({ show }) => {
  const imageUrl = show.image?.medium || 'https://placehold.co/210x295/e5e7eb/374151?text=No+Image';

  return (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
      <Link href={`/shows/${show.id}`} className="block group h-full">
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300 h-full flex flex-col">
          <div className="relative w-full h-72">
             {/* Replace the <img> tag with the <Image> component */}
             <Image
                src={imageUrl}
                alt={show.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                className="object-cover"
              />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg truncate flex-grow">{show.name}</h3>
            <div className="flex items-center mt-2">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="text-gray-600 dark:text-gray-300">
                {show.rating?.average ? show.rating.average.toFixed(1) : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
