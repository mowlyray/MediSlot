import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    photo: user?.photoURL || "",
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // save
  const handleSave = () => {
    setIsEdit(false);

    // later backend / firebase update
    console.log("Saved Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          My Profile
        </h2>

        {/* ✅ IMAGE FIX */}
        <div className="flex justify-center mt-6">
          <img
            src={
              isEdit
                ? formData.photo || user?.photoURL
                : user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"
            }
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow"
            alt="profile"
          />
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-5">

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled={!isEdit}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl mt-1 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              value={formData.email}
              disabled
              className="w-full p-3 border rounded-xl mt-1 bg-gray-100"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm text-gray-500">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              disabled={!isEdit}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full p-3 border rounded-xl mt-1 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-sm text-gray-500">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              disabled={!isEdit}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full p-3 border rounded-xl mt-1 outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
            />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">

          {isEdit ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Save
              </button>

              <button
                onClick={() => setIsEdit(false)}
                className="border px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default MyProfile;