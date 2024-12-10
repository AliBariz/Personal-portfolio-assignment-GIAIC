const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Next.js",
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 shadow-lg rounded-lg border border-accent hover:scale-105 transition-transform">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
  