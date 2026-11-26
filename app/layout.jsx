import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "ClimaPro | Instalación y Service de Aires Acondicionados",
  description:
    "Instalación, carga de gas y mantenimiento de aires acondicionados Split e Inverter con garantía escrita.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${jakarta.className} antialiased`}>{children}</body>
    </html>
  );
}