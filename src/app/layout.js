import { Cinzel, Inter } from "next/font/google"; // 1. Kita impor fontnya
import "./globals.css";

// 2. Kita setting font utamanya (Cinzel buat judul biar sangar)
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata = {
  title: "Sumatera Culture Fest",
  description: "Menjelajahi keindahan budaya Pulau Emas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. Kita pasang class fontnya di body biar bisa dipanggil di mana aja */}
      <body className={`${cinzel.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}