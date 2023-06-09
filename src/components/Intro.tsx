import { Parallax } from 'react-scroll-parallax';

function Intro() {
  return (
    <div className="shadow-inner relative h-screen bg-gradient-to-r from-rose-400 to-orange-300 ">
      <div className="absolute inset-0 sm:inset-y-0 sm:left-0 sm:w-1/2 flex items-center justify-center rounded-md">
        <Parallax speed={-10}>
          <h1 className="font-serif text-3xl text-orange-200">
            Hi, this is Mark Nguy!
          </h1>
          <h2 className="font-serif text-2xl text-orange-200">
            Software Engineer
          </h2>
        </Parallax>
      </div>
    </div>
  );
}

export default Intro;
