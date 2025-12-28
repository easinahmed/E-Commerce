import { Link, useNavigate } from "react-router";
import Button1 from "../components/Button1";
import { google, signup } from "../constant/constant";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, loginWithGoogle } from "../firebase/auth";
import { setUser, setLoading, setError } from "../features/user/userSlice";

interface UserData {
  fullName: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setLocalError] = useState<string | null>(null);

  const [userData, setUserData] = useState<UserData>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    dispatch(setLoading(true));
    try {
      const user = await registerUser(userData.email, userData.password, userData.fullName);
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }));
      navigate("/");
    } catch (err: unknown) {
      let errorMessage = "Signup failed";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setLocalError(errorMessage);
      dispatch(setError(errorMessage));
    }
  };

  const handleGoogleSignup = async () => {
    setLocalError(null);
    dispatch(setLoading(true));
    try {
      const user = await loginWithGoogle();
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }));
      navigate("/");
    } catch (err: unknown) {
      let errorMessage = "Google signup failed";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setLocalError(errorMessage);
      dispatch(setError(errorMessage));
    }
  }

  return (
    <div className="relative">
      <div className="absolute">
        <img src={signup} alt="image" />
      </div>

      <div className="container mt-15">
        <div className="grid grid-cols-2 items-center gap-[120px]">
          <div></div>

          <div className="py-[125px] max-w-[370px]">
            <h2 className="font-inter text-[36px] font-medium mb-6">
              Create an account
            </h2>
            <p className="font-poppins mb-12">Enter your details below</p>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-10 font-poppins text-gray-500">
              <input
                className="pb-2 border-b border-button focus:outline-none"
                name="email"
                type="email"
                placeholder="Email or Phone Number"
                value={userData.email}
                onChange={handleChange}
                required
              />

              <input
                className="pb-2 border-b border-button focus:outline-none"
                name="fullName"
                type="text"
                placeholder="Name"
                value={userData.fullName}
                onChange={handleChange}
                required
              />

              <input
                className="pb-2 border-b border-button mb-8 focus:outline-none"
                name="password"
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
                required
              />

              <button className="bg-button2 hover:bg-red-600 transition-all duration-300 cursor-pointer text-white font-medium font-poppins px-12 py-4 rounded-sm w-full ">
                Create Account
              </button>
            </form>

            <Button1 onClick={handleGoogleSignup} className="mb-8 mt-8 flex gap-4 w-full justify-center items-center font-normal">
              <img src={google} alt="icon" />
              Sign up with Google
            </Button1>

            <p className="font-poppins text-center">
              Already have an account?
              <Link
                className="font-medium ml-4 underline underline-offset-8"
                to="/login"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
