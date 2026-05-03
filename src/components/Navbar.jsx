import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoimage from "../assets/logo.png";

function Navbar() {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-500"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`;

    const [showMenu, setShowMenu] = useState(false);
    const [token,setToken] = useState(true)

  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={logoimage} alt="logo" />
          <NavLink to="/" className="text-2xl font-bold text-blue-600 hover:opacity-80 transition">
            MediSlot
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <NavLink to="/" className={navLinkClass}>
            HOME
          </NavLink>

          <NavLink to="/doctors" className={navLinkClass}>
            ALL DOCTORS
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            CONTACT
          </NavLink>
        </ul>

        {/* Right Button */}
        <div className="hidden md:block">
            {
                token 
                ? <div></div>
                : <button onClick={()=>navigate('/login')}  className="bg-blue-600 text-white px-5 py-2 rounded-full 
          hover:bg-blue-700 hover:shadow-lg hover:scale-105 
          transition duration-300 cursor-pointer">
            Create Account
          </button>
            }
         
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fadeIn">
          <ul className="flex flex-col gap-4 font-medium">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
              HOME
            </NavLink>

            <NavLink to="/doctors" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
              ALL DOCTORS
            </NavLink>

            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
              ABOUT
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
              CONTACT
            </NavLink>

            {token ? (
              <div></div>
            ) : (
              <button onClick={()=>navigate('/my-profile')} className="bg-blue-600 text-white py-2 rounded-full mt-2 hover:bg-blue-700 transition cursor-pointer">
                My Profile
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;