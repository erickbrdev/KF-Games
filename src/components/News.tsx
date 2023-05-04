import "../styles/news.css"

export default function News() {
  return(
    <section className="bg-black news-section items-center flex p-5 flex-col justify-center gap-5 border-2 border-azul-neon">
      <h1 className="text-lg sm:text-3xl text-vermelho-neon font-semibold">Confira nossos últimos lançamentos!</h1>

    <div className="sm:grid flex flex-col gap-5 sm:grid-cols-2 items-center">
    <img className="border-2 border-verde-neon rounded-xl h-52 w-96" src="https://i.pinimg.com/originals/05/3c/39/053c39f4c14d99d4bc143c05dc3ca219.gif" alt="Mario Bross" />

    <img className="border-2 border-verde-neon rounded-xl h-52 w-96" src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/06/dimitri-gif-4.gif" alt="Pac man" />

    <img src="https://i.pinimg.com/originals/7d/77/ea/7d77eab4f70e83863db6612fab4d8802.gif" alt="Donkey Kong" className="border-2 border-verde-neon rounded-xl h-52 w-96"/>

    <img src="https://media.tenor.com/yyofCYnEXksAAAAC/sonic-the-hedgehog-classic-sonic.gif" alt="Sonic" className="border-2 border-verde-neon rounded-xl h-52 w-96"/>
    </div>
    </section>
  )
}