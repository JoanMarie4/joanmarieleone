import React from "react";

const Resume = () => (
    <div className="wrapper px-8 lg:px-16 py-8">
        <h2 className="text-3xl font-bold text-accent mb-6">Resume</h2>

        <a 
            href="/JoanMarieLeoneResume.pdf" download 
            className="inline-block mb-6 font-semibold text-accent underline"
        >
            Download PDF
        </a>

        <iframe 
            src="/JoanMarieLeoneResume.pdf" 
            title="JoanMarie Leone Resume" 
            className="w-full h-[1000px] rounded-xl border" />
    </div>
);

export default Resume;