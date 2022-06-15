function Projects() {
  return (
    <div
      className="py-16  flex flex-col justify-center   font-bold	 text-white"
      id="projects"
    >
      <div className="flex items-center my-8" data-aos="zoom-out-right">
        <h1 className="text-l text-lg sm:text-3xl mr-3">My Projects</h1>
        <div className="w-32 sm:w-64 h-px bg-d"></div>
      </div>
      <ul className="text-d flex flex-wrap	justify-center text-center ">
        <div
          className="card border rounded p-4 w-64 m-5 h-96	"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <h3 className="text-xl sm:text-2xl text-l h-32">
            B2C ecommerce website
          </h3>
          <p className="my-4 h-32">
            B2C ecommerce web application with cart and user registration
          </p>
          <a
            href="https://sellers-xd.herokuapp.com/"
            target="_blank"
            className="text-g text-lg font-light border rounded inline-block py-1 px-4 my-3 "
          >
            Visit
          </a>
        </div>
        <div
          className="card border rounded p-4 w-64 m-5 h-96	"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <h3 className="text-xl sm:text-2xl text-l h-32">
            Weather Forecasting Website
          </h3>
          <p className="my-4 h-32">
            Web Application for Checking Today's, Tomrrow's, and Yesterday's
            weather of any city in the world
          </p>
          <a
            href="https://weatherforecasting-xd.netlify.app/"
            target="_blank"
            className="text-g text-lg font-light border rounded inline-block py-1 px-4 my-3 "
          >
            Visit
          </a>
        </div>
        <div
          className="card border rounded p-4 w-64 m-5 h-96	"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <h3 className="text-xl sm:text-2xl text-l h-32">
            Resume Builder Website
          </h3>
          <p className="my-4 h-32">
            Web Application for building A full descriptive resume
          </p>
          <a
            href="https://resumebuilder-xd.netlify.app/"
            target="_blank"
            className="text-g text-lg font-light border rounded inline-block py-1 px-4 my-3 "
          >
            Visit
          </a>
        </div>
        <div
          className="card border rounded p-0 w-64 m-5 flex justify-center-align-center h-96"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <a
            href="#contact"
            className="inline-block w-full m-0 p-0 flex flex-col justify-center"
          >
            <i class="fa-solid fa-plus text-xl sm:text-2xl"></i>
            <p>Add To My Projects</p>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Projects;
