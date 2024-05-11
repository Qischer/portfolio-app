import { Parallax } from "react-scroll-parallax";

function About() {
  return (
    <Parallax speed={-17} className="h-screen">
      <div
        className="border-2 border-stone-700 rounded-md w-fill mx-6 mt-20 h-5/6
        bg-cover bg-center relative bg-gradient-to-tr from-rose-300 to-orange-200"
      >
        <div className=" lg:w-2/5 absolute inset-y-0 flex items-end">
          <div>
            <h1 className="font-serif text-left lg:px-16 px-10 font-bold text-7xl">
              🧑🏻‍💻
            </h1>
            <h1 className="font-serif text-left lg:px-16 px-10 font-bold text-4xl">
              {" "}
              About Me
            </h1>
            <p className="font-sans font-light text-left sm:px-16 p-10 text-2xl">
              {" "}
              I am a Software Engineer with experiences building Web
              Applications through React and NextJS. I am passionate about
              creating user-friendly and accessible applications. I am
              constantly learning and improving my skills to become a better
              developer.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default About;
