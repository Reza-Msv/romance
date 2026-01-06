const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          ☕
        </div>
      </div>

      <h2 className="mt-4 text-xl font-bold text-amber-900 animate-pulse">
        در حال بارگذاری منوی خوشمزه...
      </h2>

      <div className="w-full max-w-md mt-8 px-4 space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 bg-amber-100 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
