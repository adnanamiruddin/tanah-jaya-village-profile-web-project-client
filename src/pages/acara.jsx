import PageHeaderTitle from "@/components/layouts/globals/PageHeaderTitle";
import ScheduleItem from "@/components/layouts/ScheduleItem";

export default function SchedulesPage() {
  return (
    <div className="pb-4 md:px-24 md:mt-12 md:pb-10">
      <PageHeaderTitle
        title="ACARA TANAH JAYA"
        description="Acara terbaru seputar Kelurahan Tanah Jaya"
      />

      <div className="grid grid-cols-1 gap-5 overflow-auto">
        <ScheduleItem
          title="Rapat Kelurahan"
          date="Senin, 12 Agustus 2021"
          location="Kantor Lurah Tanah Jaya"
          fullWidth
        />

        <ScheduleItem
          title="Lomba Volley KKN 113 Tanah Jaya"
          date="Senin, 12 Agustus 2021"
          location="Kantor Lurah Tanah Jaya"
          fullWidth
        />
        <ScheduleItem
          title="Jum'at Bersih Tanah Jaya"
          date="Senin, 12 Agustus 2021"
          location="Kantor Lurah Tanah Jaya"
          fullWidth
        />
        <ScheduleItem
          title="Donor Darah Dalam Rangka 17 Agustus 2025"
          date="Senin, 12 Agustus 2021"
          location="Kantor Lurah Tanah Jaya"
          fullWidth
        />
      </div>
    </div>
  );
}
