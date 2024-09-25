import Sidebar from "@/components/dashboard/navigation/sidebar";

export default function DoctorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-4 h-screen overflow-y-scroll">
      <Sidebar/>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
