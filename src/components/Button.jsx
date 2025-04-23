import { MdShoppingCart } from "react-icons/md";

function Button() {
  return (
    <button className="bg-[var(--green-light)]">
      <MdShoppingCart />
      Add to Cart
    </button>
  );
}

export default Button;
