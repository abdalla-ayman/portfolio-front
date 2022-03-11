import { useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 text-lg py-3  text-white uppercase	z-40	">
      <ul className="text-l hidden	md:flex">
        <li className="mx-10 cursor-pointer text-xl text-g">
          <a href="#home">Portfolio</a>
        </li>
        <li className="mx-2 cursor-pointer">
          <a href="#home">home</a>
        </li>
        <li className="mx-2 cursor-pointer">
          <a href="#about">about</a>
        </li>
        <li className="mx-2 cursor-pointer">
          <a href="#skills">skills</a>
        </li>
        <li className="mx-2 cursor-pointer">
          <a href="#projects">porjects</a>
        </li>
        <li className="mx-2 cursor-pointer">
          <a href="#contact">contact me</a>
        </li>
      </ul>
      <div className="flex justify-between md:hidden">
        <a href="#home" className="mx-10 cursor-pointer text-xl text-g">
          Portfolio
        </a>
        <button
          className="mr-8 px-4 py-1 text-2xl border rounded flex justify-center items-center"
          onClick={() => setShowNavbar(true)}
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        {showNavbar && (
          <div
            className="nv fixed inset-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <button
              onClick={() => setShowNavbar(false)}
              className="text-3xl fixed top-0 right-0 mt-3 mr-8 px-4  border rounded  flex justify-center items-center"
            >
              <i class="fa-solid fa-xmark m-auto"></i>
            </button>
            <ul className="flex flex-col h-full justify-center items-center">
              <li
                className="mx-2 my-4 cursor-pointer"
                onClick={() => setShowNavbar(false)}
              >
                <a href="#home">home</a>
              </li>
              <li
                className="mx-2 my-4 cursor-pointer"
                onClick={() => setShowNavbar(false)}
              >
                <a href="#about">about</a>
              </li>
              <li
                className="mx-2 my-4 cursor-pointer"
                onClick={() => setShowNavbar(false)}
              >
                <a href="#skills">skills</a>
              </li>
              <li
                className="mx-2 my-4 cursor-pointer"
                onClick={() => setShowNavbar(false)}
              >
                <a href="#projects">porjects</a>
              </li>
              <li
                className="mx-2 my-4 cursor-pointer"
                onClick={() => setShowNavbar(false)}
              >
                <a href="#contact">contact me</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
