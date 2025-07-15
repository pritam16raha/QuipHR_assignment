import { render, screen } from "@testing-library/react";
import ShowDetailPage from "../shows/[id]/page";
import { getShowDetails } from "@/lib/api";
import { notFound } from "next/navigation";

jest.mock("@/lib/api");
const mockedGetShowDetails = getShowDetails as jest.Mock;

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  notFound: jest.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));
const mockedNotFound = notFound as unknown as jest.Mock;

describe("ShowDetailPage", () => {
  beforeEach(() => {
    mockedGetShowDetails.mockClear();
    mockedNotFound.mockClear();
  });

  it("should render show details when data is fetched successfully", async () => {
    const mockShow = {
      id: 1,
      name: "The Best Show Ever",
      summary: "<p>A <b>great</b> summary.</p>",
      rating: { average: 9.2 },
      premiered: "2025-01-15",
      status: "Running",
      genres: ["Drama", "Thriller"],
    };
    mockedGetShowDetails.mockResolvedValue(mockShow);

    const pageProps = { params: Promise.resolve({ id: "1" }) };
    const PageComponent = await ShowDetailPage(pageProps);
    render(PageComponent);
    expect(
      screen.getByRole("heading", { name: "The Best Show Ever" })
    ).toBeInTheDocument();
    expect(screen.getByText("A great summary.")).toBeInTheDocument();
    expect(screen.getByText("9.2/10")).toBeInTheDocument();
  });

  it("should call notFound when the show does not exist", async () => {
    mockedGetShowDetails.mockRejectedValue(new Error("Show not found."));
    const pageProps = { params: Promise.resolve({ id: "999" }) };
    await expect(ShowDetailPage(pageProps)).rejects.toThrow("NEXT_NOT_FOUND");
    expect(mockedNotFound).toHaveBeenCalledTimes(1);
  });
});
