import { Link } from 'react-router-dom';
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
          <Link
            to={`blogs/1`}
            className="rounded-md bg-gradient-to-r from-rose-400 to-orange-300 hover:bg-black transition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-orange-50 text-4xl group-hover:scale-110 group-hover:tracking-wider transition-on">
                This Website
              </h2>
            </div>
          </Link>
          <Link
            to={`blogs/1`}
            className="rounded-md bg-gradient-to-r from-rose-400 to-orange-300 hover:bg-black transition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-orange-50 text-4xl group-hover:scale-110 group-hover:tracking-wider transition-on">
                Where
              </h2>
            </div>
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-sans text-orange-50 text-2xl group-hover:scale-110 group-hover:tracking-wider transition-on">
                Unreal Engine 4
              </h2>
            </div>
          </Link>
          <Link
            to={`blogs/1`}
            className="rounded-md bg-gradient-to-r from-rose-400 to-orange-300 hover:bg-black transition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-orange-50 text-4xl group-hover:scale-110 group-hover:tracking-wider transition-on">
                This Website
              </h2>
            </div>
          </Link>
          <Link
            to={`blogs/1`}
            className="rounded-md bg-gradient-to-r from-rose-400 to-orange-300 hover:bg-black transition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-orange-50 text-4xl group-hover:scale-110 group-hover:tracking-wider transition-on">
                This Website
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
