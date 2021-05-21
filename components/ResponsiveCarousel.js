import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function ResponsiveCarousel() {
  return (
    <div className="carousel">
      <Carousel showStatus={false} infiniteLoop showThumbs={false}>
        <div>
          <img src="/mare.jpg" alt="mare" />
          <p className="legend">Mare</p>
        </div>
        <div>
          <img src="/montagna.jpg" alt="montagna" />
          <p className="legend">Montagna</p>
        </div>
        <div>
          <img src="/foresta.jpg" alt="foresta" />
          <p className="legend">Foresta</p>
        </div>
      </Carousel>
    </div>
  );
}
