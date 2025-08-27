import React from 'react';
import Cardmeat from './Cardmeat';
import {cardmeat} from '../data';
import Footer from './Footer';


function Meat() {
  return (
    <>
      <div className='container-meat'>

          <h2>肉類介紹</h2>
          <br />
          <p>說到買菜,當然小不了肉類.肉類在我們的飲中亦佔著重要的位置,這一節我們會為大家簡單介紹肉類的基本分類和智識。</p>

          <h3>肉類的主要分類</h3>

          {
              cardmeat.map((card)=>(

                  <Cardmeat key={card.id} image={card.image} title={card.title} alt={card.alt} text={card.text} link={card.link} />
              )

              )

          }
          


      </div>
      <Footer />
    </>
  )
}

export default Meat