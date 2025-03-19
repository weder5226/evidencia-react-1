type Props = {
  className?: string;
};

export const PlantIcon = ({ className, ...restOfProps }: Props) => {
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
        strokeWidth="1.5"
        d="M12 12.07V20m0-8.07c0-4.353 3.538-7.887 7.919-7.93q.08.556.081 1.132c0 4.353-3.538 7.886-7.919 7.93A8 8 0 0 1 12 11.928m0 0C12 7.576 8.462 4.042 4.081 4q-.08.556-.081 1.132c0 4.353 3.538 7.886 7.919 7.93A8 8 0 0 0 12 11.928"
      />
    </svg>
  );
};
