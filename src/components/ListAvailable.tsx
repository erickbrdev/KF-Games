import { IAvailable } from "../interface/Available";

export default function ListAvailable(props: IAvailable) {
  const { img, text, name } = props;
  return (
    <section className="flex flex-col items-center gap-2 border-b-4 p-5 rounded-xl border-white">
      <img src={img} alt="client" className="rounded-full border-2 border-amarelo-neon w-20"/> 

      <p className="w-72 text-lg italic text-white">{text}</p>
      <p className="text-xl font-semibold text-white">{`- ${name}`}</p>
    </section>
  );
}
