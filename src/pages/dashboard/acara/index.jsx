import AddDataButton from "@/components/layouts/functions/AddDataButton";
import DeleteButton from "@/components/layouts/functions/DeleteButton";
import EditButton from "@/components/layouts/functions/EditButton";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";
// import DeleteInformationModal from "@/components/layouts/modals/DeleteInformationModal";
import NotFound from "@/components/layouts/globals/NotFound";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/layouts/globals/Loading";
// import informationApi from "@/api/modules/information.api";
import { toast } from "react-toastify";
// import Pagination from "@/components/layouts/functions/Pagination";
// import LoadingPagination from "@/components/layouts/globals/LoadingPagination";
import { formatDateToIndo } from "@/helpers/dateHelper";

export default function DashboardSchedulesPage() {
  const router = useRouter();

  const [schedules, setSchedules] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errorDataLoaded, setErrorDataLoaded] = useState(false);
  //
  const [selectedInformationIdToDelete, setSelectedInformationIdToDelete] =
    useState(null);

  const fetchSchedulesData = async () => {
    setSchedules([
      {
        id: 1,
        title: "Acara 1",
        date: "2023-08-02T00:00:00.000Z",
        location: "Gedung A",
      },
      {
        id: 2,
        title: "Acara 2",
        date: "2023-08-03T00:00:00.000Z",
        location: "Gedung B",
      },
    ]);
    setIsDataLoaded(true);

    // const { response, error } = await informationApi.blog.getAllBlogs({
    //   page,
    // });
    // if (response) {
    //   setSchedules(response.data);
    //   setTotalPage(response.pagination.lastPage);
    //   setTimeout(() => {
    //     setIsDataLoaded(true);
    //   }, 1000);
    // }
    // if (error) {
    //   setErrorDataLoaded(true);
    //   toast.error("Gagal memuat data");
    // }
  };
  //
  useEffect(() => {
    fetchSchedulesData();
  }, []);

  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>ACARA</DashboardHeader>

      {errorDataLoaded ? (
        <NotFound />
      ) : isDataLoaded ? (
        <div className="px-10 pb-16 h-full">
          <div className="pt-4 flex justify-between items-center">
            <h2 className="font-bold text-2xl">Daftar Agenda Acara</h2>
            {/*  */}
            <AddDataButton
              onClick={() => router.push("/dashboard/acara/tambah")}
            >
              Buat
            </AddDataButton>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="w-full text-black flex items-center gap-2 py-3 px-1 border-b-2 border-gray-300 text-lg">
                  <th className="w-[5%] text-start">No</th>
                  <th className="w-[35%] text-start">Judul</th>
                  <th className="w-[20%] text-start">Tanggal</th>
                  <th className="w-[20%] text-start">Lokasi</th>
                  <th className="w-[20%] text-start">Aksi</th>
                </tr>
              </thead>
              {schedules?.length > 0 ? (
                <tbody>
                  {schedules.map((schedules, i) => (
                    <tr
                      key={i}
                      className="text-black flex items-center gap-2 py-5 px-1 border-b-2 border-gray-300"
                    >
                      <td className="w-[5%] text-start ps-2">{i + 1}</td>
                      <td className="w-[35%] text-start break-words">
                        {schedules.title}
                      </td>
                      <td className="w-[20%] text-start">
                        {formatDateToIndo(schedules.date)}
                      </td>
                      <td className="w-[20%] text-start">
                        {schedules.location}
                      </td>
                      <td className="w-[20%] text-start flex items-center gap-2">
                        <EditButton
                          onClick={() =>
                            router.push(
                              `/dashboard/acara/tambah?editSchedulesId=${schedules.id}`
                            )
                          }
                        >
                          Edit
                        </EditButton>
                        {/*  */}
                        <DeleteButton
                          onClick={() => {
                            setSelectedSchedulesIdToDelete(schedules.id);
                            document
                              .getElementById("delete_schedules_modal")
                              .showModal();
                          }}
                        >
                          Hapus
                        </DeleteButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <NotFound message="Tidak ada data agenda acara" />
              )}
            </table>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      {/* <DeleteInformationModal
        informationId={selectedInformationIdToDelete}
        setInformationId={setSelectedInformationIdToDelete}
        fetchSchedulesData={fetchSchedulesData}
      /> */}
    </div>
  );
}
