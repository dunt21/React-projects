import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import prod1 from "../assets/image-product-1-thumbnail.jpg";
import bin from "../assets/icon-delete.svg";
import Button from "./Button";
import close from "../assets/icon-close.svg";

export default function Navbar() {
  return (
    <div className="flex my-5 items-center mx-8 gap-5 relative">
      <button>
        <img src={menu} />
      </button>
      {/* <Menu /> */}

      <div>
        <img src={logo} className="w-40" />
      </div>

      <div className="flex items-center ml-auto gap-5">
        <button>
          <img src={cart} />
        </button>
        {/* <Cart /> */}

        <img src={avatar} className="w-7" />
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="absolute top-20 -left-4 bg-white w-90 h-fit z-10 py-6 space-y-5 rounded-xl">
      <p className="font-bold text-dark-blue px-8">Cart</p>
      <div className="border border-grayish-blue"></div>
      <div className="flex flex-col justify-center h-[70%] px-8">
        {/* <p className="px-8 text-center text-dark-grayish-blue font-bold ">
          Your cart is empty
        </p> */}

        <div className="flex justify-between text-center">
          <img src={prod1} className="w-10 h-auto border-0 rounded-md" />
          <p className="text-dark-grayish-blue">
            Fall Limited Edition Sneakers $125.00 x 3
            <span className="text-dark-blue ml-3 font-bold">$375.00</span>
          </p>
          <button>
            <img src={bin} className="w-5" />
          </button>
        </div>

        <Button classname={"mt-5"}>Checkout</Button>
      </div>
    </div>
  );
}

function Menu() {
  const menuList = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="absolute -top-5 -left-8 bg-lBlack/50 w-screen h-screen z-10 ">
      <div className="absolute py-8 z-10 bg-white h-screen w-50  px-5">
        <img src={close} />
        <ul className="mt-8 space-y-5">
          {menuList.map((el, i) => (
            <li className="text-dark-blue font-bold" key={i}>
              <a>{el}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
