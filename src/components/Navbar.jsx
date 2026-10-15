import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 px-4 py-4">
      <nav className="flex flex-wrap items-center justify-between gap-3  px-4 py-3 font-semibold text-white bg-white/40 ">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <NavLink to={"/"}>
            <img src="../../public/images/logo.png" alt="" className="h-15" />
          </NavLink>
        </div>
        {/* Nav Link */}
        <div className="flex flex-wrap items-center gap-1">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 transition-colors bg-transparent ${isActive ? " text-red-600 " : "text-black"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/Menu"}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 transition-colors bg-transparent ${isActive ? " text-red-600 " : "text-black"}`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to={"/About"}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 transition-colors bg-transparent ${isActive ? " text-red-600 " : "text-black"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/Contact"}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 transition-colors bg-transparent ${isActive ? " text-red-600 " : "text-black"}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Login & Register button */}
        <div className="flex items-center gap-2 pr-4">
          <button className=" text-whiterounded-md px-3 py-2 transition-colors text-black hover:text-red-600">
            Login
          </button>
          <button className=" text-whiterounded-md px-3 py-2 transition-colors text-black hover:text-red-600">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
