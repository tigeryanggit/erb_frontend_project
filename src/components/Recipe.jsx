import React from 'react'
import wash from '../assets//recipe/wash-your-hands.png';
import cleaver from '../assets/recipe/cleaver.png';
import salt from '../assets/recipe/salt.png';
import salad from '../assets/recipe/salad.png';
import pot from '../assets/recipe/pot.png';



const Recipe = () => {
    return (
<>
  <section className="cookinfo dhead">
    <div className="ccontainer">
      <h2>買咗餸，梗係準備先啦!</h2>
      <p>煮之前，要確保烹調過程順利且美味，令食嘅時候更安心，烹調過程順利！</p>
      <a href="#pre" className="cbtn">
        煮前準備
      </a>
    </div>
  </section>
  <section className="cookinfo" id="pre">
    <h2>煮前準備</h2>
    <div className="ccontent">
      <div className="cc-title">
        <img src={wash} alt="clean and wash" />
        <h3>清洗</h3>
        <p>將所有蔬菜、肉類及其他食材徹底清洗乾淨</p>
      </div>
      <div className="cc-title">
        <img src="./img/cleaver.png" alt="cut and processing" />
        <h3>切配備料</h3>
        <p>依照菜餚的烹調需求，將食材切成適當大小，方便快炒。</p>
      </div>
      <div className="cc-title">
        <img src="./img/salt.png" alt="seasoning" />
        <h3>準備醬料</h3>
        <p>預備醬料和調味料，醃或調味食材，増加食材風味，方便烹調時使用。</p>
      </div>
    </div>
  </section>
  <article className="cookinfo recipets">
    <h2>菜單食譜</h2>
    <p>prepare the meal, prevent the mess</p>
    <div className="cook-btns">
      <div className="cc-title">
        <a href="#">
          <img src="./img/salad.png" alt="cool meal recipets link" />
        </a>
        <p>涼食食譜</p>
      </div>
      <div className="cc-title">
        <a href="#">
          <img src="./img/pot.png" alt="hot meal recipets link" />
        </a>
        <p>熱食食譜</p>
      </div>
    </div>
  </article>
</>

    )
}

export default Recipe;
