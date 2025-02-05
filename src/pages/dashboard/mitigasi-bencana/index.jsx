import SaveButton from "@/components/layouts/functions/SaveButton";
import UploadFileField from "@/components/layouts/functions/UploadFileField";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";
import PreviewImage from "@/components/layouts/PreviewImage";
import TextEditor from "@/components/layouts/TextEditor";
import { useState } from "react";

export default function DashboardDisasterMitigationPage() {
  const [coverImage, setCoverImage] = useState(null);

  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>MITIGASI BENCANA</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">Konten Spot Mitigasi bencana</h2>
          {/*  */}
          <SaveButton
            name="saveButton"
            // onClick={handleSaveFacilities}
            // disabled={loading}
          >
            Simpan
          </SaveButton>
        </div>

        <div className="w-full">
          <UploadFileField
            label="Sampul"
            onChange={(e) => {
              setCoverImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {/*  */}
          <PreviewImage image={coverImage} alt="Sampul" fullWidth />
        </div>

        <div className="mt-4 overflow-x-auto">
          <TextEditor
            label="Isi Konten"
            // content={content}
            // setContent={setContent}
          />
        </div>
      </div>
    </div>
  );
}
