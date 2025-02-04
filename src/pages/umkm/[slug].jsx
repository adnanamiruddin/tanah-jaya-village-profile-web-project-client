import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

export default function UmkmDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="pb-4 md:px-24 md:mt-4 md:pb-10">
      {/* <h1 className="text-3xl font-bold text-center mb-4 text-sky-700">
        Detail UMKM
      </h1> */}

      <div className="text-center pt-1">
        <h1 className="text-3xl font-bold text-sky-800 mb-4 md:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-500">
            Detail UMKM
          </span>
        </h1>
      </div>

      <div className="bg-white p-3 border border-gray-300 rounded-lg md:flex md:gap-6">
        <Image
          priority
          src="/image-sample-umkm.jpg"
          alt="Kedai Papai"
          width={500}
          height={500}
          className="w-full object-cover rounded-md md:w-1/2"
        />

        <div className="py-4 px-1 md:py-1">
          <h4 className="text-3xl font-bold md:text-4xl">Kedai Papai</h4>

          <p className="mt-3 font-semibold text-xl text-gray-500 flex items-center gap-2">
            <FaRegMoneyBill1 className="text-2xl mt-0.5" />
            <span className="text-black">Rp. 100.000 - Rp.100.000</span>
          </p>
          <p className="italic text-sm text-gray-500">*Kisaran harga</p>

          <p className="mt-3 text-justify">
            <GrNotes className="inline me-1" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            vitae perspiciatis quo facere veniam repudiandae, impedit commodi
            optio neque suscipit, tempore quod laboriosam? Magni molestias,
            quasi quidem quaerat iusto ullam cumque temporibus iste odio optio
            eveniet harum nisi quia praesentium maiores architecto! Voluptatibus
            quibusdam harum inventore rem.
          </p>

          <Link href={`/umkm/${slug}`}>
            <p className="mt-5 text-white font-semibold bg-sky-500 py-2 px-5 rounded hover:bg-sky-400 transition duration-300 w-max flex justify-center items-center gap-2.5 md:px-8">
              Hubungi Penjual <FaWhatsapp className="text-xl" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
