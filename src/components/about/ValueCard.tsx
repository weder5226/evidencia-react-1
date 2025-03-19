type Props = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

export const ValueCard = ({ imgSrc, imgAlt, title, description }: Props) => {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-xs">
      <div className="size-40 overflow-hidden rounded-full">
        <img className="h-full w-full object-cover object-center" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="flex w-full flex-1 flex-col">
        <h5 className="text-font-str mx-3 mt-2 flex min-h-14 items-center justify-center text-center text-base leading-6 font-semibold">
          {title}
        </h5>
        <p className="line__clamp flex-1 text-center text-sm">{description}</p>
      </div>
    </div>
  );
};
