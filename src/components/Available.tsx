import ListAvailable from "./ListAvailable";

export default function Available() {
  return (
    <section className="flex flex-wrap justify-evenly p-5 border-b-4 gap-5 bg-black">
      <ListAvailable
        text="Eu amo os jogos e consoles que a equipe do KF9 Games nos fornece. Trás uma sensação nostalgica!"
        img="https://licensingcon.com.br/wp-content/uploads/2020/09/byFrog_Guia_01_Sonic.jpg"
        name="Sonic"
      />

      <ListAvailable
        text="Eu amo os jogos e consoles que a equipe do KF9 Games nos fornece. Trás uma sensação nostalgica!"
        img="https://licensingcon.com.br/wp-content/uploads/2020/09/byFrog_Guia_01_Sonic.jpg"
        name="Sonic"
      />

      <ListAvailable
        text="Eu amo os jogos e consoles que a equipe do KF9 Games nos fornece. Trás uma sensação nostalgica!"
        img="https://licensingcon.com.br/wp-content/uploads/2020/09/byFrog_Guia_01_Sonic.jpg"
        name="Sonic"
      />
    </section>
  );
}
