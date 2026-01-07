import { useState } from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import SlideShow from "./Slideshow";

export default function App() {
  const [numItems, setNumItems] = useState(0);
  const [addToCart, setAddToCart] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const price = 125;
  const total = price * numItems;

  return (
    <div>
      <Navbar
        addToCart={addToCart}
        price={price}
        total={total}
        numItems={numItems}
        isDelete={isDelete}
        setIsDelete={setIsDelete}
      />
      <SlideShow />
      <Content
        numItems={numItems}
        setNumItems={setNumItems}
        setAddToCart={setAddToCart}
        setIsDelete={setIsDelete}
      />
    </div>
  );
}
