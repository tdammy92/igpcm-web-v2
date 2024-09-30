import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselData } from "../../utils/Data";

const CarouselPage = () => {
  return (
    <div className="w-[80%] md:w-[60%] h-[30vh] mx-auto ">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showThumbs={false}
        width="100%"
      >
        {CarouselData.map((item, index) => {
          return (
            <div key={index} className="h-full w-full flex flex-col justify-center items-center">
              <img
                src={item.src}
                alt={item.caption}
                className="h-full w-full object-cover"
              />
              <p className="text-black mt-2">{item.caption}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
