import { ValueCard } from "@/components/about/ValueCard";

const cards = [
  {
    imgSrc:
      "https://img.freepik.com/fotos-premium/fondo-color-purpura-rosado-corazon-purpira-rojo-medio_190851-2021.jpg?semt=ais_hybrid",
    imgAlt: "Lorem ipsum, dolor sit",
    title: "Lorem ipsum, dolor sit",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore atque fugit maxime excepturi. Qui minima assumenda sint expedita? Assumenda, eos?",
  },
  {
    imgSrc:
      "https://img.freepik.com/fotos-premium/antecedentes-abstractos_1032630-7475.jpg?semt=ais_hybrid",
    imgAlt: "Lorem ipsum, dolor sit",
    title: "Lorem ipsum, dolor sit",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore atque fugit maxime excepturi. Qui minima assumenda sint expedita? Assumenda, eos?",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXW6Vo3iGdCrwUu68K3N72tIxt7SCNxlymKZzXc6rYRj1loAKP-LQPcByWLoXIEigYyc&usqp=CAU",
    imgAlt: "Lorem ipsum, dolor sit",
    title: "Lorem ipsum, dolor sit",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore atque fugit maxime excepturi. Qui minima assumenda sint expedita? Assumenda, eos?",
  },
];

export const CompanyValues = () => {
  return (
    <section className="mx-auto mb-40 max-w-[80ch] px-5 text-center text-pretty sm:px-10 sm:text-left lg:px-0">
      <h2 className="text-font-str mx-auto my-6 text-center text-xl font-medium tracking-wide text-wrap md:text-2xl">
        Lorem ipsum dolor sit amet consectetur.
      </h2>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maxime voluptatibus provident
        magnam odio saepe a similique nesciunt eum doloremque.
      </p>
      <article className="mx-auto my-10 grid w-full max-w-64 grid-cols-1 gap-12 sm:max-w-[40rem] sm:grid-cols-2 md:max-w-full md:grid-cols-3">
        {cards.map(({ imgSrc, imgAlt, title, description }, i) => (
          <ValueCard
            key={i}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            title={title}
            description={description}
          />
        ))}
      </article>
    </section>
  );
};
