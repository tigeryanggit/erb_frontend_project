import React from 'react'


function Cardmeat({image, alt, title, text, link}) {
  return (

    <>
        {/* <div class="card card-meat" >
            <img src={image} class="card-img-top" alt={alt}/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <a href={link} class="btn btn-primary">詳細資料</a>
            </div>
        </div> */}

        <div className="card card-meat mb-3" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt={alt}/>
            </div>
            <div className="col-md">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
              <a href={link} class="btn btn-primary">詳細資料</a>
              </div>
            </div>
          </div>
        </div>



    </>
  )
}

export default Cardmeat







        // <div class="card card-meat" >
        //     <img src={redmeat} class="card-img-top" alt="紅肉"/>
        //     <div class="card-body">
        //         <h5 class="card-title">紅肉</h5>
        //         <p class="card-text">因含有較多的「肌紅蛋白」（一種儲存氧氣的蛋白質），生肉呈現紅色，煮熟後變為褐色。主要營養包括鐵（吸收率高的血基質鐵）、鋅、維生素B12、蛋白質、維生素B群（如菸鹼酸）。常見例子有牛肉、豬肉、羊肉、肋排、牛排、火腿。</p>
        //         <a href="/redmeat" class="btn btn-primary">詳細資料</a>
        //     </div>
        // </div>

        // <div class="card card-meat" >
        //     <img src={whitemeat} class="card-img-top" alt="白肉"/>
        //     <div class="card-body">
        //         <h5 class="card-title">白肉</h5>
        //         <p class="card-text">因含有較多的「肌紅蛋白」（一種儲存氧氣的蛋白質），生肉呈現紅色，煮熟後變為褐色。白肉脂肪較低（尤其是去皮後）、主要包括維生素B群（如B6、菸鹼酸）、磷、硒。常見例子有雞胸肉、雞腿、鴨肉、火雞胸。</p>
        //         <a href="/whitemeat" class="btn btn-primary">詳細資料</a>
        //     </div>
        // </div>

        // <div class="card card-meat" >
        //     <img src={seafood} class="card-img-top" alt="海鮮"/>
        //     <div class="card-body">
        //         <h5 class="card-title">海鮮</h5>
        //         <p class="card-text">這是一個非常多元化的類別，包括脂肪含量高的魚和脂肪含量低的魚，以及甲殼類和軟體動物。主要營養包括Omega-3脂肪酸（特別是深海魚）、高品質蛋白質、維生素D、碘、硒、鈣（帶骨小魚及貝類）。常見例子有魚類、蝦、蟹、龍蝦、蛤蜊、牡蠣。</p>
        //         <a href="/seafood" class="btn btn-primary">詳細資料</a>
        //     </div>
        // </div>