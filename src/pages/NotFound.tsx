import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="mt-5 mb-9 text-center">
      <h1 className="text-font mb-4 text-6xl font-bold">404</h1>
      <h1 className="text-font mb-2 text-2xl font-bold">Parece que te has extraviado</h1>
      <p className="text-card-font mb-8 text-base">No te preocupes, a veces es fácil perderse.</p>
      <Link
        to="/"
        className="bg-secondary hover:bg-secondary-str inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-base font-bold text-white shadow-md transition"
      >
        Permítenos guiarte
      </Link>
    </div>
  );
};
