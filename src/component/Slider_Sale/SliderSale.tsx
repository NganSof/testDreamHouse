import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../Card/Card";
import "./SliderSale.css";
import CardFooter from "../Card_Footer/CardFooter";

const SliderSale: FC<{ sliderShow: number; type: string }> = ({
  sliderShow,
  type,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderShow,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const dataRender = ["1", "2", "3", "4", "5", "6"];

  return (
    <Slider {...settings}>
      {dataRender.map((nameItem) => (
        <div>
          {type === "footer" ? <CardFooter /> : <Card nameCard={nameItem} />}
        </div>
      ))}
    </Slider>
  );
};

export default SliderSale;
