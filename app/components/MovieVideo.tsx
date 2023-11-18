import React from "react";
import prisma from "../utils/db";
import { Button } from "@/components/ui/button";

export async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });

  return data;
}

async function MovieVideo() {
  const data = await getData();
  return (
    <div
      className="
          h-[55vh]
          lg:h-[60vh]
          w-full
          flex
          justify-start
          items-center
          
          "
    >
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="
          w-full
          absolute
          top-0
          left-0
          h-[65vh]
          object-cover
          -z-10
          brightness-[60%]
          "
      ></video>

      <div className=" absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white mt-5 text-lg line-clamp-3">{data?.overview}</p>
        <div className="mt-4 flex gap-x-3">
          <Button>See More</Button>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default MovieVideo;
