import React from 'react'

const About = () => {
    return <div>
        <section className="about mx-auto w-full px-10 lg:px-20 py-16 flex flex-col md:flex-row gap-12 items-center">
            {/* Text */}
            <div className="flex-1">
                <h2 className="text-[#61538f] mb-4 text-3xl font-bold">
                    About Me
                </h2>
                <p className="font-semibold leading-relaxed mb-4 text-lg">
                    I graduated with a Master's in Computer Science at Binghamton University, specializing in AI.
                </p>

                <p className="font-semibold leading-relaxed mb-4 text-lg">
                    I'm especially interested in AI and how it connects with and impacts different areas of computer science. Additionally, I've been building experience in web development to broaden my skills and work on new and interesting projects. This portfolio is part of that journey, where I focus on strengthening my full-stack development skills while continuing to grow in AI and showcase my projects and interests.
                </p>

                {/*<p className="font-semibold leading-relaxed">
                        When I'm not coding, I enjoy playing guitar, video games, and spending time with my dog.
                    </p>*/}
            </div>

            {/* Image */}
            <div className="shrink-0 flex justify-center">
                <img
                    src="/cookie.jpg"
                    alt="JoanMarie"
                    className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-xl"
                />
            </div>
        </section>
    </div>;
};

export default About;