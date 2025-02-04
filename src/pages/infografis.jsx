import EnvironmentDiagramChart from "@/components/layouts/EnvironmentDiagramChart";
import PageHeaderTitle from "@/components/layouts/globals/PageHeaderTitle";
import {
  FaPeopleGroup,
  FaSchool as Fa6School,
  FaSchoolFlag,
} from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { GiTemporaryShield } from "react-icons/gi";
import { IoIosMan, IoIosMove, IoIosWoman } from "react-icons/io";
import { MdFamilyRestroom } from "react-icons/md";
import PopulationAdministration from "@/components/layouts/PopulationAdministration";

export default function InfographicsPage() {
  return (
    <div className="pb-4 md:px-24 md:mt-4 md:pb-10">
      <PageHeaderTitle
        title="INFOGRAFIS"
        description="Infografis seputar Kelurahan Tanah Jaya"
      />

      <div>
        <h1 className="text-2xl font-bold text-center mb-2 text-sky-700 md:text-4xl md:text-start">
          ADMINISTRASI KEPENDUDUKAN
        </h1>
        <p className="text-center mb-6 px-6 md:text-start md:px-0 md:text-lg">
          Sistem digital yang berfungsi mempermudah pengelolaan data dan
          informasi terkait dengan kependudukan dan pendayagunaannya untuk
          pelayanan publik yang efektif dan efisien
        </p>

        <div className="mb-6 grid grid-cols-2 px-6 gap-x-6 gap-y-8 md:flex md:justify-center md:flex-wrap md:gap-4 md:gap-y-10 md:mb-12">
          <div className="w-[20%] mx-auto">
            <PopulationAdministration amount={2222} type="Penduduk">
              <FaPeopleGroup className="text-6xl md:text-9xl" />
            </PopulationAdministration>
          </div>
          <div className="w-[20%] mx-auto">
            <PopulationAdministration amount={666} type="Kepala Keluarga">
              <MdFamilyRestroom className="text-6xl md:text-9xl" />
            </PopulationAdministration>
          </div>

          <div className="w-[20%] mx-auto">
            <PopulationAdministration amount={222} type="Laki-Laki">
              <IoIosMan className="text-6xl md:text-9xl" />
            </PopulationAdministration>
          </div>
          <div className="w-[20%] mx-auto">
            <PopulationAdministration amount={111} type="Perempuan">
              <IoIosWoman className="text-6xl md:text-9xl" />
            </PopulationAdministration>
          </div>

          <div className="w-[20%] mx-auto md:ms-auto md:me-0">
            <PopulationAdministration amount={111} type="Mutasi Penduduk">
              <IoIosMove className="text-6xl md:text-9xl" />
            </PopulationAdministration>
          </div>
          <div className="w-[20%] mx-auto">
            <PopulationAdministration amount={111} type="Penduduk Sementara">
              <GiTemporaryShield className="text-6xl md:text-9xl" />
            </PopulationAdministration>
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
              <PopulationAdministration amount={4} type="SD">
                <FaSchool className="text-6xl md:text-9xl" />
              </PopulationAdministration>
            </div>
            <div className="w-[40%] md:w-[20%]">
              <PopulationAdministration amount={2222} type="SMP">
                <Fa6School className="text-6xl md:text-9xl" />
              </PopulationAdministration>
            </div>
            <div className="w-[40%] md:w-[20%]">
              <PopulationAdministration amount={666} type="SMA/SMK">
                <FaSchoolFlag className="text-6xl md:text-9xl" />
              </PopulationAdministration>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
