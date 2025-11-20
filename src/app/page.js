// Di file src/app/page.js
import IsometricMap from "./components/IsometricMap"; 
// Pakai ./ (titik satu) artinya "tetangga satu folder" // Import komponen tadi

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-slate-900 to-black overflow-hidden relative">
      
      {/* Judul Website */}
      <div className="absolute top-10 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500 tracking-tight">
          SUMATERA CULTURE FEST
        </h1>
        <p className="text-slate-400 mt-2 text-sm md:text-base">Jelajahi Keunikan Budaya Pulau Emas</p>
      </div>

      {/* Komponen Peta Kita */}
      <IsometricMap />
      
    </main>
  );
}