function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 text-lg py-3  text-white uppercase	">
      <ul className="flex text-l">
        <li className="mx-10 cursor-pointer text-xl text-g">
          <h2>Portfolio</h2>
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
    </nav>
  );
}

export default Navbar;
