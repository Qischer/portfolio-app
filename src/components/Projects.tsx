import { Parallax } from 'react-scroll-parallax';

function Projects() {
  return (
    <div className="h-screen">
      <div className="h-1/5 relative">
        <Parallax speed={-2}>
          <div className="h-2/5 absolute inset-x-0 bottom-0 items-center justify-center ">
            <h1 className="text-stone-500 text-6xl">🚀</h1>
            <h1 className="text-stone-500 text-xl">Some stuff I built.</h1>
          </div>
        </Parallax>
      </div>
      <div className="h-3/5 relative m-3">
        <div className="h-full max-w-7xl grid gap-3 grid-cols-2 sm:grid-cols-3 grid-rows-2 m-auto">
          <div className="rounded-md bg-rose-400"></div>
          <div className="rounded-md bg-rose-400"></div>
          <div className="rounded-md bg-rose-400"></div>
          <div className="rounded-md bg-rose-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
