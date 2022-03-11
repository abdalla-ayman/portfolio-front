function About() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center font-bold	text-white"
      id="about"
    >
      <div className="flex items-center my-8" data-aos="zoom-out-right">
        <h1 className="text-l text-lg sm:text-3xl mr-3">About me</h1>
        <div className="w-32 sm:w-64 h-px bg-d"></div>
      </div>
      <p className="text-d w-12/12 sm:w-10/12 md:w-8/12" data-aos="zoom-out-up">
        Hello! My name is Abdalla and I'm a Motivated Full stack javascript
        developer Experienced with reactjs , nodejs and JavaScript ES6 in
        general .with a Strong desire to build web, mobile applications, learn
        new technology and try new stuff
      </p>
      <a
        href="./cv.pdf"
        download
        className="text-g text-lg font-light border rounded inline-block py-1 px-4 my-4 w-fit"
      >
        My Resume
      </a>
    </div>
  );
}

export default About;
