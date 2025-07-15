"use client";

import React from "react";
import { Search } from "lucide-react";

interface SearchFormProps {
  query: string;
  onQueryChange: (query: string) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  query,
  onQueryChange,
  isLoading,
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-2xl mx-auto mb-8"
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search for a TV show..."
          className="w-full p-4 pr-12 text-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-500 dark:placeholder-gray-400"
          disabled={isLoading}
        />
        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 dark:text-gray-400">
          <Search className="h-6 w-6" />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
