import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { CarouselTokyo } from '../data';

function UncontrolledExample() {
  return (

    <div className="container-carousel">
            <Carousel>

                    <Carousel.Item>
                        <CarouselImage text="First slide" />
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage text="Second slide" />
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage text="Third slide" />
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
    </div>
  );
}

export default UncontrolledExample;


