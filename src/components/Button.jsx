import { MdOutlineAddShoppingCart } from "react-icons/md";

function Button() {
  return (
    <button className="bg-[var(--green-light)] text-[var(--white)] flex items-center justify-center min-w-full rounded-xl text-[1.4rem] gap-4 py-2 hover:bg-[var(--green-dark)] focus:bg-[var(--green-dark)]">
      <MdOutlineAddShoppingCart />
      <span className="text-[1.2rem] ">Add to Cart</span>
    </button>
  );
}

export default Button;
