import HeaderDetailPage from "@/components/layouts/globals/HeaderDetailPage";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function NewsDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="pb-4 md:px-24 md:mt-12 md:pb-10">
      <div className="-m-2 -mt-4 md:flex md:items-start md:gap-3">
        <div className="w-full md:w-[75%]">
          <HeaderDetailPage title="Pemerintah Kelurahan Tanah Jaya" />

          <div className="mt-2 bg-white rounded py-2 px-3 text-sm">
            <p className="text-[#A0A0A0]">
              <FaRegCalendarAlt className="inline mb-0.5 me-1 text-lg" />{" "}
              <span className="text-black">Senin, 3 November 2024</span>
            </p>
            <p className="text-[#A0A0A0]">
              <CgProfile className="inline mb-0.5 me-1 text-lg" /> Ditulis oleh{" "}
              <span className="text-black">Muh. Adnan Putra Amiruddin</span>
            </p>
          </div>

          <div className="mt-2 bg-white py-2 px-3">
            <Image
              priority
              src="/image-home-hero.jpg"
              alt="Pemerintah Kelurahan Tanah Jaya"
              width={500}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-2 bg-white rounded py-2 px-3">
            <p className="text-[#A0A0A0] text-sm">
              Berita Seputar Kelurahan Tanah Jaya
            </p>
          </div>

          <div className="text-sm text-justify break-words whitespace-normal">
            {/* <div
              className="mt-2 bg-white rounded py-2 px-3 sanitized-content"
              dangerouslySetInnerHTML={{
                __html: information.artiContent,
              }}
            ></div> */}

            <div className="mt-2 bg-white rounded py-2 px-3 sanitized-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, vitae perspiciatis quo facere veniam repudiandae,
                impedit commodi optio neque suscipit, tempore quod laboriosam?
                Magni molestias, quasi quidem quaerat iusto ullam cumque
                temporibus iste odio optio eveniet harum nisi quia praesentium
                maiores architecto! Voluptatibus quibusdam harum inventore rem
                facere. Porro, consectetur.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, vitae perspiciatis quo facere veniam repudiandae,
                impedit commodi optio neque suscipit, tempore quod laboriosam?
                Magni molestias, quasi quidem quaerat iusto ullam cumque
                temporibus iste odio optio eveniet harum nisi quia praesentium
                maiores architecto! Voluptatibus quibusdam harum inventore rem
                facere. Porro, consectetur.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, vitae perspiciatis quo facere veniam repudiandae,
                impedit commodi optio neque suscipit, tempore quod laboriosam?
                Magni molestias, quasi quidem quaerat iusto ullam cumque
                temporibus iste odio optio eveniet harum nisi quia praesentium
                maiores architecto! Voluptatibus quibusdam harum inventore rem
                facere. Porro, consectetur.
              </p>
            </div>
          </div>

          {/* BERITA LAINNYA */}
          {/* <div className="md:hidden">
            <SectionTitle title="BERITA LAINNYA" />

            <div className="mt-2 flex flex-col gap-2">
              {anotherInformations.map((information, i) => (
                <InformationItem key={i} information={information} />
              ))}
            </div>
          </div>
        </div> */}

          {/* BERITA LAINNYA */}
          {/* <div className="hidden md:inline md:w-[25%] md:mt-2">
          <div className="bg-white rounded py-4">
            <p className="font-semibold text-center text-3xl">BERITA LAINNYA</p>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            {anotherInformations.map((information, i) => (
              <InformationItem key={i} information={information} />
            ))}
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
