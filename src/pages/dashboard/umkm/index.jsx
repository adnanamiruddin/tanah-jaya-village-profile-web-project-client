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

export default function DashboardUmkmPage() {
  const router = useRouter();

  const [umkm, setUmkm] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errorDataLoaded, setErrorDataLoaded] = useState(false);
  //
  const [selectedInformationIdToDelete, setSelectedInformationIdToDelete] =
    useState(null);

  const fetchUmkmData = async () => {
    setUmkm([
      {
        id: 1,
        name: "UMKM 1",
        priceRange: "Rp. 10.000 - Rp. 100.000",
      },
      {
        id: 2,
        name: "UMKM 2",
        priceRange: "Rp. 50.000 - Rp. 200.000",
      },
    ]);
    setIsDataLoaded(true);

    // const { response, error } = await informationApi.blog.getAllBlogs({
    //   page,
    // });
    // if (response) {
    //   setUmkm(response.data);
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
    fetchUmkmData();
  }, []);

  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>UMKM</DashboardHeader>

      {errorDataLoaded ? (
        <NotFound />
      ) : isDataLoaded ? (
        <div className="px-10 pb-16 h-full">
          <div className="pt-4 flex justify-between items-center">
            <h2 className="font-bold text-2xl">
              Daftar Usaha Mikro Kecil Menangah (UMKM)
            </h2>
            {/*  */}
            <AddDataButton
              onClick={() => router.push("/dashboard/umkm/tambah")}
            >
              Buat
            </AddDataButton>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="w-full text-black flex items-center gap-2 py-3 px-1 border-b-2 border-gray-300 text-lg">
                  <th className="w-[5%] text-start">No</th>
                  <th className="w-[40%] text-start">Nama Usaha</th>
                  <th className="w-[35%] text-start">Kisaran Harga</th>
                  <th className="w-[20%] text-start">Aksi</th>
                </tr>
              </thead>
              {umkm?.length > 0 ? (
                <tbody>
                  {umkm.map((umkm, i) => (
                    <tr
                      key={i}
                      className="text-black flex items-center gap-2 py-5 px-1 border-b-2 border-gray-300"
                    >
                      <td className="w-[5%] text-start ps-2">{i + 1}</td>
                      <td className="w-[40%] text-start break-words">
                        {umkm.name}
                      </td>
                      <td className="w-[35%] text-start">{umkm.priceRange}</td>
                      <td className="w-[20%] text-start flex items-center gap-2">
                        <EditButton
                          onClick={() =>
                            router.push(
                              `/dashboard/umkm/tambah?editUmkmId=${umkm.id}`
                            )
                          }
                        >
                          Edit
                        </EditButton>
                        {/*  */}
                        <DeleteButton
                          onClick={() => {
                            setSelectedUmkmIdToDelete(umkm.id);
                            document
                              .getElementById("delete_umkm_modal")
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
        fetchUmkmData={fetchUmkmData}
      /> */}
    </div>
  );
}
