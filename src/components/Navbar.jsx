import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import logoimage from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      setDropdownOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  // click outside close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-2 py-1 ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <nav className="w-full border-b bg-blue-50 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={logoimage} />
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            MediSlot
          </NavLink>
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-6 font-medium">
          <NavLink to="/" className={navLinkClass}>HOME</NavLink>
          <NavLink to="/doctors" className={navLinkClass}>ALL DOCTORS</NavLink>
          <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
          <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
        </ul>

        {/* RIGHT SIDE (SAME FOR ALL DEVICES) */}
        <div className="flex items-center gap-4">

          {user ? (
            <div className="relative" ref={dropdownRef}>

              {/* AVATAR (BOTH MOBILE + DESKTOP) */}
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                className="w-10 h-10 rounded-full border cursor-pointer"
              />

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-xl overflow-hidden z-50 border">

                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      setDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    My Appointments
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-5 py-2 rounded-full"
            >
              Create Account
            </button>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink>
          <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>ALL DOCTORS</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink>

          {/* ONLY KEEP AVATAR HERE TOO (NO DUPLICATE MENU) */}
          

        </div>
      )}
    </nav>
  );
}

export default Navbar;