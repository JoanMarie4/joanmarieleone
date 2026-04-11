import React from 'react'
import './App.css'
import { HashRouter, Routes, Route, Link, NavLink} from "react-router-dom"

const Home = () => (
    <main>
        {/* <div className="pattern" /> */}
        <div className="wrapper">
            <header>
                <h1 className="intro mb-8">
                    Hi, I'm <span className="text-gradient">JoanMarie</span>.<br/>
                    Welcome to My Website!
                </h1>
            </header>

            <section className="about mx-auto max-w-5xl flex flex-col md:flex-row gap-6 items-center">
                {/* Text */}
                <div className="flex-3">
                    <h2 className="text-[#61538f] mb-3 font-bold">
                        About Me
                    </h2>

                    <p className="font-semibold leading-relaxed mb-2">
                        I'm especially interested in AI and how it connects with and impacts different areas of computer science. Alongside AI, I've been building experience in web development to broaden my skills and work on new and interesting projects. This portfolio is part of that journey, where I focus on strengthening my full-stack development skills while continuing to grow in AI and showcase my projects and interests.
                    </p>

                    <p className="font-semibold leading-relaxed">
                        When I'm not coding, I enjoy playing guitar, video games, and spending time with my dog.
                    </p>
                </div>

                {/* Image */}
                <div className="flex-2 flex justify-center">
                    <img
                        src="/cookie.jpg"
                        alt="JoanMarie"
                        className="w-64 h-64 object-cover rounded-xl"
                    />
                </div>
            </section>
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

