import { uploadImageToFirebaseStorage } from "@/helpers/firebaseStorageHelper";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextEditor({ id, label, content, setContent }) {
  // Fungsi untuk menangani gambar yang diunggah ke editor
  const handleImageUpload = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const uploadImageUrl = await uploadImageToFirebaseStorage({
        storageFolderName: "village_head_photo",
        uploadImage: file,
      });

      // Tambahkan URL gambar ke dalam editor
      const quill = document.querySelector(".ql-editor");
      const range = quill.getSelection(true);
      quill.insertEmbed(range.index, "image", uploadImageUrl);
    };
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ align: [] }],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    // handlers: {
    //   image: handleImageUpload,
    // },
  };

  return (
    <div>
      <h3 className="mb-3 font-semibold text-lg">{label}</h3>

      <ReactQuill
        id={id}
        theme="snow"
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
        placeholder="Ketik di sini..."
        modules={modules}
        onChange={setContent}
        value={content}
      />

      {/* <div>
        <h2 className="text-xl font-bold flex justify-center mt-8">Preview</h2>
        <div
          className="sanitized-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div> */}
    </div>
  );
}
