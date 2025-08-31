import CardMeal from './CardMeal';
import { getImageURL } from '../image-util';
import { hotMeals } from '../data';


const hotMeals = [
 {
image: '番茄燉牛腩.jpeg',
 name: "番茄燉牛腩",
 cookingTime: "90分鐘",
 ingredients: ["牛腩", "番茄", "洋蔥", "紅蘿蔔", "薑片", "八角", "香葉", "生抽", "冰糖"]
 },
 {
image: '宮保雞丁.jpeg',
 name: "宮保雞丁",
 cookingTime: "30分鐘",
 ingredients: ["雞胸肉", "花生米", "小黃瓜", "紅蘿蔔", "乾辣椒", "花椒", "料酒", "生抽", "醋", "白糖"]
 },
 {
image: '黑椒牛柳義面.jpg',
 name: "黑椒牛柳義面",
 cookingTime: "25分鐘",
 ingredients: ["義大利麵", "牛裡肌肉", "黑胡椒", "洋蔥", "彩椒", "蒜末", "奶油", "生抽", "蠔油", "水澱粉"]
 },
 {
image: '北菇雞飯.jpeg',
 name: "北菇雞飯",
 cookingTime: "40分鐘",
 ingredients: ["雞腿肉", "乾香菇", "薑", "蔥花", "米", "生抽", "老抽", "蠔油", "料酒", "鹽"]
 },
 {
image: '酸辣薯仔絲.jpeg',
 name: "酸辣薯仔絲",
 cookingTime: "15分鐘",
 ingredients: ["馬鈴薯", "乾辣椒", "花椒", "醋", "鹽", "蔥花", "蒜末", "食用油"]
 },
 {
image: '法式香煎三文魚.webp',
 name: "法式香煎三文魚",
 cookingTime: "18分鐘",
 ingredients: ["鮭魚排", "檸檬", "迷迭香", "奶油", "黑胡椒", "鹽", "蘆筍", "小番茄"]
 },
 {
image: '麻婆豆腐.jpeg',
 name: "麻婆豆腐",
 cookingTime: "20分鐘",
 ingredients: ["嫩豆腐", "豬肉末", "郫縣豆瓣醬", "乾辣椒麵", "花椒麵", "蒜末", "蔥花", "生抽", "水澱粉"]
 },
 {
image: '羅宋湯.webp',
 name: "羅宋湯",
 cookingTime: "60分鐘",
 ingredients: ["牛肉", "高麗菜", "番茄", "馬鈴薯", "洋蔥", "紅蘿蔔", "番茄醬", "奶油", "黑胡椒", "鹽"]
 }
];



const CardMeals = () => {
  return (
        <div className="m-cards">
        <div className="m-card hot-meal">
            <div className="card-img hot-meal">
            <img src="./img/MeatballStew.jpg" alt="fish and egg plants" />
            <p>
                <i className="fa-solid fa-clock" />
                20 mins
            </p>
            </div>
            <div className="card-content hot-meal">
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
        </div>
  )
});

export default CardMeals

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