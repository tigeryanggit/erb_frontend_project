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
import DropdownHome from './DropdownHome';
import DropdownMeat from './DropdownMeat';
import DropdownVegetables from './DropdownVegetables';
import DropdownMap from './DropdownMap';
import DropdownPurchase from './DropdownPurchase';
import DropdownRecipe from './DropdownRecipe';
import Index from './Index';
import HotMeal from './HotMeal';
import ColdMeal from './ColdMeal';
import Vegetable from './Vegetable';
import Vegetables from './Vegetables';
import Fruits from './Fruits';
import Grains from './Grains';
import Recipe from './Recipe';
import Map from './Map';


// import HotMeal from './HotMeal';
// import ColdMeal from './ColdMeal';
// import HotMeal from './HotMeal';



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

                        {/* <li><DropdownHome /></li>                        
                        <li><DropdownMap /></li>
                        <li><DropdownPurchase /></li>
                        <li><DropdownMeat /></li>
                        <li><DropdownVegetable /></li>
                        <li><DropdownRecipe /></li>
                        <li><DropdownAbout /></li> */}


                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/map">街巿地圖</Link></li>
                        <li><Link to="/purchase">時令蔬菜</Link></li>
                        {/* <li><Link to="/hotmeal">Hot</Link></li>
                        <li><Link to="/coldmeal">Cold</Link></li> */}
                        <li><DropdownMeat /></li>
                        <li><DropdownVegetables/></li>
                        <li><DropdownRecipe/></li>
                        <li><Link to="/about">關於</Link></li>

                        
                        
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
                                    <li><Link to="/vegetables" onClick={handleToggle}>素類介紹</Link></li>
                                    <li><Link to="/recipe" onClick={handleToggle}>食譜簡介</Link></li>
                                    <li><Link to="/about" onClick={handleToggle}>關於</Link></li>
                    </ul>
                </div>

            </nav>

        <Routes>

            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Index />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/meat" element={<Meat />} />
            <Route path="/redmeat" element={<Redmeat />} />
            <Route path="/whitemeat" element={<Whitemeat />} />
            <Route path="/seafood" element={<Seafood />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/grains" element={<Grains />} />
            <Route path="/vegetable" element={<Vegetable />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/map" element={<Map />} />
            <Route path="/hotmeal" element={<HotMeal />} />
            <Route path="/coldmeal" element={<ColdMeal />} />
            {/* <Route path="/coldmeal" element={<ColdMeal />} /> */}

            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* Add footer */}
            {/* <Footer /> */}
        </Routes>



    </BrowserRouter> 
  )
}

export default Navbar