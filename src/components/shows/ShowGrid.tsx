"use client";

import React from "react";
import Card from "@/components/ui/Card";
import { SearchResult } from "@/types";
import { motion } from "framer-motion";

interface ShowGridProps {
  shows: SearchResult[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ShowGrid: React.FC<ShowGridProps> = ({ shows }) => {
  if (shows.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-16">
        <p className="text-xl">No shows found. Try another search!</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-screen-lg mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {shows.map((showResult) => (
        <Card key={showResult.show.id} show={showResult.show} />
      ))}
    </motion.div>
  );
};

export default ShowGrid;
