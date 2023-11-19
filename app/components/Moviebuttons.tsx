"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface MoviebuttonsProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  release: number;
  duration: number;
}

function Moviebuttons({
  overview,
  youtubeUrl,
  id,
  age,
  title,
  release,
  duration,
}: MoviebuttonsProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModal
        key={id}
        state={open}
        changeState={setOpen}
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        age={age}
        release={release}
        duration={duration}
      />
    </>
  );
}

export default Moviebuttons;
