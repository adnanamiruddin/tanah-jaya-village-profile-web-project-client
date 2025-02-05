import SaveButton from "@/components/layouts/functions/SaveButton";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";
import TextEditor from "@/components/layouts/TextEditor";

export default function DashboardVissionAndMissionPage() {
  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>VISI DAN MISI</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">Konten Visi dan Misi</h2>
          {/*  */}
          <SaveButton
            name="saveButton"
            // onClick={handleSaveFacilities}
            // disabled={loading}
          >
            Simpan
          </SaveButton>
        </div>

        <div className="flex gap-5">
          <div className="mt-4 overflow-x-auto">
            <TextEditor
              id="vissionTextEditor"
              label="Visi"
              // content={content}
              // setContent={setContent}
            />
          </div>

          <div className="mt-4 overflow-x-auto">
            <TextEditor
              id="missionTextEditor"
              label="Misi"
              // content={content}
              // setContent={setContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
