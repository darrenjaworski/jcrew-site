import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
  };

  return (
    <Slider {...settings}>
      <div className="performance_block">carousel</div>
      <div className="performance_block">master class</div>
      <div className="performance_block">master class</div>
      <div className="performance_block">master class</div>
      <div className="performance_block">master class</div>
      <div className="performance_block">master class</div>
      <div className="performance_block">master class</div>
    </Slider>
  );
};
