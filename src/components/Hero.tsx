import "../styles/hero.css"

export default function Hero() {
  return (
    <section className="hero h-screen flex sm:items-center p-5 justify-center border-b-4 border-vermelho-neon">
      <p className="sm:text-4xl text-xl text-white sm:opacity-40 font-bold  sm:w-[50rem] w-full text-center sm:hover:opacity-100 sm:hover:text-vermelho-neon">"Reviva a nostalgia e sinta a emoção dos jogos antigos, onde a jogabilidade era a rainha e as histórias não precisavam de gráficos ultra-realistas para cativar os jogadores."</p>
    </section>
  )
}