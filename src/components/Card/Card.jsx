import CardPicture from "./CardPicture";
import SubTitle from "./SubTitle";
import Title from "./Title";
import CardDescription from "./CardDescription";
import CardPrice from "./CardPrice";
import Button from "../Button";

function Card() {
  return (
    <article className="mx-auto max-w-[20rem] bg-(--white) my-auto rounded-xl overflow-hidden lg:flex lg:max-w-fit lg:max-h-[44rem] lg:scale-70 xl:scale-80">
      <CardPicture
        img1={"/images/image-product-mobile.jpg"}
        img2={"/images/image-product-desktop.jpg"}
      />

      <div className="p-5 lg:p-15 lg:max-w-[31rem] lg:max-h-[31rem] flex-1">
        <SubTitle>Perfume</SubTitle>
        <Title> Gabrielle Essence Eau De Parfum</Title>
        <CardDescription>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </CardDescription>
        <CardPrice discount={"$149.99"} main={"$169.99"} />
        <Button />
      </div>
    </article>
  );
}

export default Card;
