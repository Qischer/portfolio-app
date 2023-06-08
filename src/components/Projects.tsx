function Projects() {
  return (
    <div className="h-screen">
      <div className="h-1/4 relative">
        <div className=" absolute inset-x-0 bottom-0 items-center justify-center ">
          Here're some stuffs I built
        </div>
      </div>
      <div className="relative h-3/4 max-w-7xl">
        <div className="h-full max-w-7xl grid gap-4 grid-cols-3 grid-rows-2">
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
