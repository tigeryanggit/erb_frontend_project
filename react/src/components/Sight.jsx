import React from 'react'



function Sight({ image, title, content }) {
  return (
                <div className="card sight">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body card-body-sight">
                        <h2>{title}</h2>
                        <p className="card-text">{content}</p>
                    </div>
                </div>
  )
}

export default Sight