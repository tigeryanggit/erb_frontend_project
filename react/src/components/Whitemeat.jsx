import React from 'react'
import CarouselBird from './CarouselBird';
import CarouselFish from './CarouselFish';
import Footer from './Footer';
import Shopping from './Shopping';

function Whitemeat() {
  return (
   <>
        <Shopping />
        <div className="container-whitemeat">
                <h2>白肉</h2>
                <br />
                <p>白肉是一個廣義的分類，通常指烹飪前顏色較淺、烹飪後通常呈白色的肉類。與紅肉相比，白肉的最大特點是肌肉纖維中的「肌紅蛋白」含量較低。肌紅蛋白是一種儲存氧氣的蛋白質，含量越低，肉的顏色就越淺。</p>

            <div class="card text-bg-light mb-3">

                <CarouselBird />
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">禽類</h5>
                    <p class="card-text">常見種類：</p> 
                    <p class="card-text">雞肉、鴨肉、鵝肉等。</p>
                    <p class="card-text">特點：</p> 
                    <p class="card-text">廣東燒味常見的素材，大多以慢煮為主以保持肉質鮮嫩。</p>
                    <br />
                </div>

            </div>


            <div class="card text-bg-light mb-3">
                <CarouselFish />
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">魚類</h5>
                    <p class="card-text">常見種類：</p> 
                    <p class="card-text">鱈魚、鯛魚、比目魚、鯧魚、黃花魚等。</p>
                    <p class="card-text">特點：</p> 
                    <p class="card-text">肉質細嫩，脂肪含量通常較低（但並非全部，例如富含油脂的鮭魚就更常被單獨分類）。</p>
                    <br />
                </div>

            </div>

        </div>
        <Footer /> 
    </>
  )
}

export default Whitemeat