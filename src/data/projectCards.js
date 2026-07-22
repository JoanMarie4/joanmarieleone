import { FaShieldAlt, FaSpider, FaBug, FaCogs, FaMicrochip } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "This website! Built with React and Vite, styled with Tailwind CSS, and using React Router (HashRouter) for client-side navigation between pages. Configured a CI/CD pipeline with GitHub Actions to automatically build and deploy the site to a custom domain on every push. Showcases my projects and background while giving me hands on experience strengthening my full-stack development skills.",
        icon: SiReact,
        tags: ["JavaScript", "React", "Tailwind CSS", "Vite", "React Router"],
        githubLink: "https://github.com/JoanMarie4/joanmarieleone"
    },
    {
        title: "Black Box Prompt Optimization Defense for Prompt Injection Attacks",
        description: "Introduced Black Box Prompt Optimization (BPO) as a defense against prompt injection attacks. Created custom datasets pairing prompt injection variants with safe and unsafe responses, then trained a prompt optimizer to generate refined prompts that prevent malicious instructions from being executed, laying groundwork for future BPO-based defense research.",
        icon: FaShieldAlt,
        tags: ["Python", "Machine Learning", "Azure", "Data Curation", "AI Security"],
        githubLink: "https://github.com/JoanMarie4/OPI-BPO"
    },
    {
        title: "Crawler and Analysis on Online Music Discourse",
        description: "Built two custom continuous crawlers to collect posts from Reddit music subreddits and the 4chan music board. Used online datasets to parse and identify music artists across large sets of posts, organizing the data with PostgreSQL and Python libraries like Pandas, then analyzed trends in artist mentions, frequency, and toxicity scores.",
        icon: FaSpider,
        tags: ["Python", "PostgreSQL", "Pandas", "Matplotlib", "Data Mining"],
        githubLink: "https://github.com/JoanMarie4/Reddit_4Chan_Music_Crawler"
    },
    {
        title: "Return-To-Libc Attack Demonstration",
        description: "Created a susceptible executable in C and reverse-engineered the binary using Cutter. Constructed a Python exploit incorporating ROP gadgets and libc function addresses to expose libc, then implemented and analyzed the effectiveness of different detection, prevention, and deception methods.",
        icon: FaBug,
        tags: ["C", "Python", "Reverse Engineering", "Cybersecurity"],
        githubLink: "https://github.com/JoanMarie4/Return-To-Libc-Attack-on-File"
    },
    {
        title: "Xv6 Multi-Level Feedback Queue Process Scheduler",
        description: "Built a multi-level feedback queue process scheduler from baseline xv6 source code as part of a three-person team. Applied multiple scheduling policies, including round-robin and priority-based execution, and created new system calls in xv6 to support the MLFQ implementation.",
        icon: FaCogs,
        tags: ["C", "Operating Systems", "xv6"],
        githubLink: "https://github.com/JoanMarie4/xv6-MLFQ"
    },
    {
        title: "Hardware Trojan Detection Technical Research Paper",
        description: "Researched various forms of hardware trojan detection algorithms, with a focus on run-time monitoring methods. Compared the reliability, coverage, resource consumption, and power consumption across different detection approaches.",
        icon: FaMicrochip,
        tags: ["Research", "Hardware Security"],
        githubLink: "https://github.com/JoanMarie4/Hardware-Trojan-Technical-Research-Paper"
    },
]

export default projects