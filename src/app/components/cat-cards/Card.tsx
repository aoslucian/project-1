import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  img: string;
  order: number;
};
export default function Card({ title, desc, img, order }: Props) {
  let classOrder = "";
  switch (order) {
    case 1:
      classOrder = "md:flex-row";
      break;
    case 2:
      classOrder = "md:flex-row-reverse";
      break;
    default:
      classOrder = "md:flex-row";
      break;
  }

  return (
    <div className={`flex flex-col ${classOrder}  px-8 md:px-0`}>
      <Image src={img} alt="cat" width={500} height={200} />
      <div className="flex flex-col justify-center items-center text-center px-2 max-w-xl mx-auto gap-2">
        <h2 className="text-5xl pt-4 md:pt-0 font-bold">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
