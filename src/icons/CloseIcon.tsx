type Props = {
  className?: string;
};

export const CloseIcon = ({ className, ...restOfProps }: Props) => {
  return (
    <svg
      className={className}
      {...restOfProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m.5.499 23 23M23.5.499l-23 23"
      ></path>
    </svg>
  );
};
