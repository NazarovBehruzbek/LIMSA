import React from "react";
import "./Footer.css";
import { Button } from "antd";
import { PiPhoneLight } from "react-icons/pi";
import bacground from "../../assets/images/bacground.webp";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdPhoneEnabled } from "react-icons/md";

export default function Foter() {
  return (
    <>
      <div
        className="bg-cover bg-center mt-10 bg-blue-800 flex flex-col lg:flex-row justify-evenly lg:py-24 items-center"
        style={{
          backgroundImage: `url(${bacground})`,
        }}
      >
        <div className="flex justify-center lg:gap-7">
          <span className="w-[5px] h-[300px] bg-yellow-600 hidden lg:block"></span>
          <span className="w-full lg:w-[400px]">
            <h5 className="text-start lg:text-start text-[35px] text-white font-bold">
              Biznesingiz uchun veb saytga xoziroq buyurtma bering, Va bizdan
              kichik bir sovg`a 10% chegirmaga ega bo`ling!
            </h5>
            <p className="text-[20px] text-gray-200 text-start">
              Har bir mijozni rozi qilish bu bizning oliy maqsadimiz - ORIGIN
              DIGITAL
            </p>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 lg:w-[300px]">
          <PiPhoneLight
            className="m-auto"
            color="white"
            style={{ width: "94px", height: "84px" }}
          />
          <h6 className="text-[20px] text-gray-300 font-normal text-center">
            HOZIROQ QO`NG`IROQ QILING!
          </h6>
          <h3 className="text-[35px] font-bold text-yellow-600 text-center">
            <a href="tel:+998941600021">+998 94 16000 21</a>
          </h3>
          <button className="p-5 text-[18px] bg-white text-blue-600 rounded-md font-semibold hover:-translate-y-2 transition-all duration-300">
            Biz bilan aloqa
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-[50px] py-[20px]">
        <div className="text-[20px] font-semibold">
          <a href="">© 2024 LIMSA. Barcha huquqlar himoyalangan.</a>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span className="border-gray-400 border w-[60px] h-[60px] rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
            <a href="">
              <FaInstagram className="w-[35px] h-[35px]" />
            </a>
          </span>
          <span className="border-gray-400 border w-[60px] h-[60px] rounded-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
            <a href="">
              <FaTelegramPlane className="w-[35px] h-[35px]" />
            </a>
          </span>
          <span className="border-gray-400 border w-[60px] h-[60px] rounded-full hover:bg-gradient-to-r from-blue-500 to-blue-900 flex justify-center items-center">
            <a href="">
              <MdPhoneEnabled className="w-[35px] h-[35px]" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
