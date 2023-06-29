import { Link } from 'react-router-dom';

function Projects() {
  const urlList = ['/log/1', '/log/2', '/', '/'];

  const thumbnail = [
    <div className="h-full w-full relative">
      <img
        className="absolute sm:-top-1/2 -top-16 sm:scale-100 group-hover:sm:scale-125 scale-125 group-hover:scale-150 -right-1/4 transition-all ease-in-out"
        src="./Mockup.png"
        alt=""
      />
      <div className=" lg:w-3/5 absolute inset-y-0 flex items-end">
        <div className=" z-5">
          <h1 className="text-stone-700 font-serif text-left lg:px-16 px-10 font-bold text-4xl">
            {'<This Portfolio/>'}
          </h1>
          <p className="text-stone-7000 font-serif text-left sm:px-16 px-10 pb-10 text-2xl">
            ReactJs
          </p>
        </div>
      </div>
    </div>,
    <div className="h-full w-full relative ">
      <div className="group-hover:scale-125 group-hover:sm:scale-110 transition-all ease-in-out">
        <img
          className="absolute scale-150 top-16 -right-16"
          src="./gt_mockup.png"
          alt=""
        />
      </div>
      <div className=" lg:w-2/5 absolute inset-y-0 flex items-end">
        <div>
          <h1 className="text-stone-700 font-serif text-left lg:px-16 px-10 font-bold text-4xl">
            GT Web Survey
          </h1>
          <p className="text-stone-7000 font-serif text-left sm:px-16 px-10 pb-10 text-2xl">
            ReactJs
          </p>
        </div>
      </div>
    </div>,
    <div className="h-full w-full relative ">
      <div className=" lg:w-2/5 absolute inset-y-0 flex items-end">
        <div>
          <h1 className="text-stone-700 font-serif text-left lg:px-16 px-10 font-bold text-4xl">
            Harbour
          </h1>
          <p className="text-stone-7000 font-serif text-left sm:px-16 px-10 pb-10 text-2xl">
            Maya
          </p>
        </div>
      </div>
    </div>,
    <div className="h-full w-full bg-rose-200 bg-cover bg-center bg-blend-color-burn hover:bg-rose-200 relative transition-all ease-in-out">
      <div className=" lg:w-2/5 absolute inset-y-0 flex items-end">
        <div>
          <h1 className="text-stone-700 font-serif text-left lg:px-16 px-10 font-bold text-4xl">
            {' '}
            Where
          </h1>
          <p className="text-stone-700 font-serif text-left sm:px-16 px-10 pb-10 text-2xl">
            Unreal Engine 4
          </p>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <div className="grid auto-rows-[380px] sm:grid-cols-3 gap-4 mx-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 overflow-hidden rounded-xl border-2 border-stone-700 bg-gradient-to-r from-rose-200 to-rose-200 hover:to-rose-100 group ${
              i === 3 || i === 0 ? 'sm:col-span-2' : ''
            }`}
          >
            <Link to={urlList[i]}>{thumbnail[i]}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
