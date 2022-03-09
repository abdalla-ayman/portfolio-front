function Links() {
  return (
    <div className="fixed bottom-0 left-12 flex flex-col justify-center items-center">
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
  );
}

export default Links;
