import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { pork } from '../data';
import { getImageURL } from '../image-util';

function CarouselPork() {
  return (
    
    <div className="container-carousel">
            <Carousel>
                {
                    pork.map((img)=>(
                        <Carousel.Item >
                        <CarouselImage key={img.id} image={getImageURL(img.image,'./assets/pork/')} alt={img.alt} text={img.id}  />
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

export default CarouselPork



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