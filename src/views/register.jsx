import React from "react";
import registerImg from "../assets/images/login-banner.png";
const Register = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full bg-[#e2e8f0] h-[200px] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Register</h1>
        <p className="mt-2 text-secondary">Home &gt; Register</p>
      </div>
      <div className="w-10/12 flex  justify-center ">
        <div className="w-6/12 flex items-center">
          <img src={registerImg} alt="" className="h-[500px] w-full" />
        </div>
        <div className="w-6/12 py-4 border p-4 rounded-md my-2">
          <p className="text-lg">Doctor/Patient Register</p>
          <div className="flex my-4">
            <div className="rounded-lg rounded-e-none border py-2 px-10 flex items-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full cursor-pointer  border-[2px]"></div>
              <p>Doctor</p>
            </div>
            <div className="rounded-lg rounded-s-none border py-2 px-10 flex items-center gap-[10px]">
              <div className="w-[20px] h-[20px] rounded-full cursor-pointer  border-[2px]"></div>
              <p>Patient</p>
            </div>
          </div>
          <form action="" className="w-full">
            <input
              type="text"
              className="border rounded-xl focus:outline-none focus:border-primary py-3 px-3 w-full my-2"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border rounded-xl focus:outline-none focus:border-primary py-3 px-3 w-full my-2"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="border rounded-xl focus:outline-none focus:border-primary py-3 px-3 w-full my-2"
              placeholder="username"
            />
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
            <input
              type="text"
              className="border rounded-xl focus:outline-none focus:border-primary py-3 px-3 w-full my-2"
              placeholder="Retype Password*"
            />
            <input
              type="text"
              className="border rounded-xl focus:outline-none focus:border-primary py-3 px-3 w-full my-2"
              placeholder="Display Name"
            />
            <div className="w-full flex gap-[5px] items-center my-2">
              <input type="checkbox" name="" id="" />
              <p className="text-sm">
                Please Read The{" "}
                <span className="text-secondary cursor-pointer hover:text-primary">
                  Terms & Conditions
                </span>
              </p>
            </div>
            <button className="bg-[#09e5ab] text-white rounded-lg w-full py-2 text-lg my-2">SIGNUP</button>
            <p className="text-center text-sm">Already Have an Account? <span className="text-[#09e5ab] hover:text-primary cursor-pointer">Login Now</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
