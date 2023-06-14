import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Socials from './Socials';

function Intro() {
  const diag = [
    'Hi, this is Mark Nguy!',
    'Hi again! this is still Khai Nguy',
    'Oh, hello again! Surprisingly, This is Mark Nguy',
    'Good Question.',
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="shadow-inner relative h-screen bg-gradient-to-r from-rose-400 to-orange-300 ">
      <div className="absolute inset-0 sm:inset-y-0 sm:left-0 sm:w-1/2 flex items-center justify-center rounded-md">
        <Parallax
          speed={-10}
          onExit={() => {
            if (index === diag.length - 1) setIndex(0);
            else setIndex(index + 1);
          }}
        >
          <h1 className="font-serif text-3xl text-orange-200">{diag[index]}</h1>
          <h2 className="font-serif text-2xl text-orange-200">
            Software Engineer
          </h2>
          <Socials />
        </Parallax>
      </div>
    </div>
  );
}

export default Intro;
