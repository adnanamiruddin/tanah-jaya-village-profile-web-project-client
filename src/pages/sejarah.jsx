import PageHeaderTitle from "@/components/layouts/globals/PageHeaderTitle";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <div className="pb-4 md:px-24 md:mt-4 md:pb-10">
      <PageHeaderTitle
        title="SEJARAH"
        description="Sejarah Kelurahan Tanah Jaya"
      />

      <div className="md:-mt-3 md:py-2 md:border-4 md:border-white md:bg-white md:rounded-lg">
        <Image
          src="/image-home-hero.jpg"
          alt="Sampul Halaman Sejarah Tanah Jaya"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded md:w-[70%] md:h-[32rem] md:mx-auto"
        />
      </div>

      {/* Description */}
      <p className="mt-1 bg-white rounded p-4 md:mt-3">
        Peta ini menampilkan lokasi spot wisata di Kelurahan Tanah Jaya
      </p>
    </div>
  );
}
