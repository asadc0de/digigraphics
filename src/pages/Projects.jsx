import Header from "../components/Header";
import gradient from "../assets/gr bg.png";
import gradientMobile from "../assets/gr bg mobile.png";
import project1 from "../assets/pr1.png";
import project2 from "../assets/pr2.png";
import project3 from "../assets/pr3.png";
import project4 from "../assets/pr4.png";
import project5 from "../assets/pr5.png";
import project6 from "../assets/pr6.png";
import project7 from "../assets/pr7.png";
import project8 from "../assets/pr8.png";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Marrying Muslims",
    image: project1,
    url: "https://marryingmuslims.vercel.app",
  },
  {
    title: "Talently Global Network",
    image: project2,
    url: "https://talentlyglobalnetwork.vercel.app",
  },
  {
    title: "Reach Orbit",
    image: project4,
    url: "http://reachorbitt.com",
  },
  {
    title: "New Image Mark",
    image: project3,
    url: "https://newimagemark.com",
  },
  {
    title: "Montera Luxe",
    image: project6,
    url: "https://monteraluxe.vercel.app",
  },
  {
    title: "AsadCode Portfolio",
    image: project5,
    url: "https://asadcode.vercel.app",
  },
  {
    title: "Brain Wave",
    image: project8,
    url: "https://brainwaveofficial.netlify.app",
  },
  {
    title: "Obys Agency",
    image: project7,
    url: "https://obys-agency-byasad.netlify.app",
  },
];

const Projects = () => {
  // Helper to chunk the projects array into groups of 2
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    chunkedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden lg:px-28 md:px-22 px-4">
        <Header />
        {/* Overlay */}
        <div className="absolute hidden md:block left-1/2 -top-18 -translate-x-1/2 w-[80%] -z-100">
          <img src={gradient} alt="gradient" />
        </div>
        <div className="absolute md:hidden right-0 top-0 w-full h-screen -z-100">
          <img src={gradientMobile} alt="gradient" />
        </div>
        {/* Text */}
        <div className="text-center mb-16 md:px-2 mt-44">
          <h2
            className="md:text-5xl text-[1.7rem] mb-6 font-[neue] bg-gradient-to-r from-[#000] via-white to-[#000] 
  bg-clip-text text-transparent font-semibold"
          >
            Discover What We’ve Crafted
          </h2>
        </div>
        {/* Projects */}
        <section>
          {chunkedProjects.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="w-full flex md:flex-row flex-col justify-start items-center gap-3 mb-6"
            >
              {row.map((project, idx, url) => (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className="relative md:w-1/2 w-full md:h-[40vw] h-[25rem] backdrop-blur-xl rounded-3xl border border-[#ffffff14] overflow-hidden flex flex-col items-center justify-center hover:scale-98 transition-transform duration-300"
                >
                  {/* Project Name */}
                  <div className="border border-[#ffffff14] z-10 absolute bottom-4 rounded-2xl w-[96%] md:py-4 py-3 px-6 mx-4 backdrop-blur-[5px]">
                    <p
                      className="md:text-3xl text-base opacity-80 text-center bg-gradient-to-r from-[#343434] via-white to-[#343434] 
  bg-clip-text text-transparent font-[neue]"
                    >
                      {project.title}
                    </p>
                  </div>
                  {/* Image */}
                  <img
                    className="md:w-[90%] w-[97%] object-cover"
                    src={project.image}
                    alt="Image is loading"
                  />
                  {/* Dark bottom fade for content */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent"></div>
                  {/* Border fade at bottom */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-24 
                              bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none rounded-b-3xl"
                  ></div>
                </a>
              ))}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
