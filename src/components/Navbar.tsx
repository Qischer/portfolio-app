import Tile from './Tile';

function Navbar() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky w-full top-3 z-10">
      <Tile
        height="h-fit"
        color="bg-orange-50 bg-opacity-50 backdrop-blur-sm hover:backdrop-blur-lg drop-shadow-md border-2 border-stone-700"
        children={
          <div className="p-5 flex flex-row">
            <div className=" text-stone-600 basis-2/12" onClick={scrollTop}>
              <p className=" cursor-pointer text-stone-600 hover:text-rose-400 hover:font-bold hover:scale-110 transition-all ease-in">
                Mark Nguy
              </p>
            </div>
            <div className=" text-stone-600 basis-8/12">
              <p className=" cursor-pointer text-stone-600 hover:text-rose-400 hover:font-bold hover:scale-110 transition-all ease-in">
                Contact
              </p>
            </div>
            <div className=" text-stone-600 basis-2/12">
              <p className=" cursor-pointer text-stone-600 hover:text-rose-400 hover:font-bold hover:scale-110 transition-all ease-in">
                Resume
              </p>
            </div>
          </div>
        }
      ></Tile>
    </header>
  );
}

export default Navbar;
