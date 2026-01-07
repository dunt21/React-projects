import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import prod1 from "../assets/image-product-1-thumbnail.jpg";
import bin from "../assets/icon-delete.svg";
import Button from "./Button";
import close from "../assets/icon-close.svg";
import { useState } from "react";

export default function Navbar({
  price,
  numItems,
  total,
  addToCart,
  isDelete,
  setIsDelete,
}) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function controlMenu() {
    setDisplayMenu((dis) => !dis);
  }

  return (
    <div className="flex my-5 items-center mx-8 gap-5 relative">
      <button onClick={controlMenu}>
        <img src={menu} />
      </button>
      {displayMenu && (
        <Menu onControlMenu={controlMenu} displayMenu={displayMenu} />
      )}

      <div>
        <img src={logo} className="w-40" />
      </div>

      <div className="flex items-center ml-auto gap-5">
        <button onClick={() => setShowCart((show) => !show)}>
          <img src={cart} />
          {addToCart && (
            <p className="border-0 rounded-xl text-white bg-orange px-2 absolute -top-1 right-10 text-xs">
              {isDelete ? "" : numItems}
            </p>
          )}
        </button>
        {showCart && (
          <Cart
            price={price}
            numItems={numItems}
            total={total}
            addToCart={addToCart}
            isDelete={isDelete}
            setIsDelete={setIsDelete}
          />
        )}

        <img src={avatar} className="w-7" />
      </div>
    </div>
  );
}

function Cart({ price, numItems, total, addToCart, isDelete, setIsDelete }) {
  return (
    <div className="absolute top-20 left-0 bg-white w-full h-80 z-10 py-6 space-y-5 rounded-xl">
      <p className="font-bold text-dark-blue px-6">Cart</p>
      <div className="border border-grayish-blue"></div>
      <div className="flex flex-col justify-center h-[70%] px-6">
        {!numItems || isDelete ? (
          <p className="px-8 text-center text-dark-grayish-blue font-bold ">
            Your cart is empty
          </p>
        ) : (
          ""
        )}

        {addToCart ? (
          <div className={`${isDelete || !numItems ? "hidden" : ""} `}>
            <div className={`flex justify-between text-center `}>
              <img src={prod1} className="w-10 h-auto border-0 rounded-md" />
              <p className="text-dark-grayish-blue">
                Fall Limited Edition Sneakers ${price}.00 x {numItems}
                <span className="text-dark-blue ml-3 font-bold">
                  ${total}.00
                </span>
              </p>
              <button onClick={() => setIsDelete(true)}>
                <img src={bin} className="w-5" />
              </button>
            </div>

            <Button classname={"mt-5"}>Checkout</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function Menu({ onControlMenu, displayMenu }) {
  const menuList = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div
      className={`fixed inset-0 bg-lBlack/50 z-10 transition-opacity duration-200
    ${displayMenu ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      onClick={onControlMenu}
    >
      <div
        className={`absolute left-0 top-0 h-screen w-50 bg-white px-5 py-8
      transform transition-transform duration-200 ease-in-out
      ${displayMenu ? "translate-x-0" : "-translate-x-1"}
    `}
      >
        <button onClick={onControlMenu}>
          <img src={close} />
        </button>
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
