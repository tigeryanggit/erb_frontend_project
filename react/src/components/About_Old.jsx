import Footer from './Footer';


function About() {
  return (

    <>
        {/* <Navbar /> */}
            <section className="about" id="about">

                <h2 className="title">關於我們</h2>
                <br />
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.125736248076!2d114.22507189999999!3d22.311083999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040145637b41a7%3A0xab827da0184aef07!2z5riv5bCI6KeA5aGY5pWZ5a245Lit5b-D!5e0!3m2!1szh-TW!2shk!4v1755489611081!5m2!1szh-TW!2shk" width="600" height="450" loading="lazy" ></iframe>
                </div>
                <br/>
                <p><span>課程名稱：</span>前端網頁設計</p>
                <p><span>課程編號：</span>CT288DS004</p>
                <p><span>學員編號：</span>xxx</p>
                <p><span>學員姓名：</span>xxx</p>


            </section>

        <Footer /> 
    </>
  )
}

export default About



