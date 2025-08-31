import React from 'react'

function CardMealCold({image,title,cookingtime,youtube,ingredient}) {
  return (
        <div class="m-card cold-meal">

            <div class="card-img cold-meal">
                <img src={image} alt={title}/>  
                <p><i class="fa-solid fa-clock"></i>{cookingtime}</p>
            </div>
            
            <div class="card-content cold-meal">
                <h4>{title}</h4>
                <a href={youtube}>youtube link here</a>
                <p>needed 食材:</p>
                <ul>
                    <li>{ingredient}</li>
                </ul>
            </div>
        </div>
  )
}

export default CardMealCold

    //     <div class="m-card hot-meal">

    //         <div class="card-img hot-meal">
    //             <img src="./img/MeatballStew.jpg" alt="fish and egg plants">  
    //             <p><i class="fa-solid fa-clock"></i>20 mins</p>
    //         </div>
            
    //         <div class="card-content hot-meal">
    //             <h4>fish style egg plant</h4>
    //             <a href="https://youtube.com">youtube link here</a>
    //             <p>needed 食材:</p>
    //             <ul>
    //                 <li>meat</li>
    //                 <li>vrg</li>
    //                 <li>peper</li>
    //                 <li>食材</li>
    //                 <li>食材</li>
    //                 <li>食材</li>
    //                 <li>食材</li>
    //                 <li>食材</li>
    //                 <li>食材</li>
    //                 <li>食材</li>
    //                 <li>食材</li>
    //             </ul>
    //         </div>
    //     </div>



    // // <div className="m-cards">
    // //   <div className="m-card hot-meal">
    // //     <div className="card-img hot-meal">
    // //       <img src="./img/MeatballStew.jpg" alt="fish and egg plants" />
    // //       <p>
    // //         <i className="fa-solid fa-clock" />
    // //         20 mins
    // //       </p>
    // //     </div>
    // //     <div className="card-content hot-meal">
    // //       <h4>fish style egg plant</h4>
    // //       <a href="https://youtube.com">youtube link here</a>
    // //       <p>needed 食材:</p>
    // //       <ul>
    // //         <li>meat</li>
    // //         <li>vrg</li>
    // //         <li>peper</li>
    // //         <li>食材</li>
    // //         <li>食材</li>
    // //         <li>食材</li>
    // //         <li>食材</li>
    // //         <li>食材</li>
    // //         <li>食材</li>
    // //         <li>食材</li>
    // //         <li>食材</li>
    // //       </ul>
    // //     </div>
    // //   </div>
    // // </div>