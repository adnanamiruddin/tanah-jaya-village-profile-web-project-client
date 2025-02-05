import Input from "@/components/layouts/functions/Input";
import SaveButton from "@/components/layouts/functions/SaveButton";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";

export default function DashboardInfographicsPage() {
  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>INFOGRAFIS</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">Konten Infografis</h2>
          {/*  */}
          <SaveButton
            name="saveButton"
            // onClick={handleSaveFacilities}
            // disabled={loading}
          >
            Simpan
          </SaveButton>
        </div>

        <div className="border-b-2 border-gray-400 pb-6">
          <h3 className="mt-4 font-semibold text-2xl">
            Data Administrasi Kependudukan
          </h3>

          <div className="flex gap-5">
            <div className="w-1/2">
              <Input
                label="Jumlah Penduduk"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Kepala Keluarga"
                placeholder="Masukkan kepala keluarga..."
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
                label="Jumlah Laki-Laki"
                placeholder="Masukkan jumlah laki-laki..."
                name="totalMale"
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
                label="Jumlah Perempuan"
                placeholder="Masukkan jumlah perempuan..."
                name="totalFemale"
                // value={addDataForm.values.villageHeadName}
                // onChange={addDataForm.handleChange}
                // error={
                //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
                // }
                // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
              />
            </div>
          </div>

          <div className="w-1/2">
            <Input
              disabled
              label="Jumlah Lingkungan"
              placeholder="Masukkan jumlah lingkungan..."
              name="totalNeighborhood"
              // value={addDataForm.values.villageHeadName}
              // onChange={addDataForm.handleChange}
              // error={
              //   addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName !== undefined
              // }
              // helperText={addDataForm.touched.villageHeadName && addDataForm.errors.villageHeadName}
            />
          </div>
        </div>

        <div className="border-b-2 border-gray-400 pb-6">
          <h3 className="mt-6 font-semibold text-2xl">
            Data Distribusi Penduduk per Lingkungan
          </h3>

          <div className="flex gap-5">
            <div className="w-1/2">
              <Input
                label="Daloba (Laki-Laki)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Daloba (Perempuan)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Kassi (Laki-Laki)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Kassi (Perempuan)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Jalaya (Laki-Laki)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Jalaya (Perempuan)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Barang (Laki-Laki)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Barang (Perempuan)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Na'nasaya (Laki-Laki)"
                placeholder="Masukkan jumlah penduduk..."
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
                label="Na'nasaya (Perempuan)"
                placeholder="Masukkan jumlah penduduk..."
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

        <div className="border-b-2 border-gray-400 pb-6">
          <h3 className="mt-6 font-semibold text-2xl">Jumlah Bangunan</h3>

          <div className="flex gap-5">
            <div className="w-1/2">
              <Input
                label="TK"
                placeholder="Masukkan jumlah TK..."
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
                label="SD"
                placeholder="Masukkan jumlah SD..."
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
                label="SMP/MTs"
                placeholder="Masukkan jumlah SMP/MTs..."
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
                label="SMK"
                placeholder="Masukkan jumlah SMK..."
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
                label="Masjid"
                placeholder="Masukkan jumlah masjid..."
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
                label="Puskesmas"
                placeholder="Masukkan jumlah puskesmas..."
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

          <div className="w-1/2">
            <Input
              label="Posyandu"
              placeholder="Masukkan jumlah posyandu..."
              name="totalPopulation"
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
