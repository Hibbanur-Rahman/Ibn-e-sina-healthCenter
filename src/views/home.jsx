import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import healthCenterImg from "../assets/images/health-center-img.jpg";
import appointLadyImg from "../assets/images/appoinment-img.png";
import { FaBed } from "react-icons/fa";
import { FaTablets } from "react-icons/fa";
import { FaVial } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

import serviceImg1 from "../assets/images/service-img-1.jpg";
import serviceImg2 from "../assets/images/service-img-2.jpg";
import serviceImg3 from "../assets/images/service-img-3.jpg";
import serviceImg4 from "../assets/images/service-img-4.jpg";

import serviceSubItemImg1 from "../assets/images/service-subItem-img-1.svg";
import serviceSubItemImg2 from "../assets/images/service-subItem-img-2.svg";
import serviceSubItemImg3 from "../assets/images/service-subItem-img-3.svg";
import serviceSubItemImg4 from "../assets/images/service-subItem-img-4.svg";

const Home = () => {
  return (
    <div className="w-full">
      {/**========== hero section ========= */}
      <div className="w-full flex items-center justify-center bg-primary-500 h-[85vh]">
        <div className="w-10/12 flex justify-between">
          <div className="w-6/12 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-black">Search Doctor,</h1>
            <h1 className="text-4xl font-bold text-primary">
              Make an Appointment
            </h1>
            <div className="border px-3 py-3 my-4 mb-2 flex gap-[10px] items-center rounded-lg bg-primary shadow-sm w-max">
              <FaCheckCircle className="text-white text-xl" />
              <p className="text-white">Instant Operation & Appointment</p>
            </div>
            <div className="border px-3 py-3 my-4 flex gap-[10px] items-center rounded-lg bg-primary shadow-sm w-max">
              <FaCheckCircle className="text-white text-xl" />
              <p className="text-white">100% Expert Doctors</p>
            </div>
            <p className="text-secondary text-lg">
              Discover the best doctors, clinic & hospital the city nearest to
              you
            </p>
          </div>
          <div className="w-6/12 flex items-center justify-end">
            <img
              src={healthCenterImg}
              alt=""
              className="rounded-3xl h-[400px] shadow-2xl"
            />
          </div>
        </div>
      </div>
      {/**========== emergency section ====== */}
      <div className="w-full flex py-8 px-4">
        <div className="w-3/12">
          <img src={appointLadyImg} alt="" className="w-full" />
        </div>
        <div className="w-9/12 flex flex-wrap ">
          <div className="w-full flex h-min gap-[20px]">
            <div className="border rounded-xl p-4 w-4/12 shadow-sm">
              <div className="w-max bg-[#fff1e6] px-4 py-4 rounded-md shadow-sm">
                <FaBed className="text-[#F2994A] text-5xl " />
              </div>
              <p className="py-4 text-xl font-semibold">Visit a Doctor</p>
              <p className="text-secondary text-base">
                We provide the a wide range of medical services, so every person
                could have the opportunity
              </p>
              <button className="text-black hover:text-white hover:bg-primary px-4 py-2 rounded-3xl my-4 border-primary border">
                Read More
              </button>
            </div>
            <div className="border rounded-xl p-4 w-4/12 shadow-sm">
              <div className="w-max bg-[#e3ffef] px-4 py-4 rounded-md shadow-sm">
                <FaTablets className="text-[#27ad5f] text-5xl " />
              </div>
              <p className="py-4 text-xl font-semibold">Medical</p>
              <p className="text-secondary text-base">
                We provide the a wide range of medical services, so every person
                could have the opportunity
              </p>
              <button className="text-black hover:text-white hover:bg-primary px-4 py-2 rounded-3xl my-4 border-primary border">
                Read More
              </button>
            </div>
            <div className="border rounded-xl p-4 w-4/12 shadow-sm">
              <div className="w-max bg-[#fff1f1] px-4 py-4 rounded-md shadow-sm">
                <FaVial className="text-[#eb5757] text-5xl " />
              </div>
              <p className="py-4 text-xl font-semibold">Services</p>
              <p className="text-secondary text-base">
                We provide the a wide range of medical services, so every person
                could have the opportunity
              </p>
              <button className="text-black hover:text-white hover:bg-primary px-4 py-2 rounded-3xl my-4 border-primary border">
                Read More
              </button>
            </div>
          </div>
          <div className="w-full flex gap-[20px]">
            <div className="w-4/12 border rounded-xl shadow-sm p-4">
              <h1 className="text-2xl mb-4">Schedule</h1>
              <div className="flex justify-between my-3">
                <p className="text-gray-700 font-medium">Monday - Friday</p>
                <p className="text-secondary ">8.00 - 13.00</p>
              </div>
              <div className="flex justify-between mt-3">
                <p className="text-gray-700 font-medium">Saturday</p>
                <p className="text-secondary ">8.00 - 15.00</p>
              </div>
            </div>
            <div className="w-8/12 rounded-xl shadow-sm p-4 bg-primary flex flex-col justify-between">
              <p className="text-white text-2xl">Request an Appointment</p>
              <div className="flex ">
                <PiPhoneCall className="text-7xl text-white" />
                <div className="">
                  <p className="text-white text-lg">call us on</p>
                  <p className="text-white text-4xl">+91-9973152523</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-500 flex justify-center py-10">
        <div className="w-10/12 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-3">
            High Quality Service for you
          </h1>
          <p className="w-6/12 text-center text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nulla nobis culpa eos quaerat quidem id voluptate totam numquam
          </p>
          <div className="w-full flex gap-[20px] mt-8">
            <div className="group w-3/12 flex items-center justify-center h-[300px] border rounded-xl overflow-hidden relative">
              <img
                src={serviceImg1}
                alt=""
                className="w-full h-full group-hover:scale-125 transition-all duration-500"
              />
              <div className="w-11/12 h-[90%] group-hover:scale-100 scale-0  rounded-2xl absolute flex flex-col items-center justify-center bg-[rgba(0,0,0,0.8)]  transition-all duration-500">
                <div className="bg-primary rounded-xl px-3 py-2">
                  <img
                    src={serviceSubItemImg1}
                    alt=""
                    className="h-[60px] w-[50px]"
                  />
                </div>
                <h1 className="text-white my-4 text-2xl">cardiologist</h1>
                <div className="rounded-full bg-primary p-2 cursor-pointer">
                  <FaArrowRightLong className="text-white text-xl" />
                </div>
              </div>
            </div>
            <div className="group w-3/12 flex items-center justify-center h-[300px] border rounded-xl overflow-hidden relative">
              <img
                src={serviceImg2}
                alt=""
                className="w-full h-full group-hover:scale-125 transition-all duration-500"
              />
              <div className="w-11/12 h-[90%] group-hover:scale-100 scale-0  rounded-2xl absolute flex flex-col items-center justify-center bg-[rgba(0,0,0,0.8)]  transition-all duration-500">
                <div className="bg-primary rounded-xl px-3 py-2">
                  <img
                    src={serviceSubItemImg2}
                    alt=""
                    className="h-[60px] w-[50px]"
                  />
                </div>
                <h1 className="text-white my-4 text-2xl">Dentist</h1>
                <div className="rounded-full bg-primary p-2 cursor-pointer">
                  <FaArrowRightLong className="text-white text-xl" />
                </div>
              </div>
            </div>
            <div className="group w-3/12 flex items-center justify-center h-[300px] border rounded-xl overflow-hidden relative">
              <img
                src={serviceImg3}
                alt=""
                className="w-full h-full group-hover:scale-125 transition-all duration-500"
              />
              <div className="w-11/12 h-[90%] group-hover:scale-100 scale-0  rounded-2xl absolute flex flex-col items-center justify-center bg-[rgba(0,0,0,0.8)]  transition-all duration-500">
                <div className="bg-primary rounded-xl px-3 py-2">
                  <img
                    src={serviceSubItemImg3}
                    alt=""
                    className="h-[60px] w-[50px]"
                  />
                </div>
                <h1 className="text-white my-4 text-2xl">Laboratory</h1>
                <div className="rounded-full bg-primary p-2 cursor-pointer">
                  <FaArrowRightLong className="text-white text-xl" />
                </div>
              </div>
            </div>
            <div className="group w-3/12 flex items-center justify-center h-[300px] border rounded-xl overflow-hidden relative">
              <img
                src={serviceImg4}
                alt=""
                className="w-full h-full group-hover:scale-125 transition-all duration-500"
              />
              <div className="w-11/12 h-[90%] group-hover:scale-100 scale-0  rounded-2xl absolute flex flex-col items-center justify-center bg-[rgba(0,0,0,0.8)]  transition-all duration-500">
                <div className="bg-primary rounded-xl px-3 py-2">
                  <img
                    src={serviceSubItemImg4}
                    alt=""
                    className="h-[60px] w-[50px]"
                  />
                </div>
                <h1 className="text-white my-4 text-2xl">Neurology</h1>
                <div className="rounded-full bg-primary p-2 cursor-pointer">
                  <FaArrowRightLong className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
