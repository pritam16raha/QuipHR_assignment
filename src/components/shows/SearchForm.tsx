// 'use client'; // This is a client component because it uses state and event handlers

// import React, { useState } from 'react';
// import { Search } from 'lucide-react';

// // Define the props interface for the component
// interface SearchFormProps {
//   onSearch: (query: string) => void;
//   isLoading: boolean;
// }

// const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!query.trim()) return; // Don't search if the query is empty
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
//       <div className="relative">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for a TV show..."
//           className="w-full p-4 pr-12 text-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
//           disabled={isLoading}
//         />
//         <button
//           type="submit"
//           className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
//           disabled={isLoading}
//         >
//           <Search className="h-6 w-6" />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchForm;

'use client';

import React from 'react';
import { Search } from 'lucide-react';

// Define the props interface for the component
interface SearchFormProps {
  query: string;
  onQueryChange: (query: string) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ query, onQueryChange, isLoading }) => {
  // The form no longer needs its own state or submit handler
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search for a TV show..."
          className="w-full p-4 pr-12 text-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          disabled={isLoading}
        />
        <div
          className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 dark:text-gray-400"
        >
          <Search className="h-6 w-6" />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

