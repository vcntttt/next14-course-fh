import Header from "@/components/navbar/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <Header />
      <div className="mx-2">
        {children}
      </div>
    </div>
  );
}
