import { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from '../../provider/AuthProvider';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const { signInWithGoogle, signIn } = use(AuthContext);
  // let x;

  // if(location.state){
  //  x= location.state;
  // }


   const handleGoogleLogin = () => {
    signInWithGoogle()
    .then((result) => {
        console.log(result)
        toast.success("Google Login successful");
        navigate(location.state || '/')
    })
    .catch(err=> {
        console.log(err);
        toast.error("Google Sign-In Failed");
    })
  }

  const handleLogin =(e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error("Login failed "); 
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">

      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to your MediSlot account
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
           {error && <p className="text-red-400 text-xs">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Login
          </button>

        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-5">
          <hr className="flex-1" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        {/* GOOGLE BUTTON */}
        <button onClick={handleGoogleLogin} className="w-full border py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <FaGoogle/>
          Sign in with Google
        </button>

        {/* SWITCH */}
        <p className="text-center text-sm mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer font-medium"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;