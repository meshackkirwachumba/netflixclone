import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import React from "react";

interface MovieCardProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

function MovieCard({
  title,
  overview,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
  year,
  age,
  time,
}: MovieCardProps) {
  return (
    <>
      <button>
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="absolute top-5 right-5 z-10">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 fill-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 absolute bottom-5 left-5 z-10">
        <h1 className="line-clamp-1 font-bold text-lg">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="line-clamp-1 font-light text-gray-200 text-sm">
          {overview}
        </p>
      </div>
    </>
  );
}

export default MovieCard;
