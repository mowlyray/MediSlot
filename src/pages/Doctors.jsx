import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("All");

  const filters = [
    "All",
    "General Physician",
    "Gynecologist",
    "Neurologist",
    "Pediatrician",
    "Dermatologist",
    "Gastroenterologist",
  ];

  const filtered =
    selected === "All"
      ? doctors
      : doctors.filter((d) => d.speciality === selected);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200">

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">

        {/* LEFT FILTER PANEL (IMPROVED UI) */}
        <aside className="lg:w-1/4">

          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-6 sticky top-24">

            {/* HEADER IMPROVED */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Find Your Doctor
              </h2>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Search and filter doctors by speciality and book your appointment instantly.
              </p>

              {/* small highlight tag */}
              <div className="mt-3">
                <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  🔍 Smart Search Enabled
                </span>
              </div>
            </div>

            {/* FILTER BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-2">

              {filters.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(item)}
                  className={`px-3 py-2 text-sm rounded-full transition font-medium border
                  ${
                    selected === item
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-blue-50"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </aside>

        {/* RIGHT SIDE */}
        <main className="lg:w-3/4">

          {/* HEADER (CENTER IMPROVED) */}
          <div className="text-center mb-10">

            <h2 className="text-3xl font-bold  text-blue-600">
              {selected === "All" ? "All Doctors" : selected}
            </h2>

            <p className="text-gray-500 mt-2">
              {filtered.length} verified doctors available for instant booking
            </p>

          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filtered.map((doc) => (
              <div
                key={doc.id}
                onClick={() => navigate(`/appointment/${doc.id}`)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden
                shadow-sm hover:shadow-2xl border border-gray-100
                transition duration-300 hover:-translate-y-2"
              >

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={doc.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                </div>

                {/* INFO */}
                <div className="p-5">

                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {doc.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {doc.speciality}
                  </p>

                  {/* STATUS */}
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Available
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 flex justify-between items-center">

                    <span className="text-blue-600 text-sm font-medium">
                      Book Appointment →
                    </span>

                    <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-600 transition flex items-center justify-center">
                      <span className="text-blue-600 group-hover:text-white text-sm">
                        +
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Doctors;