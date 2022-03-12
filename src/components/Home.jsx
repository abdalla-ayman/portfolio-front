function Home() {
  return (
    <div
      className=" flex flex-col py-20 justify-center tracking-wide text-d font-semibold	"
      id="home"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <p className="text-lg p-2 text-g">
        Hi <i class="fa-solid fa-hands-clapping text-amber-300"></i>, my name is
      </p>

      <h2 className="text-2xl sm:text-5xl text-l">Abdalla Ayman.</h2>
      <h2 className="text-2xl sm:text-5xl">I build things for the web. </h2>
      <p className="w-12/12 sm:w-10/12 md:w-8/12">
        I'm full stack javascript developer specializing in reactjs, nodejs and
        javascript ES6 in general
      </p>
    </div>
  );
}

export default Home;
