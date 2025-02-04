import HomeIcon from "@/components/layouts/HomeIcon";
import Image from "next/image";
import dynamic from "next/dynamic";
import EmployeeItem from "@/components/layouts/EmployeeItem";
import HomePopulationAdministration from "@/components/layouts/HomePopulationAdministration";
import {
  FaPeopleGroup,
  FaSchool as Fa6School,
  FaSchoolFlag,
} from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { IoIosMan, IoIosWoman, IoIosMove } from "react-icons/io";
import { GiTemporaryShield } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import EnvironmentDiagramChart from "@/components/layouts/EnvironmentDiagramChart";
import ImageHoverEffect from "@/components/layouts/globals/ImageHoverEffect";
import ScheduleItem from "@/components/layouts/ScheduleItem";
import BlogItem from "@/components/layouts/BlogItem";
import UmkmItem from "@/components/layouts/UmkmItem";
import Link from "next/link";

const HomeMapLocation = dynamic(
  () => import("@/components/layouts/HomeMapLocation"),
  {
    ssr: false,
  }
);

const HrefGradientButton = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="mt-2 bg-gradient-to-br from-sky-800 to-sky-400 text-white font-semibold text-lg rounded-lg py-2 flex justify-center items-center hover:brightness-125 md:w-80 md:mx-auto md:mt-4"
    >
      {children}
      <MdArrowOutward className="text-2xl ml-2" />
    </Link>
  );
};

export default function HomePage() {
  return (
    <div className="pb-4 md:px-24 md:mt-12 md:pb-10">
      {/* WELCOME */}
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="md:w-[55%]">
          <h1 className="text-2xl font-bold text-center mb-4 text-sky-700 md:text-4xl md:mb-6">
            JELAJAHI TANAH JAYA
          </h1>
          <p className="text-justify px-1 md:text-lg">
            Melalui website ini, Anda dapat menjelajahi segala hal yang terkait
            dengan Tanah Jaya. Aspek pemerintahan, penduduk, demografi, potensi,
            dan juga berita tentang Tanah Jaya.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:w-[45%]">
          <HomeIcon iconSrc="/icon-shop.png" iconAlt="Icon Shop" text="UMKM" />
          <HomeIcon
            iconSrc="/icon-news.png"
            iconAlt="Icon News"
            text="Berita"
          />
          <HomeIcon
            iconSrc="/icon-event.png"
            iconAlt="Icon Event"
            text="Acara"
          />
        </div>
      </div>

      {/* SAMBUTAN */}
      <div className="mt-10 md:mt-24 md:flex md:gap-10">
        <div className="hidden md:block md:w-[30%]">
          <Image
            src="/icon-man.png"
            alt="Bapak Kepala Kelurahan"
            width={200}
            height={200}
            className=" w-full rounded-full"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center mb-4 text-sky-700 md:text-4xl md:text-start">
            SAMBUTAN KEPALA KELURAHAN
          </h1>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/icon-man.png"
                alt="Bapak Kepala Kelurahan"
                width={200}
                height={200}
                className="w-48 h-48 rounded-full md:hidden"
              />
              <h2 className="text-2xl font-bold mt-4 md:mt-0">
                MUHAMMAD RIJAL, S.E.
              </h2>
              <h3 className="text-xl font-semibold mt-1">Kepala Kelurahan</h3>
            </div>

            <div className="text-justify px-1">
              <p>
                Selamat datang di website resmi Pemerintah Kelurahan Tanah Jaya.
                Website ini merupakan wadah informasi bagi seluruh masyarakat
                Tanah Jaya dan juga bagi masyarakat.
              </p>
              <p className="mt-4">
                Website ini akan memberikan informasi yang terkait dengan
                pemerintahan, penduduk, demografi, potensi, dan juga berita
                tentang Tanah Jaya.
              </p>
              <p className="mt-4">Terima kasih.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PETA */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          LOKASI TANAH JAYA
        </h1>
        <p className="text-center mb-4 px-6 md:text-start md:px-0 md:text-lg">
          Menampilkan peta kelurahan dengan kantor lurah sebagai patokan
        </p>

        <div>
          <HomeMapLocation />
          {/*  */}
          <p className="mt-1 text-xs md:text-sm italic">
            *Klik ikon untuk melihat dari Google Maps
          </p>
        </div>
      </div>

      {/* SOTK */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          SOTK
        </h1>
        <p className="text-center mb-4 px-6 md:text-start md:px-0 md:text-lg">
          Struktur Organisasi dan Tata Kerja Kelurahan Tanah Jaya
        </p>

        <div
          className="flex gap-4 overflow-auto"
          // data-aos="fade-right"
        >
          <EmployeeItem
            photo="/icon-man.png"
            name="Nama Pegawai"
            position="Jabatan"
          />

          <EmployeeItem
            photo="/icon-man.png"
            name="Nama Pegawai"
            position="Jabatan"
          />
          <EmployeeItem
            photo="/icon-man.png"
            name="Nama Pegawai"
            position="Jabatan"
          />
          <EmployeeItem
            photo="/icon-man.png"
            name="Nama Pegawai"
            position="Jabatan"
          />
          <EmployeeItem
            photo="/icon-man.png"
            name="Nama Pegawai"
            position="Jabatan"
          />
          <EmployeeItem
            photo="/icon-man.png"
            name="Nama Pegawai"
            position="Jabatan"
          />
          <EmployeeItem
            photo="/icon-man.png"
            name="Nama Pegawai"
            position="Jabatan"
          />
        </div>

        <div className="mt-4">
          <HrefGradientButton href="/profil-kelurahan">
            Lihat Selengkapnya
          </HrefGradientButton>
        </div>
      </div>

      {/* ADMINISTRASI KEPENDUDUKAN */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          ADMINISTRASI KEPENDUDUKAN
        </h1>
        <p className="text-center mb-6 px-6 md:text-start md:px-0 md:text-lg">
          Sistem digital yang berfungsi mempermudah pengelolaan data dan
          informasi terkait dengan kependudukan dan pendayagunaannya untuk
          pelayanan publik yang efektif dan efisien
        </p>

        <div className="grid grid-cols-3 gap-y-6 mb-6 md:flex md:justify-center md:flex-wrap md:gap-4 md:gap-y-10 md:mb-12">
          <div className="w-[20%] mx-auto">
            <HomePopulationAdministration amount={2222} type="Penduduk">
              <FaPeopleGroup className="text-5xl md:text-8xl" />
            </HomePopulationAdministration>
          </div>
          <div className="w-[20%] mx-auto">
            <HomePopulationAdministration amount={666} type="Kepala Keluarga">
              <MdFamilyRestroom className="text-5xl md:text-8xl" />
            </HomePopulationAdministration>
          </div>

          <div className="w-[20%] mx-auto">
            <HomePopulationAdministration amount={222} type="Laki-Laki">
              <IoIosMan className="text-5xl md:text-8xl" />
            </HomePopulationAdministration>
          </div>
          <div className="w-[20%] mx-auto">
            <HomePopulationAdministration amount={111} type="Perempuan">
              <IoIosWoman className="text-5xl md:text-8xl" />
            </HomePopulationAdministration>
          </div>

          <div className="w-[20%] mx-auto md:ms-auto md:me-0">
            <HomePopulationAdministration amount={111} type="Mutasi Penduduk">
              <IoIosMove className="text-5xl md:text-8xl" />
            </HomePopulationAdministration>
          </div>
          <div className="w-[20%] mx-auto">
            <HomePopulationAdministration
              amount={111}
              type="Penduduk Sementara"
            >
              <GiTemporaryShield className="text-5xl md:text-8xl" />
            </HomePopulationAdministration>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl text-center font-semibold mb-2 md:text-3xl md:mb-4">
            Distribusi Penduduk per Lingkungan
          </h2>
          <EnvironmentDiagramChart />
        </div>

        <div>
          <h2 className="text-xl text-center font-semibold mb-4 md:text-3xl md:mb-8">
            Jumlah Sekolah
          </h2>
          <div className="flex justify-center flex-wrap gap-y-2">
            <div className="w-[40%] md:w-[20%]">
              <HomePopulationAdministration amount={4} type="SD">
                <FaSchool className="text-5xl md:text-8xl" />
              </HomePopulationAdministration>
            </div>
            <div className="w-[40%] md:w-[20%]">
              <HomePopulationAdministration amount={2222} type="SMP">
                <Fa6School className="text-5xl md:text-8xl" />
              </HomePopulationAdministration>
            </div>
            <div className="w-full md:w-[20%]">
              <HomePopulationAdministration amount={666} type="SMA/SMK">
                <FaSchoolFlag className="text-5xl md:text-8xl" />
              </HomePopulationAdministration>
            </div>
          </div>
        </div>
      </div>

      {/* UMKM */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          UMKM
        </h1>
        <p className="text-center mb-6 px-6 md:text-start md:px-0 md:text-lg">
          Layanan yang disediakan promosi produk UMKM Desa sehingga mampu
          meningkatkan perekonomian masyarakat Desa
        </p>

        <div className="flex gap-4 overflow-auto">
          <UmkmItem
            image="/image-sample-umkm.jpg"
            name="Kedai Papai"
            slug="kedai-papai"
            price="Rp. 10.000 - Rp.100.000"
          />

          <UmkmItem
            image="/image-sample-umkm.jpg"
            name="Kedai Papai"
            slug="kedai-papai"
            price="Rp. 10.000 - Rp.100.000"
          />
          <UmkmItem
            image="/image-sample-umkm.jpg"
            name="Kedai Papai"
            slug="kedai-papai"
            price="Rp. 10.000 - Rp.100.000"
          />
          <UmkmItem
            image="/image-sample-umkm.jpg"
            name="Kedai Papai"
            slug="kedai-papai"
            price="Rp. 10.000 - Rp.100.000"
          />
        </div>

        <HrefGradientButton href="/umkm">Lihat Semua UMKM</HrefGradientButton>
      </div>

      {/* GALERI TANAH JAYA */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          GALERI
        </h1>
        <p className="text-center mb-6 px-6 md:text-start md:px-0 md:text-lg">
          Menampilkan foto-foto di sekitar Kelurahan Tanah Jaya
        </p>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
            description="Foto Tanah Jaya"
          />
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
          />
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
            description="Foto Tanah Jaya"
          />
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
          />
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
            description="Foto Tanah Jaya"
          />
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
          />
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
            description="Foto Tanah Jaya"
          />
          <ImageHoverEffect
            src="/image-home-hero.jpg"
            title="Taman Karaeng Bapa"
          />
        </div>
      </div>

      {/* AGENDA ACARA */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          AGENDA ACARA
        </h1>
        <p className="text-center mb-6 px-6 md:text-start md:px-0 md:text-lg">
          Jadwal acara yang akan dilaksanakan di Kelurahan Tanah Jaya
        </p>

        <div className="flex gap-4 overflow-auto">
          <ScheduleItem
            title="Rapat Kelurahan"
            date="Senin, 12 Agustus 2021"
            location="Kantor Lurah Tanah Jaya"
          />

          <ScheduleItem
            title="Lomba Volley KKN 113 Tanah Jaya"
            date="Senin, 12 Agustus 2021"
            location="Kantor Lurah Tanah Jaya"
          />
          <ScheduleItem
            title="Jum'at Bersih Tanah Jaya"
            date="Senin, 12 Agustus 2021"
            location="Kantor Lurah Tanah Jaya"
          />
          <ScheduleItem
            title="Donor Darah Dalam Rangka 17 Agustus 2025"
            date="Senin, 12 Agustus 2021"
            location="Kantor Lurah Tanah Jaya"
          />
        </div>

        <HrefGradientButton href="/acara">
          Lihat Agenda Lainnya
        </HrefGradientButton>
      </div>

      {/* BERITA */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          BERITA TERBARU
        </h1>
        <p className="text-center mb-6 px-6 md:text-start md:px-0 md:text-lg">
          Informasi berita terbaru seputar Kelurahan Tanah Jaya
        </p>

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
        </div>
      </div>
    </div>
  );
}
