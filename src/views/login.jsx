import React from "react";
import registerImg from "../assets/images/login-banner.png";
const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full bg-[#e2e8f0] h-[200px] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Register</h1>
        <p className="mt-2 text-secondary">Home &gt; Login</p>
      </div>
      <div className="w-10/12 flex items-center justify-center ">
        <div className="w-6/12 flex items-center ">
          <img src={registerImg} alt="" className="h-[500px] w-full" />
        </div>
        <div className="w-6/12 border p-4  py-8  rounded-md my-2 h-max ">
          <p className="text-lg">Doctor/Patient Login</p>

          <form action="" className="w-full">
            <input
              type="text"
              className="border rounded-xl focus:outline-none focus:border-primary py-3 px-3 w-full my-2"
              placeholder="Email"
            />
            <input
              type="text"
              className="border rounded-xl focus:outline-none focus:border-primary py-3 px-3 w-full my-2"
              placeholder="Password*"
            />
            <div className="w-full flex justify-end">
              <p className="text-secondary hover:text-primary cursor-pointer">Forgot password?</p>
            </div>
            <button className="bg-[#09e5ab] text-white rounded-lg w-full py-2 text-lg my-2">
              SIGNUP
            </button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <span className="text-[#09e5ab] hover:text-primary cursor-pointer">
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
