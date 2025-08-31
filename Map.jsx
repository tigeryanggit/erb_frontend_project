import React from 'react'
import Navbar from './Navbar'
import Shopping from './Shopping'
import Footer from './Footer'
import MLinks from './MLinks'
import Maddress from './Maddress'

function Map() {
    return (
    <div>
        <Shopping/>
        <br/>
        <br/>
        <br/>
        <section className="wetm">
            <h2>香港街市</h2>
            <p>
            香港街市至2017年香港共有221座，每個香港行政區劃均有5至12座，售賣新鮮糧食的店鋪逾2,700家；分別由食物環境衛生署、房屋委員會或領展管理，亦有部分由其他私人公司營辦。
            </p>
        </section>
        <section className="map">
            <h2 className="title">公眾街市地圖</h2>
            <br />

            <div className="map-body">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29530.326924835048!2d114.19743012408533!3d22.304836804436537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6KGX5biC!5e0!3m2!1szh-TW!2shk!4v1755843682449!5m2!1szh-TW!2shk"
                width={600}
                height={450}
                loading="lazy"
                allowFullScreen=""
            />
            </div>

            <br />

            <MLinks/>

            <article className="address">
                <h2 className="title">公眾街市地址</h2>

                <Maddress/>

            </article>

        </section>

        <Footer/>

    </div>
    )
}

export default Map;


{/* <div>
        <Shopping/>
        <section className="wetm">
            <h2>香港街市</h2>
            <p>
            香港街市至2017年香港共有221座，每個香港行政區劃均有5至12座，售賣新鮮糧食的店鋪逾2,700家；分別由食物環境衛生署、房屋委員會或領展管理，亦有部分由其他私人公司營辦。
            </p>
        </section>

        <section className="map">
            <h2 className="title">公眾街市地圖</h2>
            <br />
            <div className="map-body">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29530.326924835048!2d114.19743012408533!3d22.304836804436537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6KGX5biC!5e0!3m2!1szh-TW!2shk!4v1755843682449!5m2!1szh-TW!2shk"
                width={600}
                height={450}
                loading="lazy"
                allowFullScreen=""
            />
            </div>

            <br />

            <ul className="area">
            <li>
                <a href="#HKI">
                <i className="fa-solid fa-location-dot" />
                香港島
                </a>
            </li>
            <li>
                <a href="#KLN">
                <i className="fa-solid fa-location-dot" />
                九龍
                </a>
            </li>
            <li>
                <a href="#NT">
                <i className="fa-solid fa-location-dot" />
                新界及離島
                </a>
            </li>
            </ul>

        </section>

        <article className="address">
            <h2 className="title">公眾街市地址</h2>
            <div className="hki">
            <ul id="HKI">
                <li>
                <h3>
                    <i className="fa-solid fa-street-view" />
                    香港島
                </h3>
                </li>
                <li>香港西營盤正街44號</li>
                <li>香港上環德輔道西38號1樓</li>
                <li>香港西營盤正街45號</li>
                <li>香港石塘咀皇后大道西470號 石塘咀市政大廈</li>
                <li>香港上環皇后大道中345號 上環市政大廈</li>
                <li>香港愛秩序灣道15號</li>
                <li>香港柴灣柴灣道338號柴灣市政大廈</li>
                <li>香港炮台山電氣道229號電氣道市政大廈</li>
                <li>香港北角渣華道99號 渣華道市政大廈</li>
                <li>香港吉勝街10號(近祥利街17號後面)</li>
                <li>香港北角七姊妹道160號</li>
                <li>香港鰂魚涌街38號 鰂魚涌市政大廈</li>
                <li>香港筲箕灣太安街12號西灣河市政大廈</li>
                <li>香港柴灣怡豐街33號</li>
                <li>香港香港仔香港仔大道203號 香港仔市政大廈</li>
            </ul>
            </div>
            <ul id="KLN">
            <li>
                <h3>
                <i className="fa-solid fa-street-view" />
                九龍
                </h3>
            </li>
            <li>九龍紅磡馬頭圍道11號紅磡市政大廈</li>
            <li>九龍九龍城衙前圍道100號 九龍城市政大廈</li>
            <li>九龍紅磡安靜道 世界殯儀館後面</li>
            <li>九龍土瓜灣馬頭圍道165號</li>
            <li>九龍油塘鯉魚門徑6號鯉魚門市政大廈地下</li>
            <li>九龍觀塘牛頭角道183號</li>
            <li>九龍觀塘瑞和街9號</li>
            <li>九龍油塘四山街7號</li>
            <li>九龍觀塘駿業街67號</li>
            <li>九龍油塘東源街與崇和徑交界</li>
            <li>九龍觀塘宜安街1號A</li>
            </ul>

            
            <ul id="NT">
                <li>
                    <h3>
                    <i className="fa-solid fa-street-view" />
                    新界及離島
                    </h3>
                </li>
                <li>長洲大興堤路</li>
                <li>長洲大興堤路2號</li>
                <li>東涌富東街</li>
                <li>大嶼山梅窩梅窩碼頭路</li>
                <li>大嶼山梅窩銀石街9號</li>
                <li>坪洲寶坪街2號</li>
                <li>大嶼山大澳石仔埗街</li>
                <li>新界青衣長達路32號</li>
                <li>新界葵涌嘉定路2號</li>
                <li>新界葵涌葵順街2號</li>
                <li>新界葵涌石蔭路116號</li>
                <li>新界青衣青綠街38號青衣綜合大樓地下</li>
                <li>新界葵涌榮芳路15號</li>
                <li>新界葵涌和宜合道24號</li>
            </ul>
        </article>
        <Footer/>

    </div> */}