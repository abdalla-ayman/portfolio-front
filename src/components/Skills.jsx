function Skills() {
  return (
    <div
      className="py-20  flex flex-col justify-center   font-bold	 text-white"
      id="skills"
    >
      <div className="flex items-center my-8" data-aos="zoom-out-right">
        <h1 className="text-l text-lg sm:text-3xl mr-3">My Skills</h1>
        <div className="w-32 sm:w-64 h-px bg-d"></div>
      </div>
      <p className="text-l" data-aos="zoom-out-right">
        some of the technologies and tools i know{" "}
        <i class="fa-solid fa-hand-point-down text-amber-300 mx-1"></i>
      </p>
      <ul className="text-d flex flex-wrap	justify-center text-center text-5xl sm:text-7xl">
        <li className="m-12 cursor-pointer w-32" data-aos="fade-up">
          <i class="fa-brands fa-react "></i>
          <p className="text-lg sm:text-xl">reactjs</p>
        </li>
        <li className="m-12 cursor-pointer w-32" data-aos="fade-up">
          <i class="fa-brands fa-node"></i>
          <p className="text-lg sm:text-xl">nodejs</p>
        </li>
        <li className="m-12 cursor-pointer w-32" data-aos="fade-up">
          <i class="fa-brands fa-js"></i>
          <p className="text-lg sm:text-xl">javascript</p>
        </li>
        <li className="m-12 cursor-pointer w-32" data-aos="fade-up">
          <i class="fa-brands fa-html5"></i>
          <p className="text-lg sm:text-xl">html5</p>
        </li>
        <li className="m-12 cursor-pointer w-32" data-aos="fade-up">
          <i class="fa-brands fa-css3"></i>
          <p className="text-lg sm:text-xl">css3</p>
        </li>
        <li className="m-12 cursor-pointer w-32" data-aos="fade-up">
          <i class="fa-brands fa-bootstrap"></i>
          <p className="text-lg sm:text-xl">bootstrap</p>
        </li>
        <li className="m-12 cursor-pointer w-32" data-aos="fade-up">
          <i class="fa-solid fa-mobile-screen-button"></i>
          <p className="text-lg sm:text-xl">responsive web design</p>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
