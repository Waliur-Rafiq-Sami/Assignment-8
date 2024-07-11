import { NavLink } from "react-router-dom";

const SingleLink = ({ name, toGo }) => {
  return (
    <li
      className={`mx-2 hover:bg-green-200 rounded-lg font-bold py-2 ease-in-out duration-200 active:scale-95`}
    >
      <NavLink
        to={toGo}
        className={({ isActive }) =>
          isActive ? "text-[#08bd20] border-green-300 border-[1px]" : " "
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

export default SingleLink;
