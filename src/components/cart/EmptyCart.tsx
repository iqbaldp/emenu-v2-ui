import Header from "@/components/home/Header";
import Navigation from "@/components/Navigation";

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container">
        <Header />
        <div className="flex flex-col items-center justify-center flex-1 p-4 mt-20">
          <div className="text-2xl font-bold text-gray-400 mb-4">
            Your cart is empty
          </div>
          <p className="text-gray-500">
            Add some delicious items to get started!
          </p>
        </div>
      </div>
      <Navigation />
    </div>
  );
}