import Tile from './Tile';

function Navbar() {
  return (
    <header className="sticky w-full top-3 z-10">
      <Tile
        height="h-fit"
        color="bg-stone-100 bg-opacity-50 hover:bg-opacity-75 backdrop-blur-sm drop-shadow-sm hover:drop-shadow-lg"
        children={
          <div className="p-5 flex flex-row">
            <div className=" basis-2/12">Mark Nguy</div>
            <div className=" basis-8/12">Contacts</div>
            <div className=" basis-2/12">Resume</div>
          </div>
        }
      ></Tile>
    </header>
  );
}

export default Navbar;
