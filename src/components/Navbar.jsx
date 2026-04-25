import {NavLink} from "react-router-dom";
import React from "react";

const Navbar = () => (
    <nav className="flex justify-center gap-4 m-5 px-4 py-3 bg-[#48494B] rounded-2xl">
        <NavLink
            className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    isActive
                        ? "bg-[#61538f] text-[#cccbd1]"
                        : "bg-[#cccbd1] text-[#222021] hover:bg-[#958aba]"
                }`
            }
            to="/"
        >
            Home
        </NavLink>
        <NavLink
            className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    isActive
                        ? "bg-[#61538f] text-[#cccbd1]"
                        : "bg-[#cccbd1] text-[#222021] hover:bg-[#958aba]"
                }`
            }
            to="/projects"
        >
            Projects
        </NavLink>
    </nav>
)

export default Navbar;
