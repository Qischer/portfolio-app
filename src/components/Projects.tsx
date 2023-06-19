function Projects() {
  const thumbnail = [
    <div className="h-full w-full "></div>,
    <div className="h-full w-full "></div>,
    <div className="h-full w-full "></div>,
    <div className="h-full w-full bg-[url(public/where_tn.png)] bg-rose-100 bg-cover bg-center bg-blend-color-burn hover:bg-rose-200 relative transition-all ease-in-out">
      <div className=" lg:w-2/5 absolute inset-y-0 flex items-end">
        <div>
          <h1 className="text-orange-50 font-serif text-left lg:px-16 px-10 font-bold text-4xl">
            {' '}
            Where
          </h1>
          <p className="text-orange-50 font-serif text-left sm:px-16 px-10 pb-10 text-2xl">
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
            className={`row-span-1 overflow-hidden rounded-xl border-2 border-stone-700 bg-rose-100   ${
              i === 3 || i === 0 ? 'col-span-2' : ''
            }`}
          >
            {thumbnail[i]}
          </div>
        ))}
      </div>
      {/* <div className="h-1/5 relative">
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
            className="rounded-md bg-gradient-to-r from-rose-400 to-orange-300 transition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-orange-50 text-4xl group-hover:scale-110 group-hover:tracking-wider transition-on">
                This Website
              </h2>
            </div>
          </Link>
          <Link
            to={`blogs/1`}
            className="rounded-md bg-gradient-to-r  from-stone-600 to-slate-600 ransition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-slate-100 text-3xl">
                Under Constructions
              </h2>
            </div>
          </Link>
          <Link
            to={`blogs/1`}
            className="rounded-md bg-gradient-to-r  from-stone-600 to-slate-600 ransition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-slate-100 text-3xl">
                Under Constructions
              </h2>
            </div>
          </Link>
          <Link
            to={`blogs/1`}
            className="rounded-md bg-gradient-to-r  from-stone-600 to-slate-600 ransition-all ease-in relative group"
          >
            <div className=" absolute inset-0 flex items-center justify-center">
              <h2 className=" font-serif text-slate-100 text-3xl">
                Under Constructions
              </h2>
            </div>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
