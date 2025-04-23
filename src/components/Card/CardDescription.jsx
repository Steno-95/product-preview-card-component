function CardDescription({ children }) {
  return (
    <p className="text-[1rem] text-[var(--grey)] py-2 lg:text-[1.8rem]! lg:py-5">
      {children}
    </p>
  );
}

export default CardDescription;
