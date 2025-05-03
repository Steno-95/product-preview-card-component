function Footer() {
  return (
    <footer className="text-center text-[1rem] md:text-[1.5rem] text-(--black) mt-auto">
      Challenge by{" "}
      <a
        className="text-blue-800 hover:text-(--green-light) focus:text-(--text-light) font-semibold"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="text-blue-800 hover:text-(--green-light) focus:text-(--text-light) font-semibold"
        href="https://github.com/Steno-95"
        title="The link will redirect to the github of Stefano Lezzi"
      >
        Stefano Lezzi
      </a>
      .
    </footer>
  );
}

export default Footer;
