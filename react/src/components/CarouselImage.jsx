import React from 'react'

function CarouselImage({image, alt}) {
  return (
    <div className='carouselimage'>
        <img src={image} alt={alt} />
    </div>
  )
}

export default CarouselImage