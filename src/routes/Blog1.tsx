import NavbarBlog from '../components/Blog/NavbarBlog';

export default function Blog1() {
  return (
    <main className="bg-orange-50">
      <NavbarBlog></NavbarBlog>
      <div className="max-w-2xl mx-auto px-10 py-8">
        <h1 className="text-4xl font-bold mb-4 font-serif">
          Building My React Web Portfolio with Vite and Tailwind: A Developer's
          Log
        </h1>
        <div className="text-left">
          <p className="text-gray-500">Date: June, 29, 2023</p>
          <p className="text-gray-500 mb-4">
            GitHub Repository:{' '}
            <a
              href="https://github.com/Qischer/portfolio-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Qischer/portfolio-app
            </a>
          </p>
          <h2 className="text-2xl font-semibold mt-8">Introduction</h2>
          <p className="mt-4">
            As a developer, I wanted to create a web portfolio to showcase my
            projects and skills. After careful consideration, I chose to build
            it using React for its flexibility and component-based architecture.
            To optimize the development experience, I decided to leverage Vite
            as the build tool due to its speed and modern features.
            Additionally, I incorporated Tailwind CSS for efficient styling. In
            this developer's log, I will share my journey of building my React
            web portfolio with Vite and Tailwind, including installation,
            project structure, usage, components, styling, deployment to Vercel,
            and more.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-8">
              Development Stages and Iterations
            </h2>
            <p className="mt-4">
              The development of my React web portfolio involved several stages
              and iterations to create a polished and effective showcase of my
              projects and skills. I began by setting up the project with React
              and Vite, leveraging their capabilities for efficient development.
            </p>
            <p className="mt-4">
              Next, I focused on designing the layout and creating reusable
              components to ensure a consistent and visually appealing user
              interface. I iteratively refined the components, incorporating
              user feedback and making improvements along the way.
            </p>
            <p className="mt-4">
              Integrating dynamic project data was a crucial step in providing
              accurate and up-to-date information to visitors. I designed a data
              structure to store project details, such as titles, descriptions,
              images, and links. This allowed me to seamlessly incorporate the
              data into the portfolio components, ensuring a smooth and engaging
              user experience.
            </p>
            <p className="mt-4">
              Styling the portfolio was achieved using Tailwind CSS, a
              utility-first CSS framework. I utilized Tailwind's extensive set
              of pre-defined utility classes to easily and efficiently style the
              components. This enabled me to achieve a professional and
              responsive design across different devices and screen sizes.
            </p>
            <p className="mt-4">
              Throughout the development process, I actively sought feedback
              from peers and incorporated their suggestions. This iterative
              approach allowed me to address any issues, enhance usability, and
              refine the content and design of the portfolio.
            </p>
            <p className="mt-4">
              Finally, after thorough testing and optimization, I deployed the
              portfolio to Vercel, a hosting platform for static sites. This
              made my web portfolio accessible online, allowing potential
              employers, clients, and colleagues to explore my projects and
              skills conveniently.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Conclusion</h2>
            <p className="mt-4">
              Building my React web portfolio with Vite and Tailwind has been an
              exciting and rewarding journey. Throughout the development
              process, I gained valuable experience in building scalable and
              efficient web applications using modern frontend technologies.
            </p>
            <p className="mt-4">
              I am proud of the final result—a sleek and functional web
              portfolio that showcases my projects and skills in an engaging
              manner. This project has not only strengthened my technical skills
              but also highlighted the importance of continuous learning and the
              value of an iterative development approach.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
