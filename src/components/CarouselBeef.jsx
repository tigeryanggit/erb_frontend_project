import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { beef } from '../data';


function CarouselBeef() {
  return (
    
    <div className="container-carousel">
            <Carousel>
                {
                    beef.map((img)=>(
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

export default CarouselBeef



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