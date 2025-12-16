export const About = () => {

    const frontendSkills = [
        "React", 
        "TailwindCSS",
    ];

    const backendSkills = [
        "Python",
        "Java",
        "C",
    ]

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >

            <div
                className="max-w-3xl mx-auto px-4"
            >
                <h2
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-center"
                >
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I graduated with a Bachelor's degree in both Computer Science and Psychology degree at Rutgers-New Brunswick and have a solid foundation in software development, data structure, and web development.  I also have an excellent understanding in psychoogical theories, research methods, and data collection. As a Digital Transformation Intern, I have built and launched multiple automated workflows in SimpliGov, streamlining data intake and reducing manual processing for the public, employees, and stakeholders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 ga-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Digital Transformation</h3>
                        <div className="flex flex-wrap gap-2"></div>
                    </div>
                </div>
            </div>

        </section>
    )
}