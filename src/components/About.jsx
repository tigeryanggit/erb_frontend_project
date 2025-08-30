import React from 'react'

function About() {
  return (
    <main>
      <section class="about">
        <article class="aboutc">
          <h2>About</h2>

          <div class="acontent">
          <p>這網站是由ERB前端開發學生團隊製作的網站，若對網站有疑問或建議，點擊按鈕私訊我們!</p>
          <p>ERB前端開發課程致力培育學生熟悉網頁開發中常用的工具和技術，包括HTML5、CSS3、JavaScript, 使用React.js開發前端網站, 熟悉當中網絡應用程式的各個子模組，包括架構、軟件、平台, 了解多種雲端服務在前端網絡中如何影響網上媒體的製作</p>
          <p>由於所有資料和圖片均從不同網站截取和參考及有AI從旁協助，此網站亦只用作學術用途，並無直接或間接獲取經濟利益的活動,內容亦並無確認內容的準確性，此網站所有內容只供參考。</p>
          </div>


        </article>
        <form>
          <div class="form-group">
            <input type="text" placeholder="歡迎所有評論" />
          </div>
          <div class="form-group"><button>感謝您的建議與問題</button></div>
        </form>
      </section>
    </main>
  )
}

export default About