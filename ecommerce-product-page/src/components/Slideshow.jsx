import prod1 from "../assets/image-product-1.jpg";
import prod2 from "../assets/image-product-2.jpg";
import prod3 from "../assets/image-product-3.jpg";
import prod4 from "../assets/image-product-4.jpg";

import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";
import { useState } from "react";

const images = [prod1, prod2, prod3, prod4];

export default function SlideShow() {
  const [curSlide, setCurSlide] = useState(0);

  return (
    <div className="relative ">
      <img src={images[curSlide]} className="h-full w-full  object-contain " />
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-5">
        <button
          className="rounded-btn"
          onClick={() => setCurSlide((val) => (val >= 1 ? val - 1 : val))}
        >
          <img src={prev} className="w-2" />
        </button>
        <button
          className="rounded-btn "
          onClick={() => setCurSlide((val) => (val < 3 ? val + 1 : val))}
        >
          <img src={next} className="w-2" />
        </button>
      </div>
    </div>
  );
}
