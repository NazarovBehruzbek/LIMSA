import React from "react";
import "./Xizmatlar.css";
import { Card, Col, Row, Button } from "antd";
import { PiPhoneLight } from "react-icons/pi";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
const { Meta } = Card;
import img from "../../assets/images/img1.webp";
import img1 from "../../assets/images/img2.webp";
import img2 from "../../assets/images/img3.webp";
import img3 from "../../assets/images/img4.webp";
import img4 from "../../assets/images/img5.webp";
import img5 from "../../assets/images/img6.webp";
import bacground from "../../assets/images/bacground.webp";

export default function Xizmatlar() {
  return (
    <div className="container">
      <h5 className="text-center lg:text-[35px] text-blue-950 font-extrabold">
        Nega aynan biz?
      </h5>
      <h5 className="text-center lg:text-[35px] text-blue-950 font-extrabold">
        Nega ko`pchilik odamlar bizni tanlashadi?
      </h5>
      <h5 className="text-center lg:text-[35px] text-blue-800 font-extrabold">
        Afzalliklarimiz
      </h5>
      <div>
        <Row gutter={16} className="">
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="mt-8">
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img} className="m-auto w-[150px] h-[150px]" alt="##" />
              <h5 className="text-center text-[30px] font-bold text-blue-950">
                Moslashuvchan
              </h5>
              <p className="text-center text-[17px]">
                Biz yaratgan veb saytlar moslashuvchan bo’ladi. Ya’ni planshet
                va mobil versiya ega. Buning uchun aloxida to’lov qilinmaydi.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="mt-8">
            <div className="bg-white drop-shadow-xl p-20 rounded-lg">
              <img src={img} className="m-auto w-[150px] h-[150px]" alt="##" />
              <h5 className="text-center text-[30px] font-bold text-blue-950">
                Adminka
              </h5>
              <p className="text-center text-[17px]">
                Veb saytingiz qulay va sodda admin panelga ega bo’ladi bu esa
                o’z o’rnida sizga, saytga kirib boshqarishingizga imkon beradi.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="mt-8">
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img} className="m-auto w-[150px] h-[150px]" alt="##" />
              <h5 className="text-center text-[30px] font-bold text-blue-950">
                Ximoya
              </h5>
              <p className="text-center text-[17px]">
                Bizning veb saytlar zamonaviy antivirus va fayrvollar bilan
                himoyalangan bo’lib, spambot va hujumlarga bardosh bera oladi.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="mt-8">
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img} className="m-auto w-[150px] h-[150px]" alt="##" />
              <h5 className="text-center text-[30px] font-bold text-blue-950">
                Monitoring 24/7
              </h5>
              <p className="text-center text-[17px]">
                Veb saytingizni uzluksiz ishlab turishi uchun, 24 soat davomida
                onlayn avtomatik tarzda kuzatib turiladi.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="mt-8">
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img} className="m-auto w-[150px] h-[150px]" alt="##" />
              <h5 className="text-center text-[30px] font-bold text-blue-950">
                Domen va xosting
              </h5>
              <p className="text-center text-[17px]">
                Domen va hosting yugur-yugur, bosh og’riqlarini unuting. Bizda
                domen UZ va hosting 6 oyga bepul (keyin $10/oyiga)
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="mt-8">
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img} className="m-auto w-[150px] h-[150px]" alt="##" />
              <h5 className="text-center text-[30px] font-bold text-blue-950">
                Noyob
              </h5>
              <p className="text-center text-[17px]">
                Xar bir yaratgan saytimizni dizayni noyob bo’ladi va boshqa
                saytlardan ajralib turadi. Bitta dizayn — bitta sayt!
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* footer qismi */}
      <div
        className="bg-cover bg-center mt-20  bg-blue-600 flex justify-evenly py-40 items-center"
        style={{
          backgroundImage: `url(${bacground})`,
        }}
      >
        <div className="flex justify-center gap-7">
          <span className="w-[5px] h-[300px] bg-yellow-600"></span>
          <span>
            <h5 className="text-start text-[35px] text-white w-[400px] font-bold">
              Biznesingiz uchun veb saytga xoziroq buyurtma bering, Va bizdan
              kichik bir sovg`a 10% chegirmaga ega bo`ling!
            </h5>
            <p className="text-[20px] text-gray-200">
              Har bir mijozni rozi qilish bu bizning oliy maqsadimiz - ORIGIN
              DIGITAL
            </p>
          </span>
        </div>
        <div>
          <PiPhoneLight
            className="m-auto"
            color="white"
            style={{ width: "94px", height: "84px" }}
          />
          <h6 className="text-[20px] text-gray-300 font-normal">
            HOZIROQ QO`NG`IROQ QILING!
          </h6>
          <h3 className="text-[35px] font-bold text-yellow-600">
            <a href="+998 94 160 00 21">+998 94 160 00 21</a>
          </h3>
          <Button type="dashed" className="hover:bg-orange-800" block>
            Biz bilan aloqa
          </Button>
        </div>
      </div>
    </div>
  );
}
