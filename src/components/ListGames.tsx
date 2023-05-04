import { jogosN64 } from "../data/games";
import Card from "./Card";

import { v4 as uuidv4 } from "uuid";

export default function ListGames() {
  return (
    <section id="games" className="border-b-4 p-4 bg-emerald-700 border-vermelho-neon">
      <h1 className="w-full text-center text-xl text-black font-bold italic mt-5 sm:text-2xl">Melhores games do KF9 Games</h1>

      <div className="my-5 flex flex-col gap-5 items-center sm:flex sm:flex-row sm:flex-wrap sm:justify-evenly sm:gap-5">
        {jogosN64.slice(0, 8).map((games) => {
          return (
            <Card
              key={uuidv4()}
              id={games.id}
              img={games.imagem}
              name={games.nome} release={""} developer={""} gender={""} copiesSold={0}             
            />
          );
        })}
      </div>
    </section>
  );
}
