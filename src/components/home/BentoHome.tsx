import { BentoItem } from "@/components/home/BentoItem";

const [img1, img2, img3] = [
  {
    src: "https://oregoom.com/wp-content/uploads/2024/03/genericos-en-c-sharp.webp",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    src: "https://blog.facialix.com/wp-content/uploads/2024/09/Curso-Java-UNAM-1-jpg.webp",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    src: "https://blog.facialix.com/wp-content/uploads/2024/10/javascript-introduccion-a-la-programacion-curso-udemy-facialix-jpg.webp",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export const BentoHome = () => {
  return (
    <section className="my-20 grid h-[45rem] w-full grid-cols-10 grid-rows-10 gap-5 select-none sm:h-[35rem]">
      <BentoItem
        className="col-span-6 col-start-3 row-span-2 sm:col-span-4 sm:col-start-auto sm:row-span-4"
        imgSrc={img2.src}
        imgAlt={img2.alt}
      />
      <BentoItem
        className="col-span-8 col-start-2 row-span-3 sm:col-span-5 sm:col-start-auto sm:row-span-6"
        imgSrc={img3.src}
        imgAlt={img3.alt}
      />
      <BentoItem
        className="col-span-10 row-span-5 sm:col-span-5 sm:row-start-2 sm:-row-end-2"
        imgSrc={img1.src}
        imgAlt={img1.alt}
      />
    </section>
  );
};
