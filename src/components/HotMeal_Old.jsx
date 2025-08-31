import CardMeals from "./CardMeals";
import CardMeal from "./CardMeal";
import {hotMeals} from '../data';

const HotMeal = () => {
  return (
    <>
      <header className="m-title hot-meal">
        <h2>熱食</h2>
        <p>亞洲人偏好熱食，溫暖的食物能溫暖冬天帶來的寒冷，為生活帶來熱鬧！</p>
      </header>
      <section className="m-container hot-meal">
        <h3 className="m-subtitle">熱食食譜</h3>
        <p className="m-subtitle">
          亞洲人偏好熱食，為生活帶來熱鬧，溫暖的食物能溫暖冬天帶來的寒冷！
        </p>

        </section>
    </>

  )
}

export default HotMeal


    // <div className="m-cards">
    //   <div className="m-card hot-meal">
    //     <div className="card-img hot-meal">
    //       <img src="./img/MeatballStew.jpg" alt="fish and egg plants" />
    //       <p>
    //         <i className="fa-solid fa-clock" />
    //         20 mins
    //       </p>
    //     </div>
    //     <div className="card-content hot-meal">
    //       <h4>fish style egg plant</h4>
    //       <a href="https://youtube.com">youtube link here</a>
    //       <p>needed 食材:</p>
    //       <ul>
    //         <li>meat</li>
    //         <li>vrg</li>
    //         <li>peper</li>
    //         <li>食材</li>
    //         <li>食材</li>
    //         <li>食材</li>
    //         <li>食材</li>
    //         <li>食材</li>
    //         <li>食材</li>
    //         <li>食材</li>
    //         <li>食材</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

