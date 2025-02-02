import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div className="bg-gray-900 w-full grid cl h-48 md:h-20">
      <div className="grid grid-cols-6 h-28 text-md text-white">
        <div className="text-yellow-600 md:pt-1 pt-11 ml-11 font-bold md:text-2xl">
           ADDIS ZEMEN
          <br />
          <span className="md:ml-5">HMS</span>
        </div>
        <div className="col-span-5">
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 ml-72 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul
            className={`justify-between md:flex md:mx-9 md:items-center md:pt-5 md:text-xl ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="hover:text-red-800 ml-44 md:mx-0">
              <Link to="/" className="flex">
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-2 mt-1"
                >
                  <path
                    strokeLinecap="round" strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  /> </svg> Home </Link>
            </li>
            <li className="text-md hover:text-red-800 mx-48 md:mx-0">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="text-md hover:text-red-800 mx-48 md:mx-0">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-md hover:text-red-800 mx-48 md:mx-0">
              <Link to="/service">Service</Link>
            </li>
            <li className="text-md hover:text-red-800 mx-48 md:mx-0">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-md hover:text-red-800 mx-48 md:mx-0">
              <Link to="/signup">SignUp</Link>
            </li>
            <li className="text-md hover:text-red-800 mx-48 md:mx-0">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
