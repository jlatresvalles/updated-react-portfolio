import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = [
        "React", 
        "TailwindCSS",
    ];

    const backendSkills = [
        "Python",
        "Java",
        "C",
        "Google Cloud",
        "Dialogflow",
    ]

    const digitalTransformationSkills = [
        "SimpliGov",
        "APIs",
    ]

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I graduated with a Bachelor's degree in both Computer Science and Psychology degree at Rutgers-New Brunswick and have a solid foundation in software development, data structure, and web development.  I also have an excellent understanding in psychoogical theories, research methods, and data collection. As a Digital Transformation Intern, I have built and launched multiple automated workflows in SimpliGov, streamlining data intake and reducing manual processing for the public, employees, and stakeholders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 ga-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Front-End Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Back-End Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Digital Transformation Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {digitalTransformationSkills.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">📘 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.A. in Computer Science</strong> - Rutgers University-New Brunswick (2022-2025)
                                </li>

                                <li>
                                    <strong>B.A in Psychology</strong> - Rutgers University-New Brunswick (2022-2025)
                                </li>

                                <li>
                                    Relevant Coursework: Data Structures, Computer Architecture, Data Science for Data Management, Intro to Data Science
                                </li>
                            </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🧑‍💻 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Digital Transformation Intern at the New Jersey Department of Community Affairs (2025 - Present)</h4>
                                    <p>Built and launched multiple automated workflows in SimpliGov like EEO Training, DHCR Grant Scoring Application, and Winter Termination Self-Termination Form.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Research Assistant at Rutgers University-New Brunswick (2024-2025)</h4>
                                    <p>Assisted in a study examining the cognitive components and learning systems underlying the understanding of number and quantity in humans with a team.</p>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}