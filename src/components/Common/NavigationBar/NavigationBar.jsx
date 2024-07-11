import { NavLink } from "react-router-dom";
import logoImg from "../../../assets/images/24043378.png";
import SingleLink from "./SingleLink";
const NavigationBar = () => {
  const link = (
    <>
      {<SingleLink name={"Home"} to={"/"}></SingleLink>}
      {<SingleLink name={"Listed Books"} toGo={"/listedBook"}></SingleLink>}
      {<SingleLink name={"Books"} toGo={"/listedBook"}></SingleLink>}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* dropdown */}
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <NavLink to="/">
          <img src={logoImg} className="w-28" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* middle link */}
        <ul className="menu-horizontal px-1 menu-md">{link}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="text-white text-lg h-12 md:px-10 btn bg-gradient-to-r from-[#1a9177] to-[#51dff8] hover:opacity-85 hover:delay-100">
          Sing in
        </a>
        <a className="text-white text-lg h-12 md:px-10 btn bg-gradient-to-r from-[#4e1a91] to-[#b551f8] hover:opacity-85 hover:delay-100">
          Sing up
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
