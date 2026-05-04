import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import RelatedDoctors from "../../components/RelatedDoctors";

function Appointment() {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const doctor = doctors.find((d) => d.id === Number(docId));

  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM", "5:00 PM"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-12 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE IMAGE */}
        <div className="bg-white rounded-3xl shadow-lg p-5 flex justify-center items-center">
          <img
            src={doctor.image}
            className="w-full max-w-sm rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

          {/* NAME */}
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            {doctor.name}
            <span className="text-blue-600 text-lg">✔</span>
          </h2>

          <p className="text-gray-500 mt-1">
            {doctor.degree} • {doctor.speciality}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {doctor.experience} Experience
          </p>

          {/* ABOUT */}
          <div className="mt-5">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              About ℹ
            </h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {doctor.about}
            </p>
          </div>

          {/* ADDRESS */}
          <p className="mt-4 text-sm text-gray-500">
            📍 {doctor.address}
          </p>

          {/* FEES */}
          <p className="mt-4 text-lg font-semibold text-blue-600">
            Appointment Fee: ৳{doctor.fees}
          </p>

          {/* BOOKING SLOT */}
          <div className="mt-6">

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Select Date
            </h3>

            {/* DAYS */}
            <div className="flex gap-2 flex-wrap">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    selectedDay === index
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-blue-50 text-gray-600 hover:bg-blue-100"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* TIME */}
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              Select Time
            </h3>

            <div className="flex gap-2 flex-wrap">
              {timeSlots.map((time, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    selectedTime === time
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-100"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* BUTTON */}
            <button
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full
              hover:bg-blue-700 hover:shadow-lg transition duration-300"
            >
              Book Appointment
            </button>

          </div>

        </div>

      </div>

      {/* RELATED DOCTORS */}
      <RelatedDoctors
        speciality={doctor.speciality}
        currentDoctorId={doctor.id}
      />

    </div>
  );
}

export default Appointment;