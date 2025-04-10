import Image from 'next/image';

export function PageHeader({ title }: { title: string }) {
  return (
    <div className="relative h-[50vh] bg-green-800 text-white flex items-center justify-center">
      <Image
        src="/Home.jpg"
        alt="Header Background"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
        priority
      />
      <h1 className="text-5xl font-bold z-10">{title}</h1>
    </div>
  );
}
