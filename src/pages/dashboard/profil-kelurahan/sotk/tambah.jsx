import umkmsApi from "@/api/modules/umkm.api";
import Input from "@/components/layouts/functions/Input";
import SaveButton from "@/components/layouts/functions/SaveButton";
import TextArea from "@/components/layouts/functions/TextArea";
import UploadFileField from "@/components/layouts/functions/UploadFileField";
import DashboardHeader from "@/components/layouts/globals/dashboard-nav/DashboardHeader";
import PreviewImage from "@/components/layouts/PreviewImage";
import { uploadImageToFirebaseStorage } from "@/helpers/firebaseStorageHelper";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function DashboardAddUmkmPage() {
  const router = useRouter();
  const { editUmkmId, editUmkmSlug } = router.query;

  const [imageUpload, setImageUpload] = useState("/image-home-hero.jpg");
  // const [textEditorContent, setTextEditorContent] = useState("");
  //
  const [loadingSave, setLoadingSave] = useState(false);

  const handleCreateUmkm = async ({ values }) => {
    const { response, error } = await umkmsApi.createUmkm({
      name: values.name,
      slug: values.slug,
      priceRange: `Rp. ${values.priceRangeStart} - Rp. ${values.priceRangeEnd}`,
      description: values.description,
      whatsappNumber: values.whatsappNumber,
      imageURL: values.imageURL,
    });
    if (response) {
      toast.success("Data UMKM berhasil dibuat");
      router.push("/dashboard/umkm");
    }
    if (error) {
      toast.error(error.message || "Gagal membuat data UMKM");
    }
  };
  //
  const handleUpdateUmkm = async ({ values, content }) => {
    const { response, error } = await umkmsApi.editUmkm({
      umkmId: editUmkmId,
      type: "umkm",
      title: values.title,
      slug: values.slug,
      status: values.status,
      author: values.author,
      coverImageURL: values.coverImageURL,
      coverDescription: values.coverDescription,
      content,
    });
    if (response) {
      toast.success("Data UMKM berhasil diperbarui");
      router.push("/dashboard/umkm");
    }
    if (error) {
      toast.error(error.message || "Gagal memperbarui data UMKM");
    }
  };

  const dataForm = useFormik({
    initialValues: {
      name: "",
      slug: "",
      priceRangeStart: 0,
      priceRangeEnd: 0,
      description: "",
      whatsappNumber: "",
      imageURL: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Judul harus diisi")
        .min(2, "Judul minimal 2 karakter")
        .max(255, "Judul maksimal 255 karakter")
        .matches(/^(?!\s*$).+/, "Judul tidak boleh hanya berisi spasi")
        .matches(/^(?!\W+$).+/, "Judul tidak boleh hanya karakter spesial")
        // Judul tidak boleh ada "&" karena akan merusak URL
        .test(
          "no-ampersand",
          "Judul tidak boleh mengandung karakter '&'",
          (value) => {
            return !value || !value.includes("&");
          }
        ),
      slug: Yup.string().required("Slug harus diisi"),
      priceRangeStart: Yup.number().required("Rentang harga mulai harus diisi"),
      priceRangeEnd: Yup.number().required("Rentang harga akhir harus diisi"),
      description: Yup.string().required("Deskripsi UMKM harus diisi"),
      whatsappNumber: Yup.string().required(
        "Nomor telepon penjual harus diisi"
      ),
    }),
    onSubmit: async (values) => {
      if (loadingSave) return;
      // if (textEditorContent === "") {
      //   toast.error("Konten umkm tidak boleh kosong");
      //   return;
      // }

      setLoadingSave(true);
      if (imageUpload) {
        try {
          const imageUploadUrl = await uploadImageToFirebaseStorage({
            storageFolderName: "umkm_images/cover",
            image: imageUpload,
          });
          values.coverImageURL = imageUploadUrl;
        } catch (error) {
          toast.error(
            "Terjadi kesalahan saat mengupload gambar. Silahkan coba lagi"
          );
          setLoadingSave(false);
          return;
        }
      }

      try {
        if (!editUmkmId && !editUmkmSlug) {
          // CREATE MODE
          await handleCreateUmkm({
            values,
          });
        } else {
          // EDIT MODE
          await handleUpdateUmkm({
            values,
            content: textEditorContent,
            imageUpload,
          });
        }
      } finally {
        setLoadingSave(false);
      }
    },
  });

  // SLUG GENERATOR
  useEffect(() => {
    const name = dataForm.values.name;
    const nameToSlug = name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    dataForm.setFieldValue("slug", nameToSlug);
  }, [dataForm.values.name]);

  // EDIT MODE
  const fetchExistingData = async () => {
    const { response, error } = await umkmsApi.getUmkmBySlug({
      slug: editUmkmSlug,
    });
    if (response) {
      dataForm.setValues({
        title: response.title,
        slug: response.slug,
        status: response.status,
        author: response.author,
        coverImageURL: response.coverImageURL,
        coverDescription: response.coverDescription,
      });
    }
    if (error) {
      toast.error(error.message);
    }
  };
  //
  useEffect(() => {
    if (editUmkmId && editUmkmSlug) fetchExistingData();
  }, [editUmkmId, editUmkmSlug]);

  return (
    <div className="h-full overflow-hidden">
      <DashboardHeader>UMKM</DashboardHeader>

      <div className="px-10 pb-16 h-full">
        <div className="pt-4 flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="font-bold text-2xl">
            Form Struktur Organisasi dan Tata Kerja
          </h2>
          {/*  */}
          <SaveButton
            name="saveButton"
            onClick={() => {
              dataForm.handleSubmit();
            }}
            disabled={loadingSave}
          >
            Simpan
          </SaveButton>
        </div>

        <div className="flex gap-5">
          <div className="w-1/2">
            <Input
              label="Nama UMKM"
              placeholder="Masukkan nama UMKM..."
              name="name"
              value={dataForm.values.name}
              onChange={dataForm.handleChange}
              error={
                dataForm.touched.name && dataForm.errors.name !== undefined
              }
              helperText={dataForm.touched.name && dataForm.errors.name}
            />
          </div>
          {/*  */}
          <div className="w-1/2">
            <Input
              label="Nomor Telepon"
              placeholder="Masukkan nomor telepon..."
              name="whatsappNumber"
              value={dataForm.values.whatsappNumber}
              onChange={dataForm.handleChange}
              error={
                dataForm.touched.whatsappNumber &&
                dataForm.errors.whatsappNumber !== undefined
              }
              helperText={
                dataForm.touched.whatsappNumber &&
                dataForm.errors.whatsappNumber
              }
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-1/2">
            <UploadFileField
              name="villageHeadPhoto"
              label="Foto Kepala Kelurahan"
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
            />
          </div>
          <div className="w-1/2">
            <PreviewImage
              image={
                imageUpload && imageUpload instanceof File
                  ? URL.createObjectURL(imageUpload)
                  : imageUpload
              }
              alt={dataForm.values.villageHeadName}
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}
