import Image from "next/image";

export default function HomeIcon({ iconSrc, iconAlt, text }) {
  return (
    <div className="bg-gray-100 w-[40%] py-4 shadow-lg border border-gray-200 rounded-md flex flex-col justify-center items-center gap-3 hover:shadow-2xl transition duration-300">
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={200}
        height={200}
        className="w-16 h-16 md:w-20 md:h-20"
      />
      <p className="text-lg font-semibold md:text-xl md:font-bold">{text}</p>
    </div>
  );
}
