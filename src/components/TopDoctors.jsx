import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">

      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top Doctors to Book
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Easily connect with our top-rated doctors and book your appointment in just a few clicks.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

        {doctors.map((doc) => (
          <div
            key={doc.id}
            onClick={() => navigate(`/appointment/${doc.id}`)}
            className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden 
            shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            
            {/* Image */}
            <div className="relative">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Always Available Badge */}
              <span className="absolute top-2 left-2 text-xs px-3 py-1 rounded-full 
              bg-green-100 text-green-600">
                Available
              </span>
            </div>

            {/* Info */}
            <div className="p-3 text-center">
              <h3 className="text-sm font-semibold text-gray-800 truncate">
                {doc.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {doc.speciality}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/doctors")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full 
          hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md"
        >
          View All Doctors
        </button>
      </div>

    </section>
  );
}

export default TopDoctors;