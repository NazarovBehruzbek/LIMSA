import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function Page1() {
  return (
    <div className='page1'>
      <div className="container">
        <div className="page1-text">
          <h6>LIMSA - TURLI XIL VEB SAYTLA YARATISH XIZMATI</h6>
          <h1>Arzon sifatli <span className='secon-text-color'>veb sayt yaratish xizmati</span></h1>
          <p>O`zbekistonda eng arzon va sifatli Veb Sayt Yaratish xizmati. Biz sizga eng sifatli bo`lgan saytlarni hamyonbop narxga yaratib beramiz. Bizning maqsadimiz insonlarga hamyonbop narxda, tez, sifatli va qulay xizmat ko`rsatish.</p>
          <div className="page-1-btn">
            <Link to="/contact" className='btn-1'>Aloqa</Link>
            <Link to="service" className='btn-2'>Xizmatlar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
