import { Parallax } from 'react-scroll-parallax';

function About() {
  return (
    <Parallax speed={-10} className="h-screen">
      <div className=" static rounded-md w-4/5 m-auto mt-48 h-5/6 bg-[url('/Profile.png')] bg-cover bg-center">
        <div className=" w-3/5">
          <h1 className="text-orange-50 font-serif text-left p-10 font-bold text-4xl">
            {' '}
            About Me
          </h1>
          <p className="text-orange-50 font-serif text-left px-10 text-2xl">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            mattis vestibulum sodales. Phasellus nec commodo dolor. Phasellus
            imperdiet ex et justo varius cursus.
          </p>
        </div>
      </div>
    </Parallax>
  );
}

export default About;
