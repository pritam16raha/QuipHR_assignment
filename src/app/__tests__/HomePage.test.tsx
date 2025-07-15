import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "../page";
import { searchShows } from "@/lib/api";

jest.mock("@/lib/api");

jest.useFakeTimers();

const mockedSearchShows = searchShows as jest.Mock;

describe("HomePage", () => {
  beforeEach(() => {
    mockedSearchShows.mockClear();
  });

  it("renders the initial page with a heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /find your next favorite show/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("allows user to type in search bar and displays results on successful API call", async () => {
    const mockResults = [
      { show: { id: 1, name: "Test Show 1", rating: { average: 8.5 } } },
      { show: { id: 2, name: "Test Show 2", rating: { average: 9.0 } } },
    ];
    mockedSearchShows.mockResolvedValue(mockResults);

    render(<HomePage />);

    const searchInput = screen.getByPlaceholderText(/search for a tv show/i);

    fireEvent.change(searchInput, { target: { value: "test" } });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText("Test Show 1")).toBeInTheDocument();
      expect(screen.getByText("Test Show 2")).toBeInTheDocument();
    });
  });

  it("displays an error message if the API call fails", async () => {
    const errorMessage = "Network Error: Failed to fetch";
    mockedSearchShows.mockRejectedValue(new Error(errorMessage));

    render(<HomePage />);

    const searchInput = screen.getByPlaceholderText(/search for a tv show/i);

    fireEvent.change(searchInput, { target: { value: "fail" } });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
