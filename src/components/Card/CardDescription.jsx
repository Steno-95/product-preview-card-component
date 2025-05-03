function CardDescription({ children }) {
  return (
    <p className="text-[1rem] text-(--grey) py-2 lg:text-[1.2rem] lg:py-3">
      {children}
    </p>
  );
}

export default CardDescription;
