import { Parallax } from 'react-scroll-parallax';

function About() {
  return (
    <Parallax speed={-10} className="h-screen">
      <div className="border-2 border-stone-700 rounded-md w-fill mx-6 mt-20 h-5/6 bg-[url('/Profile.png')] bg-cover bg-center relative">
        <div className=" lg:w-2/5 absolute inset-y-0 flex items-end">
          <div>
            <h1 className="text-orange-50 font-serif text-left lg:px-16 px-10 font-bold text-4xl">
              {' '}
              About Me
            </h1>
            <p className="text-orange-50 font-serif font-semibold text-left sm:px-16 p-10 text-2xl">
              {' '}
              I am a Software Engineer with experiences building Web
              Applications through ReactJs and TypeScript. I'm also a Game
              developer with experience in Unreal Engine 5 and C++.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default About;
