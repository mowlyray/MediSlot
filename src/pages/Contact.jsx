import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white py-12 px-4">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
  <span className="bg-gradient-to-r from-blue-600 to-blue-600 text-transparent bg-clip-text">
    Get in Touch
  </span>
</h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Have questions about appointments, doctors, or services?  
          We’re here to help you 24/7.
        </p>
      </div>

      {/* MAIN BOX */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT INFO CARD */}
        <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>

          <div className="space-y-4 text-gray-600">

            <div className="p-4 rounded-2xl bg-blue-50">
              <p className="font-semibold text-gray-700">📍 Address</p>
              <p>Dhaka Medical Area, Bangladesh</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50">
              <p className="font-semibold text-gray-700">📞 Phone</p>
              <p>+880 1XXXXXXXXX</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50">
              <p className="font-semibold text-gray-700">📧 Email</p>
              <p>support@medislot.com</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50">
              <p className="font-semibold text-gray-700">⏰ Working Hours</p>
              <p>24/7 Emergency Support</p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl 
              hover:bg-blue-700 hover:scale-[1.02] transition duration-300 shadow-md"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;