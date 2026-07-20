import React from 'react'

const Skills = () => {
    return <div className="mx-auto w-full px-8 lg:px-16 py-10">
        <h2 className="text-3xl font-bold text-accent">Skills</h2>

        <div className="mt-4">
            <h3 className="font-semibold text-lg">Languages:</h3>
            <p>Python, C, C++, JavaScript, Java, HTML, CSS</p>
        </div>

        <div className="mt-4">
            <h3 className="font-semibold text-lg">Tools & Software:</h3>
            <p>Git, GitHub, VS Code, Unix/Linux, Jupyter Notebook, ROS2, Android Studio, IsaacSim, Azure, PostgreSQL, Cutter</p>
        </div>

        <div className="mt-4">
            <h3 className="font-semibold text-lg">Frameworks & Libraries:</h3>
            <p>React, Vite, Tailwind CSS, Pandas, Matplotlib</p>
        </div>

        <div className="mt-4">
            <h3 className="font-semibold text-lg">Relevant Coursework:</h3>
            <p>Artificial Intelligence, Machine Learning, Data Mining, Intelligent Mobile Robotics, Data Structures and Algorithms, Operating Systems, Programming Languages, Science of Cyber Security</p>
        </div>

    </div>
};

export default Skills;