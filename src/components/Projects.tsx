function Projects() {
  const thumbnail = [
    <div className="h-full w-full relative">
      <img
        className="absolute sm:-top-1/2 -top-16 sm:scale-100 scale-150 -right-1/4"
        src="./Mockup.png"
        alt=""
      />
      <div className=" lg:w-3/5 absolute inset-y-0 flex items-end">
        <div className=" z-5">
          <h1 className="text-stone-700 font-serif text-left lg:px-16 px-10 font-bold text-4xl">
            {'<This Website/>'}
          </h1>
          <p className="text-stone-7000 font-serif text-left sm:px-16 px-10 pb-10 text-2xl">
            ReactJs
          </p>
        </div>
      </div>
    </div>,
    <div className="h-full w-full relative ">
      <img
        className="absolute scale-150 top-16 -right-16"
        src="./gt_mockup.png"
        alt=""
      />
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
            className={`row-span-1 overflow-hidden rounded-xl border-2 border-stone-700 bg-gradient-to-r from-rose-200 to-rose-200 hover:to-rose-100 transition-all ease-in-out ${
              i === 3 || i === 0 ? 'sm:col-span-2' : ''
            }`}
          >
            {thumbnail[i]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
