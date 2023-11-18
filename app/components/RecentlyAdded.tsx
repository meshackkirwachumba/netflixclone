import React from "react";
import prisma from "../utils/db";
import Image from "next/image";
import MovieCard from "./MovieCard";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      title: true,
      overview: true,
      youtubeString: true,
      release: true,
      WatchLists: true,
      imageString: true,
      age: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}

async function RecentlyAdded() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {data.map((movie) => (
        <div key={movie.id} className="h-48 relative">
          <Image
            src={movie.imageString}
            width={500}
            height={400}
            alt={movie.title}
            className="object-cover rounded-sm absolute w-full h-full"
          />

          {/* shown when hovering */}
          <div
            className="
              h-60 relative z-10 w-full transform transition duration-500 hover:scale-125
              opacity-0 hover:opacity-100
              "
          >
            {/* wrapper for image and movie card */}
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              <Image
                src={movie.imageString}
                width={800}
                height={800}
                alt={movie.title}
                className="-z-10 object-cover rounded-lg absolute w-full h-full"
              />
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                watchListId={movie.WatchLists[0]?.id}
                youtubeUrl={movie.youtubeString}
                watchList={movie.WatchLists.length > 0 ? true : false}
                year={movie.release}
                age={movie.age}
                time={movie.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentlyAdded;
