import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#e7e7e850] ">
      <div className="w-10/12 flex gap-[10px] py-8 justify-between">
        <div className="w-3/12">
          <h1
            className="text-2xl md:text-3xl font-extrabold text-primary cursor-pointer"
            style={{ textShadow: "0px 5.25px 5.25px rgba(0,0,0,0.2)" }}
          >
            Ibn - e - Sina
          </h1>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt
            consequatur labore voluptates omnis quam, impedit facilis tenetur
          </p>
        </div>
        <div className="w-2/12">
          <p className="font-semibold text-lg mb-6">Specialities </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            Neurology
          </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            Cardiologist
          </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            Dentist
          </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            Urology
          </p>
        </div>
        <div className="w-2/12">
          <p className="font-semibold text-lg mb-6">Services </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            Medical
          </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            Operation
          </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            Laboratory
          </p>
          <p className="hover:text-primary  cursor-pointer text-gray-800 my-4">
            ICU
          </p>
        </div>
        <div className="w-3/12">
          <p className="font-semibold text-lg mb-6">Contact Us </p>
          <div className="my-4 flex gap-[10px] items-center">
            <IoLocationSharp className="text-secondary text-2xl" />
            <p className="text-gray-800">Manuu Campus, Gachibowli, Hyderabad</p>
          </div>
          <div className="my-4 flex gap-[10px] items-center">
            <FaPhoneAlt className="text-secondary text-lg" />
            <p className="text-gray-800">+91 99731 52523</p>
          </div>
          <div className="my-4 flex gap-[10px] items-center">
            <FaEnvelope className="text-secondary text-lg" />
            <p className="text-gray-800">ibnesina@manuu.edu.in</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#e5e5e5]  flex items-center justify-center">
        <div className="w-10/12 flex items-center justify-between py-3">
          <p className="text-black">© 2024 Ibn-e-Sina. All rights reserved.</p>
          <p className="text-black">Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
