import PageHeaderTitle from "@/components/layouts/globals/PageHeaderTitle";
import BlogItem from "@/components/layouts/BlogItem";

export default function NewsPage() {
  return (
    <div className="pb-4 md:px-24 md:mt-4 md:pb-10">
      <PageHeaderTitle
        title="BERITA TANAH JAYA"
        description="Berita terbaru seputar Kelurahan Tanah Jaya"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <BlogItem
          image="/image-home-hero.jpg"
          title="Pemerintah Kelurahan Tanah Jaya"
          slug="pemerintah-kelurahan-tanah-jaya"
          date="12 Agustus 2021"
        />

        <BlogItem
          image="/image-home-hero.jpg"
          title="Pemerintah Kelurahan Tanah Jaya"
          slug="pemerintah-kelurahan-tanah-jaya"
          date="12 Agustus 2021"
        />
        <BlogItem
          image="/image-home-hero.jpg"
          title="Pemerintah Kelurahan Tanah Jaya"
          slug="pemerintah-kelurahan-tanah-jaya"
          date="12 Agustus 2021"
        />
        <BlogItem
          image="/image-home-hero.jpg"
          title="Pemerintah Kelurahan Tanah Jaya"
          slug="pemerintah-kelurahan-tanah-jaya"
          date="12 Agustus 2021"
        />
        <BlogItem
          image="/image-home-hero.jpg"
          title="Pemerintah Kelurahan Tanah Jaya"
          slug="pemerintah-kelurahan-tanah-jaya"
          date="12 Agustus 2021"
        />
      </div>
    </div>
  );
}
