const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-bl from-slate-800 via-slate-800 to-slate-900 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-lg bg-cardBg border border-accent focus:outline-none focus:ring-2 focus:ring-accent text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-cardBg border border-accent focus:outline-none focus:ring-2 focus:ring-accent text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 h-32 rounded-lg bg-cardBg border border-accent focus:outline-none focus:ring-2 focus:ring-accent text-white"
          ></textarea>
          <button className="bg-accent text-dark px-6 py-3 rounded-lg border border-accent shadow-md hover:scale-105 transition-transform">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
