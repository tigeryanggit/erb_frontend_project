import React from 'react'
import CarouselBeef from './CarouselBeef';
import CarouselPork from './CarouselPork';
import CarouselGoat from './CarouselGoat';


function Redmeat() {
  return (
    <>
        <div className="container-redmeat">
                <h2>紅肉</h2>
                <br />
                <p>紅肉主要是指來自哺乳類動物的肌肉，其特點是肉中含有較高濃度的「肌紅蛋白」，這是一種負責在肌肉中儲存氧氣的蛋白質。肌紅蛋白與氧氣結合時呈現紅色，因此這類生肉看起來是紅色的，煮熟後則會變為褐色。</p>

            <div class="card text-bg-light mb-3">

                <CarouselBeef />
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">牛肉</h5>
                    <p class="card-text">常見部位：</p> 
                    <p class="card-text">牛腩、肋眼、西冷、牛柳、牛小排、牛腱等。</p>
                    <p class="card-text">特點：</p> 
                    <p class="card-text">風味濃郁，是全球消費最廣泛的紅肉之一。質地從軟嫩（如菲力）到富有嚼勁（如牛腱）不等。</p>
                </div>

            </div>


            <div class="card text-bg-light mb-3">
                <CarouselPork />
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">豬肉</h5>
                    <p class="card-text">常見部位：</p> 
                    <p class="card-text">豬里肌（豬扒）、豬五花肉、豬梅花肉、豬頰肉、排骨等。</p>
                    <p class="card-text">特點：</p> 
                    <p class="card-text">雖然烹飪後的豬肉常呈現白色，但根據其肌紅蛋白含量，在營養學和食品科學上仍被歸類為紅肉。肉質和脂肪含量因部位不同而有很大差異。</p>
                </div>

            </div>

            <div class="card text-bg-light mb-3">
                <CarouselGoat />
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">羊肉</h5>
                    <p class="card-text">常見部位：</p> 
                    <p class="card-text">羊肩、羊腿、羊排、羊鞍等。</p>
                    <p class="card-text">特點：</p> 
                    <p class="card-text">具有獨特的羶味，風味強烈。肉質通常比牛肉細嫩，脂肪融點較高。</p>
                </div>

            </div>
        </div>

    </>
  )
}

export default Redmeat;