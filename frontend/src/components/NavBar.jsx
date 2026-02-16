import { NavLink } from "react-router-dom";
import clsx from "clsx";

function Navbar() {
  return (
    <header className="w-full flex justify-center">
      <nav className="w-full border-b border-gray-700 bg-black">
        <div className="flex items-center justify-between px-6 py-3">
          
          {/* Logo */}
          <div className="text-white font-semibold text-lg">
            CW
          </div>

          {/* Nav Links */}
          <div className="flex gap-6 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  "text-gray-300 hover:text-white",
                  isActive && "text-white font-medium"
                )
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/cyber-dictionary"
              className={({ isActive }) =>
                clsx(
                  "text-gray-300 hover:text-white",
                  isActive && "text-white font-medium"
                )
              }
            >
              Cyber Dictionary
            </NavLink>

            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                clsx(
                  "text-gray-300 hover:text-white",
                  isActive && "text-white font-medium"
                )
              }
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/security-explained"
              className={({ isActive }) =>
                clsx(
                  "text-gray-300 hover:text-white",
                  isActive && "text-white font-medium"
                )
              }
            >
              Security Explained
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;