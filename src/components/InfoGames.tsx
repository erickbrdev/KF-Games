import { Link, useParams } from "react-router-dom";
import { jogosN64 } from "../data/games";
import Footer from "./Footer";

export default function InfoGames() {
  const { userId } = useParams();
  const findGames = jogosN64.find((games) => {
    return games.id === Number(userId);
  });

  return (
    <section className=" flex items-center justify-center bg-black">
      {findGames ? (
        <section>
          <div className="border-2 border-ciano p-5 rounded-xl gap-2 flex flex-col sm:items-center">
            <img
              src={findGames.imagem}
              alt={findGames.nome}
              className="rounded-full mb-5 border-ciano border-4"
            />

            <div>
              <p className="text-vermelho-neon border-b-2 border-magenta mb-5 text-center text-lg sm:text-2xl">{`${findGames.nome}`}</p>
              <p className="text-vermelho-neon sm:text-xl">{`Desenvolvedora: ${findGames.desenvolvedora}`}</p>
              <p className="text-vermelho-neon sm:text-xl">{`Lançamento: ${findGames.lancamento}`}</p>
              <p className="text-vermelho-neon sm:text-xl">{`Genero: ${findGames.genero}`}</p>
              <p className="text-vermelho-neon sm:text-xl">{`Copias vendidas: ${findGames.copiasVendidas}M`}</p>
            </div>

            <div className="mt-5">
              <p className="text-vermelho-neon sm:text-lg">{`${findGames.desc}`}</p>
            </div>

            <Link to="/">
              <button className="text-vermelho-neon border-2 border-ciano p-2 w-24 rounded-xl font-xl my-5 hover:bg-gray-900 hover:text-red-900">
                Voltar
              </button>
            </Link>
          </div>
          <Footer />
        </section>
      ) : (
        <h1>XXX</h1>
      )}
    </section>
  );
}
