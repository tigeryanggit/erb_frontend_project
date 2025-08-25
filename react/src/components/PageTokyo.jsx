import React from 'react';
import Navbar from './Navbar';
import HistoryTokyo from './HistoryTokyo';
import WeatherTokyo from './WeatherTokyo'; 
import SightTokyo from './SightTokyo';
import WebTokyo from './ＷebTokyo';
import Footer from './Footer';
import CarouselGalleryTokyo from './Carousel Tokyo';





function PageTokyo() {
  return (
        

    <div className="tokyo">

        {/* <Navbar /> */}
        <HistoryTokyo />
        <WeatherTokyo />
        <SightTokyo />
        <CarouselGalleryTokyo />
        <WebTokyo />
        <Footer /> 
        
    </div>       

  )
}

export default PageTokyo