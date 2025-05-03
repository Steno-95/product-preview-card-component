import { MdOutlineAddShoppingCart } from "react-icons/md";

function Button() {
  return (
    <button className="bg-(--green-light) text-(--white) flex items-center justify-center min-w-full rounded-xl text-[1.4rem] gap-4 py-2 hover:bg-(--green-dark) focus:bg-(--green-dark) lg:text-[2.5rem] lg:py-3 lg:mt-2">
      <MdOutlineAddShoppingCart />
      <span className="text-[1.2rem] lg:text-[2rem]">Add to Cart</span>
    </button>
  );
}

export default Button;
