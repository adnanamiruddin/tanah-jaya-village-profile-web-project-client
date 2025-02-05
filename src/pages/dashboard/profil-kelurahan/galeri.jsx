import SaveButton from "@/components/layouts/functions/SaveButton";
import UploadFileField from "@/components/layouts/functions/UploadFileField";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";
import PreviewImage from "@/components/layouts/PreviewImage";
import { useState } from "react";

export default function DashboardGalleryPage() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);

  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>GALERI</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">Sembilan Foto Terpajang</h2>
          {/*  */}
          <SaveButton
            name="saveButton"
            // onClick={handleSaveFacilities}
            // disabled={loading}
          >
            Simpan
          </SaveButton>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-full">
            <UploadFileField
              label="Foto 1"
              onChange={(e) => {
                setImage1(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image1} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 2"
              onChange={(e) => {
                setImage2(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image2} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 3"
              onChange={(e) => {
                setImage3(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image3} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 4"
              onChange={(e) => {
                setImage4(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image4} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 5"
              onChange={(e) => {
                setImage5(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image5} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 6"
              onChange={(e) => {
                setImage6(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image6} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 7"
              onChange={(e) => {
                setImage7(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image7} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 8"
              onChange={(e) => {
                setImage8(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image8} />
          </div>

          <div className="w-full">
            <UploadFileField
              label="Foto 9"
              onChange={(e) => {
                setImage9(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {/*  */}
            <PreviewImage image={image9} />
          </div>
        </div>
      </div>
    </div>
  );
}
