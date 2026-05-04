function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100  to-blue-200">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About <span className="text-blue-600">MediSlot</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          MediSlot is a modern healthcare appointment platform designed to
          connect patients with trusted doctors quickly, safely, and easily.
          We aim to simplify healthcare access for everyone.
        </p>

      </div>

      {/* MISSION / VISION */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 pb-16">

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-600">Our Mission</h2>
          <p className="text-gray-600 text-sm mt-3">
            To make healthcare accessible by connecting patients with verified doctors instantly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-600">Our Vision</h2>
          <p className="text-gray-600 text-sm mt-3">
            A world where booking a doctor appointment is as easy as a single click.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-blue-600">Our Values</h2>
          <p className="text-gray-600 text-sm mt-3">
            Trust, transparency, and patient-first healthcare experience.
          </p>
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="bg-blue-100 py-12">

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-500 text-sm mt-1">Doctors</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-500 text-sm mt-1">Patients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-500 text-sm mt-1">Appointments</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-500 text-sm mt-1">Support</p>
          </div>

        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose MediSlot?
        </h2>

        <p className="text-center text-gray-500 mt-2 text-sm">
          We provide a fast, reliable and secure healthcare booking system
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-blue-100  p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700">Verified Doctors</h3>
            <p className="text-sm text-gray-600 mt-2">
              All doctors are verified and experienced professionals.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700">Easy Booking</h3>
            <p className="text-sm text-gray-600 mt-2">
              Book appointments in just a few clicks without hassle.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700">Secure System</h3>
            <p className="text-sm text-gray-600 mt-2">
              Your data and appointments are fully secure.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;