import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "../../assets/svgs/Hamburger";
import Logo from '../../assets/images/IGPCM_NewLogo.png';

const Header = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <header>
      <nav className="bg-white h-12 py-3 md:py-0 md:h-10 px-2 sm:px-4 md:px-20">
        <div className="flex flex-wrap items-center justify-between mx-auto w-full">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Igpcm logo" className="flex w-8 h-8 md:w-12 md:h-12" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-900">
              IGPCM
            </span>
          </Link>
          <div id="mobile-nav" className="flex md:order-2">
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <Hamburger />
            </button>
          </div>
          <div
            className={`${
              hidden ? "hidden" : ""
            } justify-between items-center w-full md:flex md:w-auto md:order-2`}>
            <ul className="flex flex-col p-4 mt-4 bg-green-600 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 font-semibold md:text-sm text-white md:text-black md:font-medium md:border-0 md:bg-white ">
              <li className="md:hover:underline-offset-8 md:hover:underline md:hover:decoration-green-800 md:hover:decoration-2">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="md:hover:underline-offset-8 md:hover:underline md:hover:decoration-green-800 md:hover:decoration-2">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="md:hover:underline-offset-8 md:hover:underline md:hover:decoration-green-800 md:hover:decoration-2">
                <NavLink to="/membership">Membership</NavLink>
              </li>
              <li className="md:hover:underline-offset-8 md:hover:underline md:hover:decoration-green-800 md:hover:decoration-2">
                <NavLink to="/nyscscheme">Nysc Scheme</NavLink>
              </li>
              <li className="md:hover:underline-offset-8 md:hover:underline md:hover:decoration-green-800 md:hover:decoration-2">
                <NavLink to="/examination">Examination</NavLink>
              </li>
              <li className="md:hover:underline-offset-8 md:hover:underline md:hover:decoration-green-800 md:hover:decoration-2">
                <NavLink to="/certification">Certification</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
