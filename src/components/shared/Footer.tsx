import { BusinessIcon } from "@/icons/BusinessIcon";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="border-secondary border-t-4 bg-gray-700">
      <div className="container mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-start justify-items-center gap-8 py-6 text-center md:grid-cols-3 md:text-left">
          <div className="md:justify-self-start">
            <h3 className="mb-6 text-sm font-semibold text-white uppercase">Información</h3>
            <ul className="font-medium text-gray-400">
              {[
                {
                  href: "/terminos-condiciones/",
                  text: "Términos y Condiciones",
                },
                {
                  href: "/politica-privacidad/",
                  text: "Política de privacidad",
                },
              ].map(({ href, text }, i) => (
                <li key={i} className="mb-4">
                  <Link to={href} className="hover:underline">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-white uppercase">Contáctanos</h3>
            <ul className="font-medium text-gray-400">
              <li className="mb-4 flex items-center justify-center gap-1 md:justify-start">
                <BusinessIcon className="size-6" />
                <a
                  href="https://www.youtube.com/?app=desktop&hl=es"
                  className="hover:underline"
                  target="_blank"
                >
                  (+57) XXX XXX XXXX
                </a>
              </li>
              <li className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                <BusinessIcon className="size-5" />
                <a href="https://www.youtube.com/?app=desktop&hl=es" className="hover:underline">
                  ejemplo@mail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h3 className="mb-6 text-sm font-semibold text-white uppercase">Síguenos</h3>
            <div className="mt-4 flex gap-7 text-gray-400 sm:mt-0">
              {[
                {
                  icon: BusinessIcon,
                  href: "https://www.facebook.com/?locale=es_ES",
                  label: "Company Facebook Link",
                },
                {
                  icon: BusinessIcon,
                  href: "https://www.instagram.com/",
                  label: "Company Instagram Link",
                },
                {
                  icon: BusinessIcon,
                  href: "https://www.tiktok.com/?lang=es",
                  label: "Company Tiktok Link",
                },
                {
                  icon: BusinessIcon,
                  href: "https://www.threads.net/",
                  label: "Company Threads Link",
                },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" aria-label={item.label}>
                  <item.icon className="size-8 transform transition-transform duration-200 hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-gray-800" />
        <div className="bg-gray-700 py-5">
          <p className="text-center text-xs text-gray-300 sm:text-left">
            © 2025 Marca. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
