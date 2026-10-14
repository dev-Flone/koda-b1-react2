import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky">
      <nav className="flex justify-between bg-indigo-700 items-center text-white rounded-lg font-semibold">
        <div className="px-3 py-2">Kairn</div>
        <div className="flex">
          <NavLink className="px-3 py-2 hover:bg-indigo-900" to={"/"}>
            Home
          </NavLink>
          <NavLink className="px-3 py-2 hover:bg-indigo-900" to={"/About"}>
            About
          </NavLink>
          <NavLink className="px-3 py-2 hover:bg-indigo-900" to={"/Contact"}>
            Contact
          </NavLink>
        </div>
        <div className="flex gap-1 px-3 py-2">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
