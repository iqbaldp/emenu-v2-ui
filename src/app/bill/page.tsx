"use client";

import Navigation from "@/components/Navigation";
import Header from "@/components/home/Header";

export default function BillPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col items-center justify-center p-4 -mt-16">
            <div className="w-32 h-32 mb-8 text-[#ff6b35] opacity-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full animate-pulse"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M12 6c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm0 10c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-700 mb-4 text-center">
              Halaman Dalam Pengembangan
            </h2>
            <p className="text-gray-500 text-lg mb-8 text-center max-w-sm text-center">
              Mohon maaf, halaman ini sedang dalam tahap pengembangan. <br />{" "}
              Silakan kembali lagi nanti!
            </p>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}
