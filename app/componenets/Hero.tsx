const Hero = () => {
  return (
    <section id="hero" className="text-center py-20 bg-gradient-to-tr from-slate-800 via-slate-800 to-slate-900  text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 mix-blend-multiply"></div>
      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Hello, It's Me <span className="text-accent">Ali Bariz</span>
        </h1>
        <p className="text-lg mb-8">A Passionate Frontend Developer</p>
        <img
          src="/Saved Pictures/man image.png"
          alt="Ali Bariz"
          className="mx-auto mt-8 rounded-full w-40 h-40 object-cover border-4 border-accent shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;


  