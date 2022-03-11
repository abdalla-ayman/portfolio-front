function Links() {
  return (
    <>
      <div className="fixed bottom-0 left-6 md:left-12 hidden sm:flex flex-col justify-center items-center">
        <a href="https://github.com/abdalla-ayman" target="_blank">
          <i class="fa-brands fa-github my-2 cursor-pointer text-xl text-l link"></i>
        </a>
        <a href="https://twitter.com/_abdalla_ayman" target="_blank">
          <i class="fa-brands fa-twitter my-2 cursor-pointer text-xl text-l link"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/abdalla-ayman-0252891b5/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin my-2 cursor-pointer text-xl text-l link"></i>
        </a>
        {/* <a href="" target="_blank">
        <i class="fa-brands fa-discord my-2 cursor-pointer text-xl text-l link"></i>
      </a> */}
        <div className="h-32 mt-4 w-px bg-d"></div>
      </div>
      <div className="fixed bottom-0 right-6 md:right-12 hidden sm:flex flex-col justify-center items-center ">
        <a
          href="mailto:abdallaaymanshandi3@gmail.com"
          className="text-l -rotate-90  w-2"
        >
          abdallaaymanshandi3@gmail.com
        </a>
        <div className="h-32 mt-4 w-px bg-d"></div>
      </div>

      <div className="flex justify-center items-center py-4 sm:hidden">
        <a href="https://github.com/abdalla-ayman" target="_blank">
          <i class="fa-brands fa-github  mx-3 cursor-pointer text-xl text-l link"></i>
        </a>
        <a href="https://twitter.com/_abdalla_ayman" target="_blank">
          <i class="fa-brands fa-twitter  mx-3 cursor-pointer text-xl text-l link"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/abdalla-ayman-0252891b5/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin  mx-3 cursor-pointer text-xl text-l link"></i>
        </a>
        <a href="mailto:abdallaaymanshandi3@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope mx-3 cursor-pointer text-xl text-l link"></i>
        </a>
      </div>
    </>
  );
}

export default Links;
