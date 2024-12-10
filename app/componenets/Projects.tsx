const Projects = () => {
  const projects = [
    { title: "Project 1", description: "A great project about React and TypeScript." },
    { title: "Project 2", description: "Next.js app with dynamic routing." },
    { title: "Project 3", description: "Full-stack MERN application." },
    { title: "Project 4", description: "Interactive UI with Tailwind CSS." },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-cardBg p-6 rounded-lg border border-accent shadow-md hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

  