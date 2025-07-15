import axios from "axios";
import { SearchResult, Show } from "@/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.tvmaze.com";

export const searchShows = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.get<SearchResult[]>(
      `${API_BASE_URL}/search/shows`,
      {
        params: { q: query },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ERR_NETWORK") {
        throw new Error(
          "Network Error: Please check your internet connection."
        );
      }
    }
    console.error("Error fetching shows:", error);
    throw new Error("An unexpected error occurred while fetching shows.");
  }
};

export const getShowDetails = async (id: string): Promise<Show> => {
  try {
    const response = await axios.get<Show>(`${API_BASE_URL}/shows/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ERR_NETWORK") {
        throw new Error(
          "Network Error: Please check your internet connection."
        );
      }
      if (error.response?.status === 404) {
        throw new Error("Show not found.");
      }
    }
    console.error(`Error fetching details for show ${id}:`, error);
    throw new Error(
      "An unexpected error occurred while fetching show details."
    );
  }
};
