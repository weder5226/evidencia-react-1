import { PlantIcon } from "@/icons/PlantIcon";

const cards = [
  {
    icon: PlantIcon,
    text1: "Hecho",
    text2: "a mano",
  },
  {
    icon: PlantIcon,
    text1: "Ingredientes",
    text2: "naturales",
  },
  {
    icon: PlantIcon,
    text1: "Materiales",
    text2: "biodegradables",
  },
  {
    icon: PlantIcon,
    text1: "Sin crueldad",
    text2: "animal",
  },
];

export const IntroHome = () => {
  return (
    <section className="mx-auto max-w-[60ch] text-left text-xl text-pretty">
      <h1 className="text-font-str mx-auto my-6 text-center text-2xl font-semibold tracking-wide text-wrap md:text-3xl">
        Lorem ipsum dolor sit amet <br /> lacinia commodo purus
      </h1>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare lectus dolor, non
        commodo nibh posuere vitae. Suspendisse sit amet nunc sed arcu fringilla fermentum vel sit
        amet est. Nunc tincidunt condimentum nunc, lacinia commodo purus blandit sit amet.
        Suspendisse.
      </p>

      <article className="mt-20">
        <h2 className="text-font-str mx-auto my-6 text-center text-xl font-medium tracking-wide text-wrap md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>
        <div className="mx-auto grid max-w-80 grid-cols-2 gap-y-7 sm:max-w-full sm:grid-cols-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 text-center text-base italic"
            >
              <card.icon className="text-secondary size-12 md:size-16" />
              <p className="text-sm md:text-base">
                {card.text1}
                <br />
                {card.text2}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
