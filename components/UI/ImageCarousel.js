import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

export default function ImageCarousel() {
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://res.cloudinary.com/dec2lboba/image/upload/v1663147201/AFCAI-Private-Pics/279920848_678772659892031_877896231906247971_n_zlc7c0.jpg"
          alt="image"
          className="h-full object-cover"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dec2lboba/image/upload/v1664015049/AFCAI-Private-Pics/286503732_688092635583802_1560210147417461503_n_bjx2gv.jpg"
          alt="image"
          className="h-full object-cover"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dec2lboba/image/upload/v1663147142/AFCAI-Private-Pics/278468743_504221707922497_2888920851378281915_n_tagoo4.jpg"
          alt="image"
          className="h-full object-cover"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dec2lboba/image/upload/v1663147134/AFCAI-Private-Pics/280129325_399875165341754_3761075744794394430_n_cbfiq4.jpg"
          alt="image"
          className="h-full object-cover"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dec2lboba/image/upload/v1663147091/AFCAI-Private-Pics/286921748_1482498042206488_4029614503544502880_n_a0y5mx.jpg"
          alt="image"
          className="h-full object-cover"
        />
      </div>
    </Slider>
  );
}
