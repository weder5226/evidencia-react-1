type Props = {
  className?: string;
};

export const LogoIcon = ({ className, ...restOfProps }: Props) => {
  return (
    <svg
      className={className}
      {...restOfProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 192L256 64l224 128l-224 128z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 240v128l144 80l144-80V240m80 128V192M256 320v128"
      />
    </svg>
  );
};
