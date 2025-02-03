import PageHeaderTitle from "@/components/layouts/globals/PageHeaderTitle";
import UmkmItem from "@/components/layouts/UmkmItem";

export default function UmkmPage() {
  return (
    <div className="pb-4 md:px-24 md:mt-12 md:pb-10">
      <PageHeaderTitle
        title="UMKM"
        description="Informasi seputar UMKM di Kelurahan Tanah Jaya"
      />

      <div className="grid grid-cols-1 gap-5 overflow-auto">
        <UmkmItem
          image="/image-sample-umkm.jpg"
          name="Kedai Papai"
          slug="kedai-papai"
          price="Rp. 10.000 - Rp.100.000"
          fullWidth
        />

        <UmkmItem
          image="/image-sample-umkm.jpg"
          name="Kedai Papai"
          slug="kedai-papai"
          price="Rp. 10.000 - Rp.100.000"
          fullWidth
        />
        <UmkmItem
          image="/image-sample-umkm.jpg"
          name="Kedai Papai"
          slug="kedai-papai"
          price="Rp. 10.000 - Rp.100.000"
          fullWidth
        />
        <UmkmItem
          image="/image-sample-umkm.jpg"
          name="Kedai Papai"
          slug="kedai-papai"
          price="Rp. 10.000 - Rp.100.000"
          fullWidth
        />
      </div>
    </div>
  );
}
