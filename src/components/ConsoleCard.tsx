import { Heart } from "@phosphor-icons/react";
import { IConsole } from "../interface/Console";

export default function ConsoleCard(props: IConsole) {
  const {
    imagem,
    nome,
    lancamento,
    fabricante,
    unidades_vendidas,
    favoritar,
    id,
    favorito
  } = props;

  const iconHeartIsFavorite = { size:"35", weight:"fill"};
  const iconHeartIsNotFavorite = { size: "35" };
  const iconHeart = favorito ? iconHeartIsFavorite : iconHeartIsNotFavorite

  return (
    <div className="border-4 p-5  rounded-xl border-verde-neon bg-black hover:bg-gray-900 sm:w-[17rem]">
      <img
        className="mb-5 border-2 border-verde-neon rounded-full bg-white p-1"
        src={imagem}
        alt={nome}
      />

      <div>
        <p className="flex justify-between items-center font-semibold text-verde-neon text-[1.25rem] italic border-b-2 border-verde-neon mb-3">
          {nome}
          <Heart {...iconHeart} onClick={() => favoritar(id)} className="cursor-pointer"/>
        </p>
        <p className="text-gray-200 font-semibold">{`Fabricante: ${fabricante}`}</p>
        <p className="text-gray-200 font-semibold">{`Lançamento: ${lancamento}`}</p>
        <p className="text-gray-200 font-semibold">{`Unidades vendidas ${unidades_vendidas}`}</p>
      </div>
    </div>
  );
}
