import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 p-5 bg-vermelho-neon">
      <div>
        <p className="text-lg text-verde-neon font-semibold sm:text-2xl">Projeto desenvolvido por Erick Dev</p>
      </div>

      <div className="flex gap-3">
        <a href="">
          <LinkedinLogo
            size={40}
            color="#000"
            weight="fill"
            className="hover:bg-white p-1 border-2 rounded-full bg-verde-neon"
          />
        </a>
        <a href="">
          <InstagramLogo
            size={40}
            color="#000"
            weight="fill"
            className="hover:bg-white p-1 border-2 rounded-full bg-verde-neon"
          />
        </a>
        <a href="">
          <FacebookLogo
            size={40}
            color="#000"
            weight="fill"
            className="hover:bg-white p-1 border-2 rounded-full bg-verde-neon"
          />
        </a>
        <a href="">
          <GithubLogo
            size={40}
            color="#000"
            weight="fill"
            className="hover:bg-white p-1 border-2 rounded-full bg-verde-neon"
          />
        </a>
        <a href="">
          <YoutubeLogo
            size={40}
            color="#000"
            weight="fill"
            className="hover:bg-white p-1 border-2 rounded-full bg-verde-neon"
          />
        </a>
      </div>
    </footer>
  );
}
