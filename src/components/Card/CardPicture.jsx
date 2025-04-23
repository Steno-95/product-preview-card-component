function CardPicture({ img1, img2 }) {
  return (
    <picture className="max-h-full overflow-hidden flex-1 lg:max-w-[600px] ">
      <source srcSet={img2} media="(min-width: 64rem)" />
      <img src={img1} alt="product photo" className="min-w-full " />
    </picture>
  );
}

export default CardPicture;
