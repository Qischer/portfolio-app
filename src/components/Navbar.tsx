import Tile from './Tile';

function Navbar() {
  return (
    <header className="sticky top-5 z-10">
      <Tile
        height="h-fit "
        color="bg-stone-100 bg-opacity-50 hover:bg-opacity-75 hover:bg-stone-200 backdrop-blur-sm drop-shadow-sm hover:drop-shadow-lg"
        children={
          <div className="p-5">
            <h1>hello</h1>
          </div>
        }
      ></Tile>
    </header>
  );
}

export default Navbar;
