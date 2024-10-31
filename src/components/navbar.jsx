import React from "react";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center bg-primary-500 py-4">
      <div className="w-10/12 flex justify-between">
        <div className="">
          <h1
            className="text-2xl md:text-3xl font-extrabold text-primary cursor-pointer"
            style={{ textShadow: "0px 5.25px 5.25px rgba(0,0,0,0.2)" }}
          >
            Ibn - e - Sina
          </h1>
        </div>
        <div className="flex gap-[30px] items-center">
            <p className="hover:text-primary text-black cursor-pointer">Home</p>
            <p className="hover:text-primary text-black cursor-pointer">Doctors</p>
            <p className="hover:text-primary text-black cursor-pointer">Book Appointment</p>
            <p className="hover:text-primary text-black cursor-pointer">Contact Us</p>
        </div>
        <div className="flex gap-[15px]">
          <button className="flex items-center gap-[10px] rounded-lg border-1 bg-white px-4 py-2">
            <FiUser />
            <p>Register</p>
          </button>
          <button className="flex items-center gap-[10px] rounded-lg border-1 bg-primary px-4 py-2">
            <FiLock className="text-white" />
            <p className="text-white">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
