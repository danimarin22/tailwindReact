import shopDetailCarousel1 from "../assets/images/shopDetailCarousel1.webp";
import shopDetailCarousel2 from "../assets/images/shopDetailCarousel2.webp";
import shopDetailCarousel3 from "../assets/images/shopDetailCarousel3.webp";

import Carousel from 'react-bootstrap/Carousel';


function ShopDetailCarousel() {
    return (
        <Carousel>
            <Carousel.Item className="object-cover">
                <img src={shopDetailCarousel1} />
                <Carousel.Caption>
                    <h3 className="hidden lg:block lg:text-4xl">Exquisite Chateau Wines</h3>
                    <p className="hidden lg:block lg:text-2xl">Chateau wines: rich heritage, exquisite flavors, exceptional quality, timeless elegance.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="object-cover">
                <img src={shopDetailCarousel2} />
                <Carousel.Caption>
                    <h3 className="hidden lg:block lg:text-4xl">Heritage Chateau Wines</h3>
                    <p className="hidden lg:block lg:text-2xl">Chateau wines: refined taste, historic vineyards, unparalleled craftsmanship, luxurious indulgence.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={shopDetailCarousel3} />
                <Carousel.Caption>
                    <h3 className="hidden lg:block lg:text-4xl">Refined Chateau Wines</h3>
                    <p className="hidden lg:block lg:text-2xl">
                        Chateau wines: refined elegance, rich flavors, historic vineyards, exceptional quality
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ShopDetailCarousel;
