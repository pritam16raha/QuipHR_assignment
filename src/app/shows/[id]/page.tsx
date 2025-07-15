import { getShowDetails } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, Tv, Calendar } from "lucide-react";
import type { Metadata } from "next";

interface ShowDetailPageProps {
  params: Promise<{ id: string }>;
}

async function fetchShowData(id: string) {
  try {
    const show = await getShowDetails(id);
    return show;
  } catch {
    notFound();
  }
}

export async function generateMetadata({
  params,
}: ShowDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const show = await fetchShowData(resolvedParams.id);

  return {
    title: `${show.name} | ShowScout`,
    description: show.summary
      ? show.summary.replace(/<[^>]*>?/gm, "").substring(0, 160)
      : "No summary available.",
    openGraph: {
      title: `${show.name} | ShowScout`,
      description: show.summary
        ? show.summary.replace(/<[^>]*>?/gm, "").substring(0, 160)
        : "No summary available.",
      images: show.image?.original ? [{ url: show.image.original }] : [],
    },
  };
}

export default async function ShowDetailPage({ params }: ShowDetailPageProps) {
  const { id } = await params;
  const show = await fetchShowData(id);

  const cleanSummary = show.summary
    ? show.summary.replace(/<[^>]*>?/gm, "")
    : "No summary available.";
  const imageUrl =
    show.image?.original ||
    "https://placehold.co/400x592/1f2937/FFFFFF?text=No+Image";

  return (
    <div className="max-w-5xl mx-auto px-4 md:pt-12">
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/3 mb-6 md:mb-0 w-3/4 sm:w-1/2">
          <div className="relative aspect-[2/3] rounded-lg shadow-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={show.name}
              fill
              sizes="(max-width: 520px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{show.name}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 dark:text-gray-300 mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1.5" />
              <span>
                {show.rating?.average ? `${show.rating.average}/10` : "N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-400 mr-1.5" />
              <span>{show.premiered?.substring(0, 4) || "N/A"}</span>
            </div>
            <div className="flex items-center">
              <Tv className="h-5 w-5 text-green-400 mr-1.5" />
              <span
                className={`px-2 py-0.5 rounded-full text-sm ${
                  show.status === "Ended"
                    ? "bg-red-500/20 text-red-300"
                    : "bg-green-500/20 text-green-300"
                }`}
              >
                {show.status}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {show.genres.map((genre) => (
              <span
                key={genre}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 text-sm rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-semibold border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4">
            Summary
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {cleanSummary}
          </p>
        </div>
      </div>
    </div>
  );
}
