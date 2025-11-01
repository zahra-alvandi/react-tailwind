import { useState } from 'react'
import './AuthForm.css'
import { motion } from 'framer-motion';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600'>
            <div className='bg-white p-8 rounded-2xl shadow-2xl w-80 transition-all duration-500'>
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
                    {isLogin ? "Login" : "Creat Account"}
                </h2>

                <form action="">
                    {isLogin && (
                        <input type="text" placeholder='Username' className='w-full p-2 my-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'/>
                    )}

                    <input type="email" placeholder='Email' className='w-full p-2 my-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'/>
                    <input type="password" placeholder='Password' className='w-full p-2 my-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'/>

                    <button type='submit' className='w-full bg-indigo-500 text-white py-2 my-2 rounded-lg hover:bg-indigo-600 transition'>
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                <p className='text-sm text-center text-gray-600 mt-4'>
                    {isLogin ? "Dont have an account?" : "Already have an account?"}
                    <button onClick={() => setIsLogin(!isLogin)} className='text-indigo-500 font-semibold ml-1 hover:underline'>
                    {isLogin ? "Sign up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    )
}

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 overflow-hidden">
//         <AnimatePresence mode="wait">
//           {isLogin ? (
//             <motion.div
//               key="login"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.4 }}
//             >
//               <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//                 Login
//               </h2>
//               <form className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
//                 >
//                   Login
//                 </button>
//               </form>
//               <p className="text-sm text-center text-gray-600 mt-4">
//                 Don't have an account?
//                 <button
//                   onClick={() => setIsLogin(false)}
//                   className="text-indigo-500 font-semibold ml-1 hover:underline"
//                 >
//                   Sign up
//                 </button>
//               </p>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="register"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 0.4 }}
//             >
//               <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//                 Create Account
//               </h2>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
//                 >
//                   Sign Up
//                 </button>
//               </form>
//               <p className="text-sm text-center text-gray-600 mt-4">
//                 Already have an account?
//                 <button
//                   onClick={() => setIsLogin(true)}
//                   className="text-purple-500 font-semibold ml-1 hover:underline"
//                 >
//                   Login
//                 </button>
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
