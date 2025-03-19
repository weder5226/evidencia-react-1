import { WhatsAppIcon } from "@/icons/WhatsAppIcon";

export const WhatsAppButton = () => {
  return (
    <div className="fixed right-3 bottom-6 z-50 md:right-8">
      <a
        href="https://www.whatsapp.com/?lang=es_LA"
        target="_blank"
        className="relative flex size-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition duration-300 hover:bg-green-600 md:size-16"
        aria-label="Company WhatsApp Link"
      >
        <WhatsAppIcon className="size-8 text-white md:size-10" />
      </a>
    </div>
  );
};
