function SubTitle({ children }) {
  return (
    <h2 className="text-(--grey) tracking-widest uppercase text-[1rem] lg:text-[1.1rem] lg:font-bold lg:tracking-[0.2rem]">
      {children}
    </h2>
  );
}

export default SubTitle;
