import React from 'react'
import {useState} from 'react';
import logo from "/src/assets/Logo.png";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Purchase from "./Purchase";
import Meat from "./Meat";
import Redmeat from './Redmeat';
import Whitemeat from './Whitemeat';
import Seafood from './Seafood';
import Main from "../components/Main";
import About from "../components/About";

const Navbar = () => {

    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    };

  return (

    <BrowserRouter> 
        <ScrollToTop/>
            <nav className="container-nav">
                <div className="nav-logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="nav-menu">
                    <ul>

                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/map">街巿地圖</Link></li>
                        <li><Link to="/purchase">時令蔬菜</Link></li>
                        <li><Link to="/meat">肉類介紹</Link></li>
                        <li><Link to="/vegetable">素類介紹</Link></li>
                        <li><Link to="/recipe">食譜簡介</Link></li>
                        <li><Link to="/about">關於</Link></li>
                        {/* <li><Link to="/redmeat">Redmeat</Link></li> */}
                        
                        
                    </ul>
                </div>


                <div className="nav-burger">
                    <div className="mobile-menu-toggle" onClick={handleToggle}> 
                        <i className="fa-solid fa-bars fa-2x"></i>
                    </div>
                </div>

                <div className={
                    isToggle ? "mobile-list active":"mobile-list"
                } >
                    <ul>
                                    <li><Link to="/" onClick={handleToggle}>首頁</Link></li>
                                    <li><Link to="/map" onClick={handleToggle}>街巿地圖</Link></li>
                                    <li><Link to="/purchase" onClick={handleToggle}>時令蔬菜</Link></li>
                                    <li><Link to="/meat" onClick={handleToggle}>肉類介紹</Link></li>
                                    <li><Link to="/vegetable" onClick={handleToggle}>素類介紹</Link></li>
                                    <li><Link to="/recipe" onClick={handleToggle}>食譜簡介</Link></li>
                                    <li><Link to="/about" onClick={handleToggle}>關於</Link></li>
                    </ul>
                </div>

            </nav>

        <Routes>

            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/meat" element={<Meat />} />
            <Route path="/redmeat" element={<Redmeat />} />
            <Route path="/whitemeat" element={<Whitemeat />} />
            <Route path="/seafood" element={<Seafood />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* Add footer */}
            {/* <Footer /> */}
        </Routes>



    </BrowserRouter> 
  )
}

export default Navbar