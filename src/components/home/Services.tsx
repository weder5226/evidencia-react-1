import { ServiceCard } from "@/components/home/ServiceCard";

const cards = [
  {
    title: "Neque porro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu hendrerit ex, quis elementum felis. Pellentesque scelerisque ut erat ut vehicula. Nam vehicula volutpat ultricies. Phasellus maximus justo eget accumsan.",
  },
  {
    title: "Quisquam est",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor felis felis. Maecenas efficitur posuere pulvinar. Aliquam at tortor dapibus massa elementum consectetur at non neque. Morbi ac feugiat.",
  },
  {
    title: "Qui dolorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget odio non sem eleifend euismod. Curabitur eu lectus id lectus venenatis scelerisque non nec massa. Mauris sed ante.",
  },
  {
    title: "Sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, sem quis tincidunt tristique, turpis sapien pharetra sem, non pretium tortor elit a mi. Suspendisse euismod odio quis mauris semper rhoncus. Cras.",
  },
];

export const Services = () => {
  return (
    <section className="mx-auto mb-28 max-w-[80ch] text-left text-pretty">
      <h2 className="text-font-str mx-auto text-center text-xl font-medium tracking-wide text-wrap md:text-2xl">
        Lorem ipsum condimentum ullamcorper
      </h2>
      <p className="text-center text-sm italic md:text-base">
        Ut tellus dui, lobortis vel mollis at
      </p>
      <article className="mx-auto my-10 grid w-full max-w-[20rem] grid-cols-1 gap-7 sm:mx-0 sm:max-w-none sm:grid-cols-2">
        {cards.map(({ title, description }, i) => (
          <ServiceCard key={i} title={title} description={description} />
        ))}
      </article>
    </section>
  );
};
