import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax';

import Tile from './Tile';
import Projects from './Projects';

function Contents() {
  return (
    <div className=" w-screen-2xl m-auto">
      <section>
        <div className=" h-screen bg-amber-100 hover:bg-amber-200 rounded-md transition ease-in m-3">
          <h1>projects</h1>
        </div>
      </section>
      <section>
        <div className="transition ease-in m-3 bg-stone-600 group">
          <Projects />
        </div>
      </section>
      <section>
        <div className=" h-screen bg-amber-100 hover:bg-amber-200 rounded-md transition ease-in m-3">
          <h1>contacts</h1>
        </div>
      </section>
    </div>
  );
}

export default Contents;
