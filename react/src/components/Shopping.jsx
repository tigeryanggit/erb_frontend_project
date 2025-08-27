import hktv from '../assets/Advertisment/HKTVMall.jpg';
import wellcome from '../assets/Advertisment/wellcome.jpg';
import parknshop from '../assets/Advertisment/parknshop.jpg';


function Shopping() {


  return (
    <div className='adv'>

      <ul> <i class="fa-solid fa-cart-shopping"></i> 可於下列電商購買

        <li>
            <a onClick={() => window.open("https://www.hktvmall.com/")}><img src={hktv} alt="" /></a>
        </li>
        <li>
            <a onClick={() => window.open("https://www.wellcome.com.hk/")}><img src={wellcome} alt="" /></a>
        </li>

        <li>
            <a onClick={() => window.open("https://www.pns.hk/zh-hk/")}><img src={parknshop} alt="" /></a>            
        </li>
      </ul>
        



    </div>
  )
}

export default Shopping