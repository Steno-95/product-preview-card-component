function CardPrice({ main, discount }) {
  return (
    <div className="flex items-center gap-4 font-[Fraunces] py-2 lg:gap-10 lg:py-6">
      <span className="text-[2rem] text-[var(--green-light)] lg:text-[2.5rem]">
        {discount}
      </span>
      <span className="text-[1rem] text-[var(--grey)] line-through lg:text-[1.4rem]">
        {main}
      </span>
    </div>
  );
}

export default CardPrice;
