import React from 'react'
import './App.css'
import { HashRouter, Routes, Route, Link, NavLink} from "react-router-dom"

const Home = () => (
    <main>
        {/* <div className="pattern" /> */}
        <div className="wrapper">
            <header>
                <h1>
                    Hi, I'm <span className="text-gradient">JoanMarie</span>.<br/>
                    Welcome to My Website!
                </h1>
            </header>
        </div>
    </main>
)

const Projects = () => (
    <main className="wrapper">
        <h1>
            Projects Page
        </h1>
    </main>
)


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


const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter>
    )
}
export default App

