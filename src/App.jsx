import React from 'react'
import './App.css'
import { HashRouter, Routes, Route, Link, NavLink} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app">
            <HashRouter>
                <Navbar />

                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </main>

                <Footer />
            </HashRouter>
        </div>
    );
};

export default App

