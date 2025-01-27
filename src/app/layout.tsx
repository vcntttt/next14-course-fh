import type { Metadata } from "next";
import { Doppio_One } from "next/font/google";
import "@/app/globals.css";
// import { ThemeProvider } from "@/components/theme-provider";

const doppioOne = Doppio_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Data Fetching",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased ${doppioOne.className}`}>
        <div>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          > */}
        {children}
        {/* </ThemeProvider> */}
        </div>
      </body>
    </html>
  );
}
