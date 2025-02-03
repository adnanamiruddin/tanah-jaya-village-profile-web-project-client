import Image from "next/image";

export default function EmployeeItem({ photo, name, position }) {
  return (
    <div className="border border-gray-200 rounded-md flex-shrink-0">
      <Image
        src={photo}
        alt={name}
        width={500}
        height={500}
        className="w-40 h-40 object-cover"
      />
      <div className="bg-gradient-to-br from-sky-800 to-sky-400 text-white p-4 rounded-b-md">
        <h4 className="text-center font-semibold text-lg">{name}</h4>
        <p className="text-center mt-1">{position}</p>
      </div>
    </div>
  );
}
