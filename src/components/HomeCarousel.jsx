import HomeCarousel1 from "../assets/images/decanter.webp";
import HomeCarousel2 from "../assets/images/vinItaly.webp";
import HomeCarousel3 from "../assets/images/mundusVini.webp";
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
        <div >
            <Carousel className="!w-5/6 !h-full" >
                <Carousel.Item className="object-cover">
                    <img src={HomeCarousel1} />

                </Carousel.Item>
                <Carousel.Item className="object-cover">
                    <img src={HomeCarousel2} />
                    <Carousel.Caption>
                        <h3 className="hidden lg:block lg:text-4xl">Heritage Chateau Wines</h3>
                        <p className="hidden lg:block lg:text-2xl">Chateau wines: refined taste, historic vineyards, unparalleled craftsmanship, luxurious indulgence.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={HomeCarousel3} />
                    <Carousel.Caption>
                        <h3 className="hidden lg:block lg:text-4xl">Refined Chateau Wines</h3>
                        <p className="hidden lg:block lg:text-2xl">
                            Chateau wines: refined elegance, rich flavors, historic vineyards, exceptional quality
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomeCarousel;