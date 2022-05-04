import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0">
      <nav className="p-3 text-white bg-blue-700 flex items-center">
        <div onClick={() => setOpen(!open)} className="w-6 md:hidden">
          <MenuIcon></MenuIcon>
        </div>
        <div className={"flex items-center justify-between"}>
          <img className="h-12 md:ml-20 md:mr-96" src={logo} alt="" />
          <div>
            <div
              className={`grid grid-cols-2 gap-x-3 md:flex md:static transition duration-500 ease-in-out absolute md:justify-between m-auto ${
                open ? "top-1" : "top-[-120px]"
              } ${open ? "left-72" : "top-[-120px]"}`}
            >
              <Link
                className="md:mr-7 hover:font-bold text-xs md:text-base"
                to="/home"
              >
                HOME
              </Link>
              <Link
                className="md:mr-7 hover:font-bold text-xs md:text-base"
                to="/experts"
              >
                Experts
              </Link>
              <Link
                className=" md:mr-7 hover:font-bold text-xs md:text-base"
                to="/services"
              >
                Services
              </Link>
              <Link
                className="md:mr-7 hover:font-bold text-xs md:text-base"
                to="/logIN"
              >
                Login
              </Link>
              <Link
                className="md:mr-7 hover:font-bold text-xs md:text-base"
                to="/register"
              >
                Resister
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
