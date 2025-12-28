import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { google, signup } from '../constant/constant';
import Button2 from '../components/Button2';
import Button1 from '../components/Button1';
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginUser, loginWithGoogle } from '../firebase/auth';
import { setUser, setLoading, setError } from '../features/user/userSlice';

const LoginPages: React.FC = () => {
     const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [error, setLocalError] = useState<string | null>(null);


     const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
     };

     const handleLogin = async () => {
          setLocalError(null);
          dispatch(setLoading(true));
          try {
               const user = await loginUser(email, password);
               dispatch(setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
               }));
               navigate("/");
          } catch (err: unknown) {
               let errorMessage = "Login failed";
               if (err instanceof Error) {
                    errorMessage = err.message;
               } else if (typeof err === 'string') {
                    errorMessage = err;
               }
               setLocalError(errorMessage);
               dispatch(setError(errorMessage));
          }
     }

     const handleGoogleLogin = async () => {
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
               let errorMessage = "Google login failed";
               if (err instanceof Error) {
                    errorMessage = err.message;
               }
               setLocalError(errorMessage);
               dispatch(setError(errorMessage));
          }
     }

     return (
          <div className=' flex items-center  ' >
               <div>
                    <img className=' h-[750px] mt-[60px] ' src={signup} alt="loginimages" />
               </div>

               <div className=' ml-[130px] ' >
                    <div>
                         <h2 className='  leading-[30px] text-[36px] font-semibold tracking-wide font-inter' >Log in to Exclusive</h2>
                         <p className='mt-6 text-[16px] leading-6 ' >Enter your details below</p>
                         {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>

                    <div className=' mt-12 ' >
                         <input
                              type="text"
                              placeholder='Email or Phone Number'
                              className='w-full text-black font-semibold focus:outline-none border-b border-button pb-2'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                         />

                         <div className="validator-hint hidden">Enter valid email address</div>
                    </div>

                    <div className=" pr-4 mt-10 w-[340px]">
                         <div className="mb-4">
                              <div className="relative">
                                   <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 focus:outline-none transition-colors"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                   >
                                        {showPassword ? (
                                             <EyeOff className="w-5 h-5" />
                                        ) : (
                                             <Eye className="w-5 h-5" />
                                        )}
                                   </button>

                                   <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="w-full  py-3 text-black font-semibold border-b border-button focus:outline-none "
                                   />
                              </div>
                         </div>
                    </div>

                    <div className=' pt-10 ' >
                         <Button1 onClick={handleGoogleLogin} className="mb-8 flex gap-4 w-full justify-center items-center font-normal">
                              <img src={google} alt="icon" />
                              Sign up with Google
                         </Button1>

                         <Button2 onClick={handleLogin}>Log In</Button2>
                         <button className=' loginhover ml-15 cursor-pointer text-[16px] leading-6 hover:border-b hover:border-button2 text-button2' >Forget Password?</button>
                    </div>

                    <p className="font-poppins pt-8 text-center "> Don't have any account?
                         <Link className="font-medium ml-4 underline underline-offset-8" to={"/signup"}> Register </Link>
                    </p>

               </div>

          </div>
     )
}

export default LoginPages
