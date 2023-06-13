import { Parallax } from 'react-scroll-parallax';

function About() {
  return (
    <Parallax speed={-10} className="h-screen">
      <div className=" static rounded-md w-4/5 m-auto mt-48 md:h-5/6 h-2/5 bg-red-400 bg-contain bg-no-repeat bg-[url('/Profile.png')] ">
        <Parallax speed={-10}>
          <div className="md:flex hidden sm:absolute left-3/4 rounded-md w-2/5 h-96 bg-red-50"></div>
        </Parallax>
      </div>
      <div className="md:hidden static rounded-md w-4/5 m-auto h-1/5 bg-red-100 "></div>
    </Parallax>
  );
}

export default About;
