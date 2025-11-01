import { useState } from 'react'
import './AuthForm.css'

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600'>
            <div className='bg-white p-8 rounded-2xl shadow-xl transition-all duration-500'>
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
                    <button onClick={() => setIsLogin(!isLogin)} className=''>
                    {isLogin ? "Sign up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    )
}