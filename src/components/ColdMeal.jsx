import React from 'react'
import CardMealCold from "./CardMealCold"
import { getImageURL } from '../image-util'
import {cold} from '../data'
import Footer from './Footer';
import Shopping from './Shopping';

const ColdMeal = () => {
  
  return (
    
    <>

        <Shopping />
                <header class="m-title cold-meal">
                    <br />
                    <br />
                    <h2>涼食</h2>
                    <p>冷食在炎熱的夏季十分流行，清涼的食物和豐富的選擇，成為消暑的理想佳餚，增加生活的樂趣。</p>
                </header>

                <section class="m-container cold-meal">
                    <h3 class="m-subtitle">涼食食譜</h3>
                    <p class="m-subtitle">清涼的食物和豐富的選擇，能夠為炎炎夏日帶來舒適與震撼，成為消暑的理想佳餚。</p>

                    <div class="m-cards">


                        {

                            cold.map((meal)=>(
                            

                            <CardMealCold 
                                key={meal.id} 
                                image={getImageURL(meal.image,'./assets/cold/')} 
                                title={meal.name} 
                                cookingtime={meal.cookingTime} 
                                ingredient={
                                            meal.ingredients.map((x)=>(
                                                                <li>{x}</li>
                                            )
                                            )
                                            }
                            
                            
                            />
                            )


                            )

                        }



                

                    </div>
                
                </section>
        <Footer />

    
    </>
  )
}


export default ColdMeal


{/* <div className="m-cards"> */}
        {/* one card */}
        {/* <div className="m-card cold-meal">
            <div className="card-img cold-meal">
            <img src="./img/MeatballStew.jpg" alt="fish and egg plants" />
            <p>
                <i className="fa-solid fa-clock" />
                20 mins
            </p>
            </div>
            <div className="card-content cold-meal">
            <h4>fish style egg plant</h4>
            <a href="https://youtube.com">youtube link here</a>
            <p>所須食材:</p>
            <ul>
                <li>meat</li>
                <li>vrg</li>
                <li>peper</li>
                <li>食材</li>
                <li>食材</li>
                <li>食材</li>
                <li>食材</li>
                <li>食材</li>
                <li>食材</li>
                <li>食材</li>
                <li>食材</li>
            </ul>
            </div>
        </div>
        </div> */}