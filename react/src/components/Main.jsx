import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import TypeExample from './Button';
// import maintokyo from "../assets/main/main-tokyo.png";
// import mainseoul from "../assets/main/main-seoul.png";
// import mainbangkok from "../assets/main/main-bangkok.png";
// import mainlondon from "../assets/main/main-london.png";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';


function Main() {
  return (

    <>

        {/* <Navbar /> */}
        <main className="container-main">

            <h2>買菜</h2>
            <p>本網站主要為你介紹XXX</p>
            {/* <TypeExample /> */}




        </main>

        <Footer />

    </>
  )
}

export default Main