import logo from "../assets/images/rolex.png";
import menu from "../assets/images/hamb.png";

const NavBar = () => {
  return (
    <div className="w-342 h-20 pr-20">
      <div className="w-335 bg-green-900 p-2 mb-2 rounded-b-[60px]"> </div>
      <header>
        <nav className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-9 h-10 rounded-[10px] ml-25 mt-5 shadow-lg"
            />
          </a>
          <h1 className="text-4xl text-underline font-bold pl-5 mt-4 ml-8">ROLEX</h1>
          <ul className="ml-110 mr-20 mt-2 flex items-center justify-center justify-between gap-10 ">
            <li className="inline-block ml-20 text-lg font-medium hover:underline cursor-pointer text-gray-500">
              Home
            </li>
            <li className="inline-block ml-10 text-lg font-medium hover:underline cursor-pointer text-gray-500">
              Shop
            </li>
            <li className="inline-block ml-10 text-lg font-medium hover:underline cursor-pointer text-gray-500">
              About
            </li>
            <li className="inline-block ml-10 text-lg font-medium hover:underline cursor-pointer text-gray-500">
              Contact
            </li>
          </ul>
          <a href="/menu">
            <img
              src={menu}
              alt="menu"
              className="w-8 mr-15 pr-2 pt-2 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
