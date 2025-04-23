import CardPicture from "./CardPicture";
import SubTitle from "./SubTitle";
import Title from "./Title";
import CardDescription from "./CardDescription";
import CardPrice from "./CardPrice";
import Button from "../Button";

function Card() {
  return (
    <section className="mx-auto max-w-[320px] bg-[var(--white)] my-auto rounded-xl overflow-hidden lg:flex lg:max-w-none lg:max-h-[700px]">
      <CardPicture
        img1={"/images/image-product-mobile.jpg"}
        img2={"/images/image-product-desktop.jpg"}
      />

      <div className="p-5 lg:p-15 lg:max-w-[500px] lg:max-h-[500px] flex-1">
        <SubTitle>Perfume</SubTitle>
        <Title> Gabrielle Essence Eau De Parfum</Title>
        <CardDescription>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </CardDescription>
        <CardPrice discount={"$149.99"} main={"$169.99"} />
        <Button />
      </div>
    </section>
  );
}

export default Card;
