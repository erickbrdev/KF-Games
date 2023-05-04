import { Link } from "react-router-dom";
import { IGames } from "../interface/Games";

export default function Card(props: IGames) {
  const { img, name, id } = props;

  return (
    <div className="border-4 border-laranja-neon p-5 rounded-xl bg-black hover:bg-gray-900 sm:w-72">
      <img
        src={img}
        alt={name}
        className="rounded-full border-2 border-laranja-neon bg-white mb-5"
      />

      <div className="flex flex-col items-start gap-5">
        <p className="font-semibold text-laranja-neon text-[1.25rem] italic border-b-2 border-laranja-neon">
          {name}
        </p>
        <Link to={`/games/${id}`}>
          <button className="border-4 p-2 rounded-xl font-semibold border-laranja-neon text-lg text-white hover:bg-laranja-neon hover:text-black">
            Confira suas informações
          </button>
        </Link>
      </div>
    </div>
  );
}
