import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import cart from "../assets/icon-cart.svg";
import Button from "./Button";

export default function Content() {
  return (
    <div className="mx-8 my-5 space-y-3 ">
      <p className="text-dark-grayish-blue text-xs font-bold tracking-widest">
        SNEAKER COMPANY{" "}
      </p>
      <p className="text-2xl font-bold">Fall Limited Edition Sneakers</p>
      <p className="text-dark-grayish-blue text-md">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.{" "}
      </p>

      <div className="flex items-center gap-4 font-bold">
        <p className="text-2xl">$125.00</p>
        <p className="border-0 bg-black text-white py-1 px-2 rounded-md ">
          50%
        </p>

        <p className="line-through ml-auto text-dark-grayish-blue">$250.00</p>
      </div>

      <ControlNum />
      <Button classname={"flex justify-center items-center gap-4 mt-5"}>
        <img src={cart} className="" /> <span>Add to cart</span>
      </Button>
    </div>
  );
}

function ControlNum() {
  return (
    <div className="flex items-center justify-between mt-10 w-full border-0 rounded-lg py-3 px-5 bg-light-grayish-blue">
      <img src={minus} />
      <input type="number" value={0} className="text-center font-bold" />
      <img src={plus} />
    </div>
  );
}
