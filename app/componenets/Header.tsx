import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-900 text-white shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Ali Bariz</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="#about" className="hover:bg-white rounded-lg hover:text-black p-2">About</Link></li>
          <li><Link href="#projects" className="hover:bg-white rounded-lg hover:text-black p-2">Projects</Link></li>
          <li><Link href="#skills" className="hover:bg-white rounded-lg hover:text-black p-2">Skills</Link></li>
          <li><Link href="#contact" className="hover:bg-white rounded-lg hover:text-black p-2">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
