type Props = {
  className?: string;
};

export const MoonIcon = ({ className, ...restOfProps }: Props) => {
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
        strokeWidth="1.7"
        d="M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21"
      ></path>
    </svg>
  );
};
