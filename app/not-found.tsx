import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 px-4 text-center">
      <div className="text-9xl mb-4">☕</div>

      <h1 className="text-6xl font-bold text-amber-900 mb-2">404</h1>

      <h2 className="text-2xl font-semibold text-amber-800 mb-4">
        اوه! این فنجان خالی است...
      </h2>

      <p className="text-amber-700/80 mb-8 max-w-md">
        صفحه‌ای که به دنبال آن هستید پیدا نشد. شاید آدرس را اشتباه وارد کرده‌اید
        یا این بخش از منو تغییر کرده است.
      </p>

      <Link
        href="/"
        className="px-8 py-3 bg-amber-700 text-white rounded-full font-bold hover:bg-amber-800 transition-colors shadow-lg shadow-amber-900/20"
      >
        بازگشت به منوی کافه
      </Link>
    </div>
  );
};

export default NotFoundPage;
