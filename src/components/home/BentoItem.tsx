type Props = {
  imgSrc: string;
  imgAlt: string;
  className?: string;
};

export const BentoItem = ({ imgSrc, imgAlt, className }: Props) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-xl border border-orange-700 backdrop-blur-md`}
    >
      <img
        className="transition-scale block h-full w-full object-cover object-center duration-1000 hover:scale-105"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};
