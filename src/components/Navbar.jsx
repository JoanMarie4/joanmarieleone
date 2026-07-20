import {NavLink} from "react-router-dom";
import React from "react";
import '../index.css'

const Navbar = () => (
    <nav className="flex justify-center gap-4 m-5 px-4 py-3 bg-foreground rounded-2xl">
        <NavLink
            className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    isActive
                        ? "bg-accent text-button font-semibold shadow-md border border-accent-light"
                        : "bg-button text-surface-foreground hover:bg-accent-light"
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
                        ? "bg-accent text-button font-semibold shadow-md border border-accent-light"
                        : "bg-button text-surface-foreground hover:bg-accent-light"
                }`
            }
            to="/projects"
        >
            Projects
        </NavLink>
        <NavLink
            className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    isActive
                        ? "bg-accent text-button font-semibold shadow-md border border-accent-light"
                        : "bg-button text-surface-foreground hover:bg-accent-light"
                }`
            }
            to="/resume"
        >
            Resume
        </NavLink>
    </nav>
)

export default Navbar;
