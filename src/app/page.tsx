'use client';

import React, { useState, useEffect } from 'react';
import SearchForm from '@/components/shows/SearchForm';
import ShowGrid from '@/components/shows/ShowGrid';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { searchShows } from '@/lib/api';
import { SearchResult } from '@/types';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // This useEffect hook implements the correct debounce logic
  useEffect(() => {
    // If the search query is empty, clear the results and do nothing else.
    if (query.trim() === '') {
      setShows([]);
      setError(null);
      return;
    }

    // Set a timer to make the API call after 500ms of inactivity.
    const timerId = setTimeout(() => {
      // Set loading to true ONLY when the API call is about to start.
      setIsLoading(true);
      setError(null);

      searchShows(query)
        .then(results => {
          setShows(results);
        })
        .catch(err => {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred.');
          }
        })
        .finally(() => {
          // Set loading to false after the API call is complete.
          setIsLoading(false);
        });
    }, 1000); // 500ms delay

    // This is the cleanup function. If the user types again,
    // it clears the previous timer, cancelling the scheduled API call.
    return () => clearTimeout(timerId);

  }, [query]); // This effect re-runs every time the user types a new character.

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Next Favorite Show</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
        Use the search bar below to discover information about any TV show.
      </p>
      
      <SearchForm 
        query={query}
        onQueryChange={setQuery}
        isLoading={isLoading} 
      />

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      
      {!isLoading && !error && query && (
        <ShowGrid shows={shows} />
      )}
      
      {!query && !isLoading && (
         <div className="mt-16 text-gray-500 dark:text-gray-500">
            <p>Start by typing a show&apos;s name in the search bar above.</p>
         </div>
      )}
    </div>
  );
}
