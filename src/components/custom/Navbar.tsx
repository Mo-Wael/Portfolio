import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const focused = "text-purple-700 underline";

  return (
    <nav className="sticky top-0 z-50 w-full bg-black text-white px-5 py-3">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to={'/'}>
          <h1 className='text-xl font-bold text-gray-400 hover:scale-125 hover:text-white transition-all'>MO</h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className='hover:text-red-400 hover:underline transition-all'><NavLink className={location.pathname === "/" ? focused : ""} to="/">Home</NavLink></li>
          <li className='hover:text-red-400 hover:underline transition-all'><NavLink className={location.pathname === "/Education" ? focused : ""} to="/Education">Education</NavLink></li>
          <li className='hover:text-red-400 hover:underline transition-all'><NavLink className={location.pathname === "/Experiences" ? focused : ""} to="/Experiences">Experiences</NavLink></li>
          <li className='hover:text-red-400 hover:underline transition-all'><NavLink className={location.pathname === "/Projects" ? focused : ""} to="/Projects">Projects</NavLink></li>
          <li className='hover:text-red-400 hover:underline transition-all'><NavLink className={location.pathname === "/Contact" ? focused : ""} to="/Contact">Contact</NavLink></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-zinc-900 p-4 rounded-lg">
          <li onClick={toggleMenu} className='hover:text-red-400 transition-all'><NavLink className={location.pathname === "/" ? focused : ""} to="/">Home</NavLink></li>
          <li onClick={toggleMenu} className='hover:text-red-400 transition-all'><NavLink className={location.pathname === "/Education" ? focused : ""} to="/Education">Education</NavLink></li>
          <li onClick={toggleMenu} className='hover:text-red-400 transition-all'><NavLink className={location.pathname === "/Experiences" ? focused : ""} to="/Experiences">Experiences</NavLink></li>
          <li onClick={toggleMenu} className='hover:text-red-400 transition-all'><NavLink className={location.pathname === "/Projects" ? focused : ""} to="/Projects">Projects</NavLink></li>
          <li onClick={toggleMenu} className='hover:text-red-400 transition-all'><NavLink className={location.pathname === "/Contact" ? focused : ""} to="/Contact">Contact</NavLink></li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;
