export const CompanyInfo = () => {
  return (
    <section className="mx-auto my-10 max-w-[80ch] px-5 text-center text-pretty sm:px-10 sm:text-left md:my-20 lg:px-0">
      <h2 className="text-font-str mx-auto my-6 text-center text-xl font-semibold tracking-wide text-wrap md:text-2xl">
        Lorem, ipsum.
      </h2>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex debitis, nobis sint est
        expedita quasi ratione atque aut a ad fugiat! Quo ipsa et eligendi sequi voluptatibus odio,
        quasi delectus cupiditate voluptatem eius accusantium, voluptatum totam perferendis autem
        eaque fugiat! Rerum at expedita beatae.
      </p>

      <div className="mt-10 sm:columns-2 sm:gap-9">
        {[
          {
            subtitle: "Misión",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veritatis odio impedit velit hic repellat ipsam accusamus sint, pariatur accusantium, corrupti obcaecati deserunt quasi voluptates. Porro ex ullam cum nobis.",
          },
          {
            subtitle: "Visión",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nam dolorum consequatur enim ipsam, nisi voluptate sapiente iste ex ut nobis! Porro quia molestiae quidem expedita nam, nulla magnam illo.",
          },
        ].map(({ subtitle, text }, i) => (
          <>
            <h3 className="text-font-str mb-2 text-center text-base font-semibold uppercase md:text-lg">
              {subtitle}
            </h3>
            <p className={`text-base ${i == 0 ? "mb-8 sm:mb-0" : ""}`}>{text}</p>
          </>
        ))}
      </div>
    </section>
  );
};
