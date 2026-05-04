import { NavLink } from "react-router-dom";
import logoimage from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-blue-800 text-white ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <img className="w-10 " src={logoimage} alt="logo" />

            <h2 className="text-2xl font-bold text-white">MediSlot</h2>
          </div>

          <p className="mt-3 text-sm text-blue-200">
            Book appointments with trusted doctors easily and manage your health
            digitally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li>
              <NavLink to="/" className="hover:text-white transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctors" className="hover:text-white transition">
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li>Online Appointment</li>
            <li>Doctor Consultation</li>
            <li>Health Records</li>
            <li>Secure Payments</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-blue-200 text-sm">
            <li>Email: support@medislot.com</li>
            <li>Phone: +880 1XXXXXXXXX</li>
            <li>Location: Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 py-4 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} MediSlot. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
