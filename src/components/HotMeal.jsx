import React from 'react'
import CardMealHot from './CardMealHot'
import { getImageURL } from '../image-util'
import {hot} from '../data'


function HotMeal() {
  

  
  return (
    
    <>
    <header class="m-title hot-meal">
        <h2>熱食</h2>
        <p>亞洲人偏好熱食，溫暖的食物能溫暖冬天帶來的寒冷，為生活帶來熱鬧！</p>
    </header>

    <section class="m-container hot-meal">
        <h3 class="m-subtitle">熱食食譜</h3>
        <p class="m-subtitle">亞洲人偏好熱食，為生活帶來熱鬧，溫暖的食物能溫暖冬天帶來的寒冷！</p>

        <div class="m-cards">

            {

                hot.map((meal)=>(
                  

                  <CardMealHot 
                    key={meal.id} 
                    image={getImageURL(meal.image,'./assets/hot/')} 
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


    
    </>
  )
}

export default HotMeal