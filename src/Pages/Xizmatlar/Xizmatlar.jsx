import React from "react";
import "./Xizmatlar.css";
import { Col, Row } from "antd";

import img from "../../assets/images/img1.webp";
import img1 from "../../assets/images/img2.webp";
import img2 from "../../assets/images/img3.webp";
import img3 from "../../assets/images/img4.webp";
import img4 from "../../assets/images/img5.webp";
import img5 from "../../assets/images/img6.webp";

export default function Xizmatlar() {
  return (
    <div className="p-20">
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
        <Row gutter={16}>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="mt-8 hover:-translate-y-5 transition-all duration-300"
          >
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img} className="m-auto w-[130px] h-[130px]" alt="##" />
              <h5 className="text-center text-[25px] font-bold text-blue-950">
                Moslashuvchan
              </h5>
              <p className="text-center text-[15px]">
                Biz yaratgan veb saytlar moslashuvchan bo’ladi. Ya’ni planshet
                va mobil versiya ega. Buning uchun aloxida to’lov qilinmaydi.
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="mt-8  hover:-translate-y-5 transition-all duration-300"
          >
            <div className="bg-white drop-shadow-xl p-20 rounded-lg">
              <img src={img1} className="m-auto w-[130px] h-[130px]" alt="##" />
              <h5 className="text-center text-[25px] font-bold text-blue-950">
                Adminka
              </h5>
              <p className="text-center text-[15px]">
                Veb saytingiz qulay va sodda admin panelga ega bo’ladi bu esa
                o’z o’rnida sizga, saytga kirib boshqarishingizga imkon beradi.
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="mt-8  hover:-translate-y-5 transition-all duration-300"
          >
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img2} className="m-auto w-[130px] h-[130px]" alt="##" />
              <h5 className="text-center text-[25px] font-bold text-blue-950">
                Ximoya
              </h5>
              <p className="text-center text-[15px]">
                Bizning veb saytlar zamonaviy antivirus va fayrvollar bilan
                himoyalangan bo’lib, spambot va hujumlarga bardosh bera oladi.
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="mt-8  hover:-translate-y-5 transition-all duration-300"
          >
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img3} className="m-auto w-[130px] h-[130px]" alt="##" />
              <h5 className="text-center text-[25px] font-bold text-blue-950">
                Monitoring 24/7
              </h5>
              <p className="text-center text-[15px]">
                Veb saytingizni uzluksiz ishlab turishi uchun, 24 soat davomida
                onlayn avtomatik tarzda kuzatib turiladi.
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="mt-8  hover:-translate-y-5 transition-all duration-300"
          >
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img4} className="m-auto w-[130px] h-[130px]" alt="##" />
              <h5 className="text-center text-[25px] font-bold text-blue-950">
                Domen va xosting
              </h5>
              <p className="text-center text-[15px]">
                Domen va hosting yugur-yugur, bosh og’riqlarini unuting. Bizda
                domen UZ va hosting 6 oyga bepul (keyin $10/oyiga)
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="mt-8  hover:-translate-y-5 transition-all duration-300"
          >
            <div className="bg-white drop-shadow-xl rounded-lg p-20">
              <img src={img5} className="m-auto w-[130px] h-[130px]" alt="##" />
              <h5 className="text-center text-[25px] font-bold text-blue-950">
                Noyob
              </h5>
              <p className="text-center text-[15px]">
                Xar bir yaratgan saytimizni dizayni noyob bo’ladi va boshqa
                saytlardan ajralib turadi. Bitta dizayn — bitta sayt!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
