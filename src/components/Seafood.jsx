import React from 'react'
import CarouselFish2 from './CarouselFish2';
import CarouselShellfish from './CarouselShellfish';
import Footer from './Footer';
import Shopping from './Shopping';

function Seafood() {
  return (
   <>
        <Shopping />
        
        <div className="container-header back-seafood">
                <h2>海鮮</h2>
                <br />
                <p>海鮮泛指所有供人類食用的海洋生物，主要分為兩大類：魚類 和 貝類（包括甲殼類和軟體動物）。一般來說，海鮮的價錢相對較貴，經常出現於飲宴之中。</p>

        </div>


        <div className="container-whitemeat">


            <div class="card text-bg-light mb-3">

                <CarouselFish2 />
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">魚類</h5>
                    <p class="card-text">常見種類：</p> 
                    <p class="card-text">除了另一章節提過的白肉魚類外,還有三文魚、鯖魚、鱸魚，鰻魚（鱔）等</p>
                    <p class="card-text">特點：</p> 
                    <p class="card-text">香港人多以清蒸為主，將魚處理乾淨後，盤底放上蔥段薑片，魚身上也鋪上薑絲、蔥段等，放入沸騰的蒸鍋中，根據大小用大火蒸8-15分鐘。此方法最能保留魚肉的原汁原味和鮮美，口感滑嫩，健康低脂。</p>
                    <br />
                </div>

            </div>


            <div class="card text-bg-light mb-3">
                <CarouselShellfish />
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">貝類</h5>
                    <p class="card-text">常見種類：</p> 
                    <p class="card-text">蝦、龍蝦、螃蟹、蠔、扇貝、魷魚、海螺、鮑魚等。</p>
                    <p class="card-text">特點：</p> 
                    <p class="card-text">吃海鲜是一件非常享受的事情，但确实需要注意一些地方，海鲜是“高嘌呤”食物，应严格限制或避免食用。海鲜亦是常见过敏源。如果已知对某种海鲜过敏，一定要避免。</p>
                    <br />
                </div>

            </div>

        </div>
        <Footer />
    </>

  )
}

export default Seafood