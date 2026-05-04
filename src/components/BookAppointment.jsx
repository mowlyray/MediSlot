import doctorImg from "../assets/book-appointment.png";

function BookAppointment() {
  return (
    <section className="py-16 px-4 md:px-10">
      <div
        className="max-w-7xl mx-auto 
      bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 
      rounded-3xl overflow-hidden 
      flex flex-col md:flex-row items-center 
      shadow-lg"
      >
        {/* Left Content */}
        <div className="flex-1 text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Book Appointment <br />
            With 100+ Trusted Doctors
          </h2>

          <p className="mt-4 text-blue-100 max-w-md">
            Connect with experienced doctors instantly. Easy booking, secure
            payments, and quality healthcare at your fingertips.
          </p>

          {/* Trust Points */}
          <p className="mt-3 text-sm text-blue-200">
            ✔ Verified Doctors &nbsp; ✔ Instant Booking &nbsp; ✔ Secure Payment
          </p>

          <button
            onClick={() => {
              document
                .getElementById("speciality")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 flex items-center gap-2 
            bg-white text-blue-600 px-6 py-3 rounded-full 
            hover:bg-gray-100 hover:scale-105 transition duration-300 shadow-lg"
          >
            Book Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex flex-1 justify-center items-end">
          <img
            src={doctorImg}
            alt="doctor"
            className="w-[280px] md:w-[580px] object-contain 
         md:translate-y-6 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default BookAppointment;
