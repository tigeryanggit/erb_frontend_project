import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { fish } from '../data';


function CarouselFish() {
  return (
    
    <div className="container-carousel">
            <Carousel>
                {
                    fish.map((img)=>(
                        <Carousel.Item >
                        <CarouselImage key={img.id} image={img.image} alt={img.alt} text={img.id}  />
                        <Carousel.Caption>
                        <h3>{img.alt}</h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                    
                )}
                

            </Carousel>
    </div>


  );
}

export default CarouselFish



            // <Carousel>
            //     {
            //         beef.map((img)=>(
            //             <Carousel.Item>
            //             <CarouselImage key={img.id} image={img.image} alt={img.alt} text={img.id}  />
            //             <Carousel.Caption>
            //             <h3>{img.alt}</h3>
            //             <p></p>
            //             </Carousel.Caption>
            //         </Carousel.Item>
            //         )
                    
            //     )}
                

            // </Carousel>