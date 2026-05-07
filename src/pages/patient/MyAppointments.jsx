import { useState } from "react";
import { toast } from "react-toastify";

function MyAppointments() {
  // 🧠 Mock data (backend আসলে এটা replace হবে API দিয়ে)
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. John Smith",
      speciality: "General Physician",
      address: "Dhaka Medical Center",
      date: "2026-05-10",
      time: "10:00 AM",
      paid: false,
    },
    {
      id: 2,
      doctorName: "Dr. Sarah Johnson",
      speciality: "Gynecologist",
      address: "Apollo Hospital",
      date: "2026-05-12",
      time: "11:00 AM",
      paid: true,
    },
  ]);

  // 💳 Payment handler (mock)
  const handlePayment = (id) => {
    setAppointments((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, paid: true } : app
      )
    );
    toast.success("Payment successful!");
  };

  // ❌ Cancel appointment
  const handleCancel = (id) => {
    const confirm = window.confirm("Are you sure you want to cancel?");
    if (!confirm) return;

    setAppointments((prev) => prev.filter((app) => app.id !== id));
    toast.error("Appointment cancelled");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">

      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        My Appointments
      </h2>

      <div className="max-w-5xl mx-auto space-y-6">

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500">
            No appointments found
          </p>
        ) : (
          appointments.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl shadow-md p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >

              {/* LEFT INFO */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {app.doctorName}
                </h3>

                <p className="text-gray-500">
                  {app.speciality}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  📍 {app.address}
                </p>

                <p className="text-sm mt-2 text-gray-600">
                  📅 {app.date} | ⏰ {app.time}
                </p>

                {/* PAYMENT STATUS */}
                <p className={`mt-2 text-sm font-medium ${
                  app.paid ? "text-green-600" : "text-red-500"
                }`}>
                  {app.paid ? "Paid" : "Payment Pending"}
                </p>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex gap-3">

                {!app.paid && (
                  <button
                    onClick={() => handlePayment(app.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    Pay Online
                  </button>
                )}

                <button
                  onClick={() => handleCancel(app.id)}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded-full hover:bg-red-200 transition"
                >
                  Cancel
                </button>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default MyAppointments;