import React from 'react'
import CardSample from './Card'
import ButtonGroup from './ButtonGroup';
import Footer from './Footer';
import { vegetable01 } from '../data';  
import { vegetable02 } from '../data';  
import { vegetable03 } from '../data';  
import { vegetable04 } from '../data';  

function Season() {
  return (
    <>


        <ButtonGroup />

        <div className="container-purchase" id="spring">
          <h2>春季（3月至5月）</h2>
          <br />
          <p>春季氣候溫和潮濕，是葉菜類和豆類生長的好時節，蔬菜普遍鮮嫩清甜。</p>


          {vegetable01.map((card)=>(

            <CardSample key={card.id} image={card.image} title={card.title} text={card.text} price={card.price} />
          )
          )}

        </div>

        <div className="container-purchase" id="summer">
          <h2>夏季（6月至8月）</h2>
          <br />
          <p>夏季炎熱多雨，瓜果類蔬菜生長旺盛，多有清熱、解暑、利水的特性。</p>


          {vegetable02.map((card)=>(

            <CardSample key={card.id} image={card.image} title={card.title} text={card.text} price={card.price} />
          )
          )}

        </div>

        <div className="container-purchase" id="autumn">
          <h2>秋季（9月至11月）</h2>
          <br />
          <p>秋季天氣轉涼乾燥，根莖類和果實類蔬菜成熟，味道更為濃郁香甜。</p>


          {vegetable03.map((card)=>(

            <CardSample key={card.id} image={card.image} title={card.title} text={card.text} price={card.price} />
          )
          )}

        </div>

        <div className="container-purchase" id="winner">
          <h2>冬季（12月至2月）</h2>
          <br />
          <p>冬季寒冷，蔬菜生長速度慢，糖分儲存多，因此根莖類蔬菜尤其甜美。</p>


          {vegetable04.map((card)=>(

            <CardSample key={card.id} image={card.image} title={card.title} text={card.text} price={card.price} />
          )
          )}

        </div>


      
      <Footer />
    </>
  )
}

export default Season