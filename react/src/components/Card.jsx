import React from 'react'


function CardSample({image, title, text, price}) {
  return (

    <>

        <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image} className="card-img-top" alt=""/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{text}</p>
                  <p className="card-price"><span>價格:</span>{price}</p>
                </div>
              </div>
            </div>
        </div>

    </>
  )
}

export default CardSample;




    // <>
    //   <div className="container-card">
    //     <div className="card mb-3" >
    //         <div className="row g-0">
    //           <div className="col-md-4">
    //             <img src={pic1} className="card-img-top" alt=""/>
    //           </div>
    //           <div className="col-md-8">
    //             <div className="card-body">
    //               <h5 className="card-title">菜心</h5>
    //               <p className="card-text">春季最標誌性的蔬菜，抽出的菜苔（花莖）尤為甜脆，是「清炒菜心」或「白灼菜心」的最佳時節。</p>
    //               <p className="card-price"><span>價格:</span>$10-$15/斤</p>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    //   </div>
    // </>