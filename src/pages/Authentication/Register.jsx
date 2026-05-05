import { use, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

function Register() {
  const {createUser, setUser,  updateUser} = use(AuthContext);
   const [nameError, setNameError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const { signInWithGoogle } = use(AuthContext);
   
   const navigate = useNavigate();
   const location = useLocation();

    const handleGoogleLogin = () => {
    signInWithGoogle()
    .then((result) => {
        console.log(result)
        toast.success("Google Login successful!");
        navigate(location.state || '/')
    })
    .catch(err=> {
        console.log(err)
    })
  }

  const handleRegister = (e) =>{

    e.preventDefault();
    console.log(e.target);
    const form = e.target;

    const name = form.name.value;

    // Name validation
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const lengthCheck = password.length >= 6;

    if (!uppercase || !lowercase || !lengthCheck) {
      let msg = "❌ Password must contain:\n";
      if (!uppercase) msg += "• At least one uppercase letter\n";
      if (!lowercase) msg += "• At least one lowercase letter\n";
      if (!lengthCheck) msg += "• Minimum 6 characters";
      setPasswordError(msg);
      toast.error(" Password must have uppercase, lowercase & 6+ chars");
      return;
    } else {
      setPasswordError("");
    }
     // Create user
    createUser(email,password).then((result) => {
      const user=result.user;
       updateUser({ displayName: name, photoURL: photo })
      .then((result) => {
        console.log(result)
            setUser({ ...user, displayName: name, photoURL: photo });
           navigate(location.state || '/')
            toast.success("Login successful!");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
    })
    .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(` Login failed: ${errorMessage}`);
  });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">

      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Join MediSlot today
        </p>

        {/* FORM */}
        <form onSubmit={handleRegister} className="mt-6 space-y-4">

          {/* name */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          {nameError && <p className="text-xs text-error">{nameError}</p>}

         {/* email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          

          {/* photo url*/}
          
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

           {/* password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

           {passwordError && <p className="text-xs text-red-500 whitespace-pre-line">{passwordError}</p>}
          

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Register
          </button>

        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-5">
          <hr className="flex-1" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        {/* GOOGLE */}
        <button onClick={handleGoogleLogin}  className="w-full border py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            className="w-5"
          />
          Sign up with Google
        </button>

        {/* SWITCH */}
        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer font-medium"
          >
            LogIn
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;