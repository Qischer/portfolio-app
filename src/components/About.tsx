import { Parallax } from 'react-scroll-parallax';

function About() {
  return (
    <Parallax speed={-10} className="h-screen">
      <div className=" static rounded-md w-4/5 m-auto mt-48 md:h-5/6 h-3/5 bg-[url('public/Profile.png')] bg-cover bg-center">
        <Parallax speed={-10}>
          <div className="md:flex hidden sm:absolute left-3/4 rounded-md w-2/5 h-96 bg-red-50"></div>
        </Parallax>
      </div>
      <div className="md:hidden static rounded-md w-4/5 m-auto h-1/5 bg-red-100 "></div>
    </Parallax>
  );
}

export default About;
