type Props = {
  className?: string;
};

export const CarouselTransitionIcon = ({ className, ...restOfProps }: Props) => {
  return (
    <svg
      className={className}
      {...restOfProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 42"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.933 1L34 21.068L14.431 40.637l-4.933-4.933l14.638-14.636L9 5.933z"
      ></path>
    </svg>
  );
};
