import { Link } from "react-router-dom";

export const HeadNav = () => {
  return (
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="logo-texto text-2xl">
          La voz de los docentes
        </Link>
      </div>
  );
};
