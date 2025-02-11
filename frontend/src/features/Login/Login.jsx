import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form 
      className="max-w-md mx-auto mt-40 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl p-8"
      onSubmit={onSubmitHandler}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            {currentState}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full" />
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {currentState === 'Sign Up' && (
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
              placeholder="Full Name"
              required
            />
          )}
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition"
            placeholder="Password"
            required
          />
        </div>

        {/* Links */}
        <div className="flex justify-between text-sm">
          <button type="button" className="text-gray-600 hover:text-gray-800 font-medium transition">
            Forgot password?
          </button>
          <button
            type="button"
            className="text-gray-600 hover:text-gray-800 font-medium transition"
            onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
          >
            {currentState === 'Login' ? 'Create an Account' : 'Login Here'}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-gray-700 hover:to-gray-600 transform hover:scale-[1.02] transition-all"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default Login;