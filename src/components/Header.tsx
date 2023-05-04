import { GameController } from "@phosphor-icons/react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Header() {
  return (
    <header
      className="flex items-center justify-evenly bg-laranja-neon p-1 sm:h-24 border-4 border-vermelho-neon
    "
    >
      <div>
        <GameController
          size={60}
          color="#fff"
          weight="fill"
          className="p-1 border-2 rounded-full bg-rosa-neon border-azul-neon"
        />
      </div>

      <div className="flex flex-col gap-2 sm:hidden">
        <nav className="flex gap-5 sm:gap-7">
          <a
            className="text-lg text-rosa-neon sm:text-xl border-b-2 border-amarelo-neon hover:text-amarelo-neon"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            className="text-lg text-rosa-neon sm:text-xl border-b-2 border-amarelo-neon hover:text-amarelo-neon"
            href="#games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Games
          </a>
          <a
            className="text-lg text-rosa-neon sm:text-xl border-b-2 border-amarelo-neon hover:text-amarelo-neon"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Experience
          </a>
        </nav>

        <nav className="flex justify-evenly sm:gap-5">
          <FacebookLogo
            size={35}
            color="#FF00FF"
            className="hover:bg-azul-neon hover:rounded-full hover:p-1"
          />
          <InstagramLogo
            size={35}
            color="#FF00FF"
            className="hover:bg-azul-neon hover:rounded-full hover:p-1"
          />
          <TwitterLogo
            size={35}
            color="#FF00FF"
            className="hover:bg-azul-neon hover:rounded-full hover:p-1"
          />
        </nav>
      </div>

      <nav className="hidden sm:flex sm:gap-7 italic">
        <a
          className="text-lg text-rosa-neon sm:text-xl border-b-2 border-azul-neon hover:text-amarelo-neon"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="text-lg text-rosa-neon sm:text-xl border-b-2 border-azul-neon hover:text-amarelo-neon"
          href="#games"
          target="_blank"
          rel="noopener noreferrer"
        >
          Games
        </a>
        <a
          className="text-lg text-rosa-neon sm:text-xl border-b-2 border-azul-neon hover:text-amarelo-neon"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Experience
        </a>
        <a
          className="text-lg text-rosa-neon sm:text-xl border-b-2 border-azul-neon hover:text-amarelo-neon"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consoles
        </a>
      </nav>

      <nav className="hidden sm:flex sm:gap-7">
        <FacebookLogo
          size={40}
          color="#FF00FF"
          className="hover:bg-azul-neon hover:rounded-full hover:p-1"
        />
        <InstagramLogo
          size={40}
          color="#FF00FF"
          className="hover:bg-azul-neon hover:rounded-full hover:p-1"
        />
        <TwitterLogo
          size={40}
          color="#FF00FF"
          className="hover:bg-azul-neon hover:rounded-full hover:p-1"
        />
      </nav>
    </header>
  );
}
