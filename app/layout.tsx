import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Migrant Gestión",
  description: "Landing page para gestión de migrantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
