import Input from "@/components/layouts/functions/Input";
import SaveButton from "@/components/layouts/functions/SaveButton";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";

export default function DashboardAddSchedulePage() {
  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>ACARA</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">Form Agenda Acara</h2>
          {/*  */}
          <SaveButton
            name="saveButton"
            // onClick={handleSaveFacilities}
            // disabled={loading}
          >
            Simpan
          </SaveButton>
        </div>

        <Input
          label="Nama Acara"
          placeholder="Masukkan nama acara..."
          name="totalPopulation"
          // value={addDataForm.values.villageHeadName}
          // onChange={addDataForm.handleChange}
          // error={
          //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
          // }
          // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
        />

        <div className="flex gap-5">
          <div className="mt-4 w-1/2">
            <h3 className="mb-3 font-semibold text-lg">Tanggal</h3>
            <input
              type="date"
              name="date"
              // value={addDataForm.values.date}
              // onChange={addDataForm.handleChange}
              className="block bg-white text-black w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-[#18CDCA] focus:border-[#18CDCA] custom-time-input"
            />
            {/* {addDataForm.touched.date && addDataForm.errors.date ? (
              <div className="label">
                <span className="label-text-alt text-error -mb-2">
                  {addDataForm.errors.date}
                </span>
              </div>
            ) : null} */}
          </div>
          {/*  */}
          <div className="w-1/2">
            <Input
              label="Lokasi"
              placeholder="Masukkan lokasi..."
              name="headOfFamily"
              // value={addDataForm.values.villageHeadName}
              // onChange={addDataForm.handleChange}
              // error={
              //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
              // }
              // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
