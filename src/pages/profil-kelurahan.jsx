import vissionAndMissionsApi from "@/api/modules/vissionAndMissions.api";
import EmployeeItem from "@/components/layouts/EmployeeItem";
import Dropdown from "@/components/layouts/globals/Dropdown";
import ImageHoverEffect from "@/components/layouts/globals/ImageHoverEffect";
import Loading from "@/components/layouts/globals/Loading";
import NotFound from "@/components/layouts/globals/NotFound";
import PageHeaderTitle from "@/components/layouts/globals/PageHeaderTitle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import he from "he";

export default function VillageProfilePage() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errorDataLoaded, setErrorDataLoaded] = useState(false);

  const [vissionAndMissionData, setVissionAndMissionData] = useState(null);
  const [sotksData, setSotksData] = useState(null);
  const [galleryData, setGalleryData] = useState(null);

  const fetchVissionAndMissionData = async () => {
    const { response, error } =
      await vissionAndMissionsApi.getVissionAndMission();
    if (response) {
      setVissionAndMissionData(response);
      fetchSotksData();
    }
    if (error) {
      toast.error(error.message);
      setErrorDataLoaded(true);
    }
  };
  //
  const fetchSotksData = async () => {
    fetchGalleryData();
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
  const fetchGalleryData = async () => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 500);
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
  useEffect(() => {
    fetchVissionAndMissionData();
  }, []);

  return (
    <>
      {errorDataLoaded ? (
        <NotFound />
      ) : isDataLoaded ? (
        <div className="pb-4 md:px-24 md:mt-4 md:pb-10">
          <PageHeaderTitle
            title="PROFIL TANAH JAYA"
            description="Mengenal lebih dekat kehidupan masyarakat Tanah Jaya"
            bgSkyOnly
          />

          {/* VIDEO PROFIL */}
          <div className="bg-gradient-to-b from-sky-50 to-gray-50 -mt-6">
            <div className="max-w-4xl mx-auto">
              {/* Video Container */}
              <div className="mt-4 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-300 transform hover:scale-[1.01]">
                <iframe
                  width="100%"
                  height="100%"
                  className="aspect-video object-cover"
                  src="https://www.youtube.com/embed/LjJyEgr0zKg?si=o0EEybSQKrdmkCjs&autoplay=1&loop=1"
                  title="Video Profil Kelurahan Tanah Jaya"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>

              {/* Video Description */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-lg">
                  Video ini menampilkan keindahan alam, kebudayaan, dan
                  aktivitas masyarakat sehari-hari di Kelurahan Tanah Jaya
                </p>
              </div>
            </div>
          </div>

          {/* VISI DAN MISI */}
          <div className="mt-12 md:mt-24">
            <h1 className="text-2xl font-bold text-center mb-4 text-sky-700 md:text-4xl">
              VISI DAN MISI KELURAHAN
            </h1>

            <div className="bg-transparent md:flex md:bg-white md:p-2 md:border md:border-gray-200 md:shadow-lg md:rounded-lg">
              <div className="mt-2 bg-white rounded p-2 md:mt-0 md:w-[55%] md:bg-transparent">
                <Image
                  priority
                  src="/image-home-hero.jpg"
                  alt="Visi dan Misi Kelurahan"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-md md:h-[30rem]"
                />
              </div>

              <div className="mt-2 bg-white rounded py-4 px-6 flex flex-col gap-4 md:mt-0 md:w-[45%] md:bg-transparent">
                <Dropdown title="Visi Kelurahan Tanah Jaya">
                  <div
                    className="sanitized-content"
                    dangerouslySetInnerHTML={{
                      __html: he.decode(vissionAndMissionData.vission),
                    }}
                  ></div>
                </Dropdown>

                <Dropdown title="Misi Kelurahan Tanah Jaya" showBorderTop>
                  <div
                    className="sanitized-content"
                    dangerouslySetInnerHTML={{
                      __html: he.decode(vissionAndMissionData.mission),
                    }}
                  ></div>
                </Dropdown>
              </div>
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

            <div className="flex gap-4 overflow-auto md:grid grid-cols-4">
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
          </div>

          {/* GALERI TANAH JAYA */}
          <div className="mt-10 md:mt-24">
            <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
              GALERI
            </h1>
            <p className="text-center mb-6 px-6 md:text-start md:px-0 md:text-lg">
              Menampilkan foto-foto di sekitar Kelurahan Tanah Jaya
            </p>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
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
              <ImageHoverEffect
                src="/image-home-hero.jpg"
                title="Taman Karaeng Bapa"
              />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
