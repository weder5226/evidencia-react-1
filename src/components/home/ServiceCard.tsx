import { LeafIcon } from "@/icons/LeafIcon";
import { SoapIcon } from "@/icons/SoapIcon";

type Props = {
  title: string;
  description: string;
};

export const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className="border-card-border bg-card-bg shadow-card-shade relative flex flex-col items-center justify-start rounded-md border px-7 py-5 shadow-md">
      <h4 className="text-font-str mb-2 text-center text-base font-semibold uppercase md:text-lg">
        {title}
      </h4>
      <p className="text-card-font text-sm">{description}</p>
      <SoapIcon
        className="text-secondary absolute top-3 left-7 h-11 -translate-x-1/2 -translate-y-1/2 transform"
        aria-hidden="true"
      />
      <LeafIcon
        className="text-secondary absolute right-6 bottom-4 h-11 translate-x-1/2 translate-y-1/2 -rotate-90 transform"
        aria-hidden="true"
      />
    </div>
  );
};
