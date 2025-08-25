import React from 'react'

function Footer() {
  return (
    
        <section className="footer">
            <ul>
                <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a></li>            
            </ul>

            <p>Copyright &copy; <span id="date">{new Date().getFullYear()}</span> All Rights Reserved</p>

        </section>



  )
}

export default Footer