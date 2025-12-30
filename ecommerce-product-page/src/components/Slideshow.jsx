import prod1 from "../assets/image-product-1.jpg";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";

export default function SlideShow() {
  return (
    <div className="relative ">
      <img src={prod1} className="h-full w-full  object-contain " />
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-5">
        <button className="rounded-btn ">
          <img src={prev} className="w-2" />
        </button>
        <button className="rounded-btn ">
          <img src={next} className="w-2" />
        </button>
      </div>
    </div>
  );
}
