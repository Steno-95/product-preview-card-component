function CardPrice({ main, discount }) {
  return (
    <div className="flex items-center gap-4 font-[Fraunces] py-2">
      <span className="text-[2rem] text-[var(--green-light)]">{discount}</span>
      <span className="text-[1rem] text-[var(--grey)] line-through">
        {main}
      </span>
    </div>
  );
}

export default CardPrice;
