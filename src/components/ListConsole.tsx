import { useEffect, useState } from "react";
import { consolesAnos90 } from "../data/console";
import ConsoleCard from "./ConsoleCard";

import { v4 as uuidv4 } from "uuid";

export default function ListConsole() {
  const [isFavorite, setIsFavorite] = useState(consolesAnos90);

  const favoritar = (id: number) => {
    setIsFavorite(
      isFavorite.map((prevState) => {
        if (prevState.id === id) {
          prevState.favorito = !prevState.favorito;
        }
        return prevState;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(
        isFavorite.filter((item) => {
          return item.favorito === true;
        })
      )
    );
  }, [isFavorite]);

  return (
    <section className="border-b-4 flex flex-col items-center justify-center  bg-emerald-700">
      <h1 className="w-full text-center text-xl text-black font-bold italic mt-5 sm:text-2xl">
        Melhores consoles do KF9 Games
      </h1>
      <div className="my-5 flex flex-col items-center gap-5 sm:flex sm:flex-row sm:flex-wrap sm:justify-evenly sm:gap-5">
        {isFavorite.slice(0, 8).map((console) => {
          return (
            <ConsoleCard
              key={uuidv4()}
              id={console.id}
              imagem={console.imagem}
              nome={console.nome}
              lancamento={console.lancamento}
              fabricante={console.fabricante}
              unidades_vendidas={console.unidades_vendidas}
              favorito={console.favorito}
              favoritar={favoritar}
            />
          );
        })}
      </div>
    </section>
  );
}
