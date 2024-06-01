import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-primary flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="flex sm:flex hidden list-none justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-[16px] text-white`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <div className="mobile__menu sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          alt="menu"
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-[100] rounded-xl`}
        >
          <ul className="flex flex-col list-none justify-center items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer ${
                  index == navLinks.length - 1 ? "mb-0" : "mb-3"
                } text-[16px] text-white`}
              >
                <a href={`#${navLink.id}`} onClick={(prev) => setToggle(!prev)}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
