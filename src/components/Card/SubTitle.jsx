function SubTitle({ children }) {
  return (
    <h2 className="text-[var(--grey)] tracking-widest uppercase text-[1.1rem] lg:text-[1.5rem] lg:font-bold lg:tracking-[0.2em]">
      {children}
    </h2>
  );
}

export default SubTitle;
