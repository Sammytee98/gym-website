import { NavLink } from "react-router-dom";

const NavLinks = ({ flexDirection }) => {
  return (
    <ul className={`flex ${flexDirection}`}>
      <li className="text-xl font-semibold font-raleway lg:text-sm text-black dark:text-white w-fit py-2 px-4 rounded-3xl transition duration-300 hover:bg-red-600 hover:text-white active:bg-red-800">
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li className="text-xl font-semibold font-raleway lg:text-sm text-black dark:text-white w-fit py-2 px-4 rounded-3xl transition duration-300 hover:bg-red-600 hover:text-white active:bg-red-800">
        <NavLink to="about">About</NavLink>{" "}
      </li>
      <li className="text-xl font-semibold font-raleway lg:text-sm text-black dark:text-white w-fit py-2 px-4 rounded-3xl transition duration-300 hover:bg-red-600 hover:text-white active:bg-red-800">
        <NavLink to="services">Services</NavLink>{" "}
      </li>
      <li className="text-xl font-semibold font-raleway lg:text-sm text-black dark:text-white w-fit py-2 px-4 rounded-3xl transition duration-300 hover:bg-red-600 hover:text-white active:bg-red-800">
        <NavLink to="membership">Membership</NavLink>{" "}
      </li>
      <li className="text-xl font-semibold font-raleway lg:text-sm text-black dark:text-white w-fit py-2 px-4 rounded-3xl transition duration-300 hover:bg-red-600 hover:text-white active:bg-red-800">
        <NavLink to="contact">Contact</NavLink>{" "}
      </li>
    </ul>
  );
};

export default NavLinks;
