import axios from 'axios';
import { SearchResult, Show } from '@/types';

const API_BASE_URL = 'https://api.tvmaze.com';

// This function now inspects the error to provide a better message
export const searchShows = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.get<SearchResult[]>(`${API_BASE_URL}/search/shows`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    // Check if it's an Axios error
    if (axios.isAxiosError(error)) {
      // Check if it's a network error (e.g., no internet connection)
      if (error.code === 'ERR_NETWORK') {
        throw new Error('Network Error: Please check your internet connection.');
      }
    }
    // For all other types of errors
    console.error('Error fetching shows:', error);
    throw new Error('An unexpected error occurred while fetching shows.');
  }
};

// We'll apply the same logic to the getShowDetails function
export const getShowDetails = async (id: string): Promise<Show> => {
  try {
    const response = await axios.get<Show>(`${API_BASE_URL}/shows/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ERR_NETWORK') {
        throw new Error('Network Error: Please check your internet connection.');
      }
      // The API returns 404 for shows not found, which is an expected error
      if (error.response?.status === 404) {
        throw new Error('Show not found.');
      }
    }
    console.error(`Error fetching details for show ${id}:`, error);
    throw new Error('An unexpected error occurred while fetching show details.');
  }
};
