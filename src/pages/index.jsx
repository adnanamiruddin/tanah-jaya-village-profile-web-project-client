import HomeIcon from "@/components/layouts/HomeIcon";
import Image from "next/image";
import dynamic from "next/dynamic";
import EmployeeItem from "@/components/layouts/EmployeeItem";
import HomePopulationAdministration from "@/components/layouts/HomePopulationAdministration";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import { AiOutlineEnvironment } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import ImageHoverEffect from "@/components/layouts/globals/ImageHoverEffect";
import ScheduleItem from "@/components/layouts/ScheduleItem";
import BlogItem from "@/components/layouts/BlogItem";
import UmkmItem from "@/components/layouts/UmkmItem";
import Link from "next/link";
import { useEffect, useState } from "react";
import NotFound from "@/components/layouts/globals/NotFound";
import Loading from "@/components/layouts/globals/Loading";
import greetingsApi from "@/api/modules/greetings.api";
import { toast } from "react-toastify";
import infographicsApi from "@/api/modules/infographics.api";
import blogsApi from "@/api/modules/blogs.api";
import he from "he";
import { formatDateToIndo } from "@/helpers/dateHelper";
import umkmsApi from "@/api/modules/umkm.api";

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
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errorDataLoaded, setErrorDataLoaded] = useState(false);

  const [greetingData, setGreetingData] = useState(null);
  const [sotksData, setSotksData] = useState([]);
  const [infograpichsData, setInfograpichsData] = useState(null);
  const [umkmsData, setUmkmData] = useState([]);
  const [galleryData, setGalleryData] = useState(null);
  const [schedulesData, setSchedulesData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);

  const fetchGreetingData = async () => {
    const { response, error } = await greetingsApi.getGreeting();
    if (response) {
      setGreetingData(response);
      fetchSotksData();
    }
    if (error) {
      toast.error(error.message);
      setErrorDataLoaded(true);
    }
  };
  
  //
  const fetchSotksData = async () => {
    fetchInfographicsData();
    // const { response, error } = await greetingsApi.getGreeting();
    // if (response) {
    //   setGreetingData(response);
    // }
    // if (error) {
    //   toast.error(error.message);
    //   setErrorDataLoaded(true);
    // }
  };
  //
  const fetchInfographicsData = async () => {
    const { response, error } = await infographicsApi.getInfographic();
    if (response) {
      setInfograpichsData(response);
      fetchUmkmsData();
    }
    if (error) {
      toast.error(error.message);
      setErrorDataLoaded(true);
    }
  };
  //
  const fetchUmkmsData = async () => {
    const { response, error } = await umkmsApi.getAllUmkms();
    if (response) {
      setUmkmData(response);
      fetchGalleryData();
    }
    if (error) {
      toast.error(error.message);
      setErrorDataLoaded(true);
    }
  };
  //
  const fetchGalleryData = async () => {
    fetchSchedulesData();
    // const { response, error } = await infographicsApi.getInfographic();
    // if (response) {
    //   setInfograpichsData(response);
    // }
    // if (error) {
    //   toast.error(error.message);
    //   setErrorDataLoaded(true);
    // }
  };
  //
  const fetchSchedulesData = async () => {
    fetchBlogsData();
    // const { response, error } = await infographicsApi.getInfographic();
    // if (response) {
    //   setInfograpichsData(response);
    // }
    // if (error) {
    //   toast.error(error.message);
    //   setErrorDataLoaded(true);
    // }
  };
  //
  const fetchBlogsData = async () => {
    const { response, error } = await blogsApi.getAllBlogs({
      status: "published",
    });
    if (response) {
      setBlogsData(response);
      setTimeout(() => {
        setIsDataLoaded(true);
      }, 500);
    }
    if (error) {
      toast.error(error.message);
      setErrorDataLoaded(true);
    }
  };
  //
  useEffect(() => {
    fetchGreetingData();
  }, []);

  return (
    <>
      {errorDataLoaded ? (
        <NotFound />
      ) : isDataLoaded ? (
        <div className="pb-4 md:px-24 md:mt-12 md:pb-10">
          {/* WELCOME */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="md:w-[55%]">
              <h1 className="text-2xl font-bold text-center mb-4 text-sky-700 md:text-4xl md:mb-6">
                JELAJAHI TANAH JAYA
              </h1>
              <p className="text-justify px-1 md:text-lg">
                Melalui website ini, Anda dapat menjelajahi segala hal yang
                terkait dengan Tanah Jaya. Aspek pemerintahan, penduduk,
                demografi, potensi, dan juga berita tentang Tanah Jaya.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:w-[45%]">
              <HomeIcon
                iconSrc="/icon-shop.png"
                iconAlt="Icon Shop"
                text="UMKM"
                href="/umkm"
              />
              <HomeIcon
                iconSrc="/icon-news.png"
                iconAlt="Icon News"
                text="Berita"
                href="/berita"
              />
              <div className="hidden md:inline"></div>
              <div className="hidden md:inline"></div>
              <div className="hidden md:inline"></div>
              <div className="hidden md:inline"></div>
              <HomeIcon
                iconSrc="/icon-event.png"
                iconAlt="Icon Event"
                text="Acara"
                href="/acara"
              />
              <HomeIcon
                iconSrc="/icon-profile.png"
                iconAlt="Icon Profile"
                text="Profil"
                href="/profil-kelurahan"
              />
            </div>
          </div>

          {/* SAMBUTAN */}
          <div className="mt-10 md:mt-24 md:flex md:gap-10">
            <div className="hidden md:block md:w-[40%]">
              <Image
                src={greetingData.villageHeadPhotoURL || "/icon-man.png"}
                alt={greetingData.villageHeadName}
                width={200}
                height={200}
                className=" w-full rounded-full"
              />
            </div>

            <div className="md:w-[60%]">
              <h1 className="text-2xl font-bold text-center mb-4 text-sky-700 md:text-4xl md:text-start">
                SAMBUTAN KEPALA KELURAHAN
              </h1>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <Image
                    src={greetingData.villageHeadPhotoURL || "/icon-man.png"}
                    alt={greetingData.villageHeadName}
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full md:hidden"
                  />
                  <h2 className="text-2xl font-bold mt-4 md:mt-0">
                    {greetingData.villageHeadName}
                  </h2>
                  <h3 className="text-xl font-semibold mt-1">
                    Kepala Kelurahan
                  </h3>
                </div>

                <div className="px-1">
                  <div
                    className="sanitized-content"
                    dangerouslySetInnerHTML={{
                      __html: he.decode(greetingData.greetingContent),
                    }}
                  ></div>
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

            <div className="grid grid-cols-3 gap-y-6 md:flex md:justify-center md:flex-wrap md:gap-4 md:gap-y-12">
              <div className="w-[30%] mx-auto">
                <HomePopulationAdministration
                  amount={infograpichsData.totalPopulation}
                  type="Penduduk"
                >
                  <FaPeopleGroup className="text-5xl md:text-8xl" />
                </HomePopulationAdministration>
              </div>
              <div className="w-[30%] mx-auto">
                <HomePopulationAdministration
                  amount={infograpichsData.totalMale}
                  type="Laki-Laki"
                >
                  <IoIosMan className="text-5xl md:text-8xl" />
                </HomePopulationAdministration>
              </div>
              <div className="w-[30%] mx-auto">
                <HomePopulationAdministration
                  amount={infograpichsData.totalFemale}
                  type="Perempuan"
                >
                  <IoIosWoman className="text-5xl md:text-8xl" />
                </HomePopulationAdministration>
              </div>

              <div className="flex justify-center items-center col-span-3 md:gap-96">
                <div className="w-[20%] mx-auto">
                  <HomePopulationAdministration
                    amount={infograpichsData.totalFamily}
                    type="Kepala Keluarga"
                  >
                    <MdFamilyRestroom className="text-5xl md:text-8xl" />
                  </HomePopulationAdministration>
                </div>
                <div className="w-[20%] mx-auto">
                  <HomePopulationAdministration
                    amount={infograpichsData.totalEnvironment}
                    type="Lingkungan"
                  >
                    <AiOutlineEnvironment className="text-5xl md:text-8xl" />
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
              {umkmsData.map((umkm, i) => (
                <UmkmItem
                  key={i}
                  image={
                    umkm.imageURL !== ""
                      ? umkm.imageURL
                      : "/image-home-hero.jpg"
                  }
                  name={umkm.name}
                  slug={umkm.slug}
                  price={umkm.priceRange}
                />
              ))}
            </div>

            <HrefGradientButton href="/umkm">
              Lihat Semua UMKM
            </HrefGradientButton>
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
              <div className="col-span-2 md:col-span-1">
                <ImageHoverEffect
                  src="/image-home-hero.jpg"
                  title="Taman Karaeng Bapa"
                />
              </div>
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
              {blogsData.map((blog, i) => (
                <BlogItem
                  key={i}
                  image={blog.coverImageURL || "/image-home-hero.jpg"}
                  title={blog.title}
                  slug={blog.slug}
                  date={formatDateToIndo(blog.createdAt)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
