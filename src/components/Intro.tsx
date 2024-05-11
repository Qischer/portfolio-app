import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Socials from "./Socials";

function Intro() {
  const diag = [
    "Hi, this is Mark Nguy!",
    "Hi again! this is still Khai Nguy",
    "Oh, hello again! Mark Nguy is here",
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen">
      <div className="shadow-inner relative h-full bg-gradient-to-r from-rose-400 to-orange-300 ">
        <div className="absolute inset-0 sm:inset-y-0 sm:left-0 sm:w-1/2 flex items-center justify-center rounded-md">
          <Parallax
            speed={-10}
            onExit={() => {
              setIndex((index + 1) % diag.length);
            }}
          >
            <h1 className="font-serif text-3xl text-orange-200">
              {diag[index]}
            </h1>
            <h2 className="font-serif text-2xl text-orange-200">
              Software Engineer
            </h2>
            <Socials />
          </Parallax>
        </div>
      </div>
    </div>
  );
}

export default Intro;
