import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

function Projects() {
  const textLayer: BannerLayer = {
    speed: -15,
    children: (
      <div className="absolute inset-0 flex items-center justify-center rounded-md">
        <h1 className="text-8xl text-stone-500 font-serif blur-md group-hover:blur-none group-hover:scale-110 hover:text-stone-400 transition-all ease-in duration-150">
          Projects
        </h1>
      </div>
    ),
  };

  const layer3: BannerLayer = {
    speed: -10,
    children: (
      <div className="absolute inset-0 flex items-center justify-center blur-2xl bg-stone-100 group-hover:blur-md rounded-xl scale-y-50 scale-x-50 transition-all ease-in duration-150"></div>
    ),
  };

  return (
    <ParallaxBanner
      layers={[layer3, textLayer]}
      className="aspect-[2/1] round-xl"
    />
  );
}

export default Projects;
