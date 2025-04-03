import Link from "next/link";
import { MdOutlineVerified } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-gray-800 flex flex-col items-start p-10 gap-12 md:flex-row md:gap-0 md:justify-between md:px-16 md:py-10">
      <div className="flex flex-col gap-3.5 w-full md:gap-4">
        <h1 className="font-mono text-3xl font-semibold flex items-center gap-3">
          Kelurahan Tanah Jaya
          <MdOutlineVerified />
        </h1>
        <p>
          Managed by{" "}
          <Link
            href="https://www.instagram.com/kkn113_kel.tanahjaya/"
            target="_blank"
            className="underline hover:text-blue-500"
          >
            KKNT 113 Kelurahan Tanah Jaya Universitas Hasanuddin
          </Link>
        </p>
      </div>
    </div>
  );
}
