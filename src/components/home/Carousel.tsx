import { CarouselTransitionIcon } from "@/icons/CarouselTransitionIcon";
import { useState } from "react";

const images = [
  {
    src: "https://oregoom.com/wp-content/uploads/2024/03/genericos-en-c-sharp.webp",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie aliquet augue",
  },
  {
    src: "https://blog.facialix.com/wp-content/uploads/2024/09/Curso-Java-UNAM-1-jpg.webp",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien sapien, scelerisque",
  },
  {
    src: "https://blog.facialix.com/wp-content/uploads/2024/10/javascript-introduccion-a-la-programacion-curso-udemy-facialix-jpg.webp",
    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in eleifend orci",
  },
];

export const Carousel = () => {
  const [imgSelected, setImgSelected] = useState(0);

  const goToSlide = (step: number) => {
    let newIndex = imgSelected + step;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    setImgSelected(newIndex);
  };

  return (
    <div className="relative mt-5 flex h-[55vh] w-auto items-center overflow-hidden select-none sm:h-[70vh] md:mx-2 md:h-[75vh] md:rounded-lg lg:h-[calc(100vh-7rem)]">
      {/* Contenedor de imágenes con la animación */}
      <div
        className="slide__imgs flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${imgSelected * 100}%)` }}
      >
        {images.map(({ src, alt }, i) => (
          <img key={i} className="h-auto max-h-full min-w-full object-cover" src={src} alt={alt} />
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="slide__controls absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgSelected(i)}
            className={`mx-1 flex h-2 w-5 justify-center rounded-md border-2 border-solid border-white transition md:h-2 md:w-6 ${imgSelected === i ? "cursor-default bg-indigo-500" : "cursor-pointer bg-white hover:bg-orange-200"}`}
          >
            <span className="sr-only">Seleccionar banner {i + 1}</span>
          </button>
        ))}
      </div>

      {/* Botón "anterior" */}
      <button
        onClick={() => goToSlide(-1)}
        id="prevButton"
        className="absolute top-0 bottom-0 left-0 z-1 flex w-[10%] cursor-pointer items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-hidden"
        type="button"
      >
        <span className="inline-block size-6 md:size-8">
          <CarouselTransitionIcon
            className="rotate-180 stroke-2"
            aria-label="Anterior imagen del banner"
          />
        </span>
      </button>

      {/* Botón "siguiente" */}
      <button
        onClick={() => goToSlide(1)}
        id="nextButton"
        className="absolute top-0 right-0 bottom-0 z-1 flex w-[10%] cursor-pointer items-center justify-center border-0 bg-none p-0 text-center text-white opacity-60 transition-opacity duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:opacity-100"
        type="button"
      >
        <span className="inline-block size-6 md:size-8">
          <CarouselTransitionIcon className="stroke-2" aria-label="Siguiente imagen del banner" />
        </span>
      </button>
    </div>
  );
};
