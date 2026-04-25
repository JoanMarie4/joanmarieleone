import About from "../components/About.jsx";
import React from "react";

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

            <About />
        </div>
    </main>
)

export default Home;