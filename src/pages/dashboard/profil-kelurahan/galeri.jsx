import Input from "@/components/layouts/functions/Input";
import SaveButton from "@/components/layouts/functions/SaveButton";
import TextArea from "@/components/layouts/functions/TextArea";
import UploadFileField from "@/components/layouts/functions/UploadFileField";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";
import PreviewImage from "@/components/layouts/PreviewImage";
import { useState } from "react";

export default function DashboardGalleryPage() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [image9, setImage9] = useState("");

  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>GALERI</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">Sembilan Foto Ditampilkan</h2>
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
          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 1"
                onChange={(e) => {
                  setImage1(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image1} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 2"
                onChange={(e) => {
                  setImage2(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image2} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 3"
                onChange={(e) => {
                  setImage3(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image3} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 4"
                onChange={(e) => {
                  setImage4(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image4} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 5"
                onChange={(e) => {
                  setImage5(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image5} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 6"
                onChange={(e) => {
                  setImage6(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image6} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 7"
                onChange={(e) => {
                  setImage7(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image7} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 8"
                onChange={(e) => {
                  setImage8(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image8} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1/2">
              <UploadFileField
                label="Foto 9"
                onChange={(e) => {
                  setImage9(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <PreviewImage image={image9} />
            </div>
            {/*  */}
            <div className="w-1/2">
              <Input
                label="Judul"
                placeholder="Masukkan judul foto..."
                name="headOfFamily"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
              <TextArea
                rows={5}
                label="Deskripsi"
                placeholder="Masukkan deskripsi foto..."
                name="description"
                // value={addDataForm.values.imageDesc}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.imageDesc &&
                //   addDataForm.errors.imageDesc !== undefined
                // }
                // helperText={
                //   addDataForm.touched.imageDesc && addDataForm.errors.imageDesc
                // }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
