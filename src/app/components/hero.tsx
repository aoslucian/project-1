import Image from "next/image";

type Props = {};
export default function Hero({}: Props) {
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <h1 className="mb-4">About Us</h1>
      <p>
        <span className="font-bold">Lorem Ipsum</span> dolor sit amet,
        consectetur adipisicing elit. Pariatur blanditiis dolor sint, ex animi
        eveniet perspiciatis ratione officia in natus laboriosam obcaecati fugit
        dicta, eaque voluptatibus voluptatum? Ipsa, veniam eum deserunt
        reprehenderit illo doloribus fuga quo eius enim beatae quibusdam nulla
        optio, similique reiciendis consequuntur laudantium? Porro, dolorum.
        Perferendis, incidunt?
      </p>

      <div></div>
      <Image src="/cat.png" alt="cat" width="450" height="350" className="my-8" />

      <p className="pb-4"> <span className="font-bold">Lorem Ipsum</span>  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
</p>
    </div>
  );
}
