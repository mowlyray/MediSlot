import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/banner-image.png";

function Banner() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 py-10 md:py-14">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Book Appointment <br />
            With Trusted Doctors
          </h1>

          <p className="mt-4 text-blue-100 text-base md:text-lg">
            🩺MediSlot helps you easily connect with certified doctors, 
            book appointments, and manage your health with ease.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/doctors")}
              className="bg-white text-blue-600 px-6 py-3 rounded-full 
              hover:bg-gray-100 hover:scale-105 transition duration-300 shadow-lg"
            >
              Book Appointment
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border border-white text-white px-6 py-3 rounded-full 
              hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1  flex justify-center">
          <img
            src={bannerImg}
            alt="doctor"
            className="w-full rounded-full  max-w-md md:max-w-lg "
          />
        </div>

      </div>
    </section>
  );
}

export default Banner;