import Input from "@/components/layouts/functions/Input";
import SaveButton from "@/components/layouts/functions/SaveButton";
import TextArea from "@/components/layouts/functions/TextArea";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";

export default function DashboardAddUmkmPage() {
  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>UMKM</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">
            Form Usaha Mikro Kecil Menangah (UMKM)
          </h2>
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
          <div className="w-1/2">
            <Input
              label="Nama UMKM"
              placeholder="Masukkan nama UMKM..."
              name="totalPopulation"
              // value={addDataForm.values.villageHeadName}
              // onChange={addDataForm.handleChange}
              // error={
              //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
              // }
              // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
            />
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

        <div className="flex gap-5">
          <div className="w-1/2">
            <Input
              label="Kisaran Harga (Mulai)"
              placeholder="Masukkan kisaran harga..."
              type="number"
              name="headOfFamily"
              // value={addDataForm.values.villageHeadName}
              // onChange={addDataForm.handleChange}
              // error={
              //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
              // }
              // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
            />
          </div>
          {/*  */}
          <div className="w-1/2">
            <Input
              label="Kisaran Harga (Sampai)"
              placeholder="Masukkan kisaran harga..."
              type="number"
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

        <Input
          label="Nomor Telepon"
          placeholder="Masukkan nomor telepon..."
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
          placeholder="Masukkan deskripsi..."
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
  );
}
