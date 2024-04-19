import React from "react";

import Header from './Components/Header/index';
import { Outlet } from "react-router-dom";
import Foter from './Components/Foter/index';

export default function Layout() {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Foter/>
    </div>
  )
}
