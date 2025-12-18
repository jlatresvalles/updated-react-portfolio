import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                { /* Winter Termination Program Self-Certification Form */ }
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Winter Termination Program Self-Certification Form</h3>
                        <p className="text-gray-400 mb-4">
                            Created to quickly prevent service discontinuation for eligible residential customers receiving residential electric, sewer, and water service from a local authority, municipal utility, or rural electric cooperative.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["SimpliGov"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href = "https://njdca-dhcr.prod.simpligov.com/prod/portal/ShowWorkFlow/AnonymousEmbed/11247c94-a915-45d8-8727-8aeae96e9ad4" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                            >
                                    View Project → 
                            </a>
                        </div>
                    </div>
                    
                    { /* EEO Training */ }
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Equal Employment Opportunity (EEO) Training Sign-Up</h3>
                        <p className="text-gray-400 mb-4">
                            Used by the New Jersey DHCR to collect employee availability for the mandatory EEO training session. This form allowed the 450 employees in the department to sign up with personalized notifications, reminders, and surveys.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["SimpliGov", "APIs"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href = "https://njdca-dhcr.prod.simpligov.com/prod/portal/ShowWorkFlow/AnonymousEmbed/5161a9c9-5f8d-47e9-87ee-dc958ae5e8d9" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                            >
                                    View Project → 
                            </a>
                        </div>
                    </div>

                    { /* Nate the Transit Mate */ }
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Nate the Transit Mate</h3>
                        <p className="text-gray-400 mb-4">
                            Involves developing a conversational AI chatbot, integrating NJ TRANSIT's FAQ, ticket system, and schedules using Google Cloud and Dialog. This was done in less than 48 hours for the RU Hackathon.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Google Cloud", "Dialogflow"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href = "https://devpost.com/software/nate-the-transit-mate?_gl=1*1ys1jek*_gcl_au*ODU2MjQ1NTM3LjE3NTY3NjA3NzY.*_ga*MTQxMjUyMTUzNy4xNzU2NzYwNzc2*_ga_0YHJK3Y10M*czE3NTY3NjA3NzYkbzEkZzEkdDE3NTY3NjA5OTkkajM5JGwwJGgw" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                            >
                                    View Project → 
                            </a>
                        </div>
                    </div>

                    { /* Movie Recommender System */ }
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Movie Recommender System</h3>
                        <p className="text-gray-400 mb-4">
                            Involves developing a conversational AI chatbot, integrating NJ TRANSIT's FAQ, ticket system, and schedules using Google Cloud and Dialog. This was done in less than 48 hours for the RU Hackathon.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href = "https://github.com/jlatresvalles/data-science-final-project" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                    View Project → 
                            </a>
                        </div>
                    </div>

                    { /* COVID Compass */ }
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">COVID Compass</h3>
                        <p className="text-gray-400 mb-4">
                            Helped users locate hospitals based on COVID-19 case volumes. Awarded 1st in the New Jersey districts by U.S. Congressman Jeff Van Drew.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript", "APIs"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href = "https://devpost.com/software/nate-the-transit-mate?_gl=1*1ys1jek*_gcl_au*ODU2MjQ1NTM3LjE3NTY3NjA3NzY.*_ga*MTQxMjUyMTUzNy4xNzU2NzYwNzc2*_ga_0YHJK3Y10M*czE3NTY3NjA3NzYkbzEkZzEkdDE3NTY3NjA5OTkkajM5JGwwJGgw" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                            >
                                    View Project → 
                            </a>
                        </div>
                    </div>

                    { /* Pong */ }
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                                    hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Pong</h3>
                        <p className="text-gray-400 mb-4">
                            A browser-based recreation of the classic Pong game, developed using modern web technologies. The project demonstrates core principles of game development, including collision detection, animation, and responsive controls.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href = "https://jlatresvalles.github.io/pong/" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                target="_blank"
                            >
                                    View Project → 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}