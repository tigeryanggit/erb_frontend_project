import {Address} from "../data"

const Maddress = () => {
  return (
    <>
        {
            Address.map((mdata)=>(
              <ul id={mdata.ulID}>
                  <li>
                    <h3><i className={mdata.sicon} />{mdata.stitle}</h3>
                  </li>
                  {mdata.text.map((x)=>
                    (<li>{x}</li>)
                    )}
              </ul>
            ))
        }
    </>
  )
}

export default Maddress;

    // html
    // <ul id="HKI">
    //     <li>
    //       <h3><i className="fa-solid fa-street-view" />香港島</h3>
    //     </li>

    //     <li>香港西營盤正街44號</li>
    //     <li>香港上環德輔道西38號1樓</li>
    //     <li>香港西營盤正街45號</li>
    //     <li>香港石塘咀皇后大道西470號 石塘咀市政大廈</li>
    //     <li>香港上環皇后大道中345號 上環市政大廈</li>
    //     <li>香港愛秩序灣道15號</li>
    //     <li>香港柴灣柴灣道338號柴灣市政大廈</li>
    //     <li>香港炮台山電氣道229號電氣道市政大廈</li>
    //     <li>香港北角渣華道99號 渣華道市政大廈</li>
    //     <li>香港吉勝街10號(近祥利街17號後面)</li>
    //     <li>香港北角七姊妹道160號</li>
    //     <li>香港鰂魚涌街38號 鰂魚涌市政大廈</li>
    //     <li>香港筲箕灣太安街12號西灣河市政大廈</li>
    //     <li>香港柴灣怡豐街33號</li>
    //     <li>香港香港仔香港仔大道203號 香港仔市政大廈</li>
    // </ul>

    // id:3,
    // ulID:"NT",
    // sicon:"fa-solid fa-street-view",
    // stitle:"新界及離島",
    // text:[  "長洲大興堤路",
    //         "長洲大興堤路2號",
    //         "東涌富東街",
    //         "大嶼山梅窩梅窩碼頭路",
    //         "大嶼山梅窩銀石街9號",
    //         "坪洲寶坪街2號",