import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function RelatedDoctors({ speciality, currentDoctorId }) {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  // filter + exclude current + limit
  const related = doctors
    .filter(
      (d) =>
        d.speciality === speciality &&
        d.id !== currentDoctorId
    )
    .slice(0, 3);

  return (
    <div className="mt-16">

      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Related Doctors
        </h2>

        <p className="text-gray-500 mt-2">
          Explore top specialists similar to your selected doctor
        </p>
      </div>

      {/* EMPTY STATE */}
      {related.length === 0 ? (
        <div className="text-center mt-10 text-gray-500">
          <p className="text-lg font-medium">
            No related doctors found
          </p>
          <p className="text-sm mt-2">
            Try exploring other specialities
          </p>
        </div>
      ) : (

        /* GRID */
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">

          {related.map((doc) => (
            <div
              key={doc.id}
              onClick={() => navigate(`/appointment/${doc.id}`)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden
              shadow-sm hover:shadow-xl border border-gray-100
              transition duration-300 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={doc.image}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* INFO */}
              <div className="p-4 text-center">

                <p className="text-green-600 text-xs font-medium">
                  ● Available
                </p>

                <h3 className="font-semibold text-gray-800 mt-1">
                  {doc.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {doc.speciality}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default RelatedDoctors;