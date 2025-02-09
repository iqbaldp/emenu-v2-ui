import Header from "@/components/home/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="flex flex-col items-center justify-center flex-1 p-4 mt-16">
          <div className="w-32 h-32 mb-8 text-[#ff6b35] opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full animate-pulse"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M7 8v8h10V8H7zm8 6H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z" />
              <path d="M8 7h2v10H8zm6 0h2v10h-2z" />
              <path d="M12 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Piring Masih Kosong!
          </h2>
          <p className="text-gray-500 text-lg mb-8 text-center max-w-sm">
            Belum ada menu yang dipilih. <br /> Yuk, pilih hidangan favoritmu!
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-[#ff6b35] text-white rounded-2xl font-semibold text-l hover:bg-[#ff8255] transition-all duration-200 shadow-lg hover:shadow-xl active:transform active:scale-95 gap-2"
          >
            <span>Jelajahi Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Navigation />
    </>
  );
}
