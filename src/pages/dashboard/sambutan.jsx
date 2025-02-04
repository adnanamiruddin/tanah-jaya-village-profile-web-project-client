import Input from "@/components/layouts/functions/Input";
import SaveButton from "@/components/layouts/functions/SaveButton";
import UploadFileField from "@/components/layouts/functions/UploadFileField";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";
import TextEditor from "@/components/layouts/TextEditor";

export default function DashboardGreetingPage() {
  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>SAMBUTAN</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">Konten Sambutan</h2>
          {/*  */}
          <SaveButton
            name="saveFacilitiesButton"
            // onClick={handleSaveFacilities}
            // disabled={loading}
          >
            Simpan
          </SaveButton>
        </div>

        <div className="flex gap-5">
          <div className="w-1/2">
            <Input
              label="Nama Kepala Kelurahan"
              placeholder="Masukkan nama kepala kelurahan..."
              name="villageHeadName"
              // value={addDataForm.values.villageHeadName}
              // onChange={addDataForm.handleChange}
              // error={
              //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
              // }
              // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
            />
          </div>

          <div className="w-1/2">
            <UploadFileField
              name="villageHeadPhoto"
              label="Upload Foto"
              // onChange={(e) => {
              //   setImageUpload(e.target.files[0]);
              // }}
            />
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <TextEditor
            id="facilitiesTextEditor"
            label="Isi Sambutan"
            // content={content}
            // setContent={setContent}
          />
        </div>
      </div>
    </div>
  );
}
