import Image from "next/image";
import PageHeaderTitle from "@/components/layouts/globals/PageHeaderTitle";

export default function TouristSpotPage() {
  return (
    <div className="pb-4 md:px-24 md:mt-12 md:pb-10">
      <PageHeaderTitle
        title="SPOT WISATA"
        description="Spot wisata di Kelurahan Tanah Jaya"
      />

      <Image
        src="/image-sample-map.png"
        alt="Peta Spot Wisata Tanah Jaya"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      {/* Description */}
      <p className="mt-1 bg-white rounded p-4">
        Peta ini menampilkan lokasi spot wisata di Kelurahan Tanah Jaya
      </p>
    </div>
  );
}
