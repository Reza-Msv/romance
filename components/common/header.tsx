import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex h-16 items-center justify-between px-4 bg-[#4e342e]">
      <div className="flex items-center">
        <button
          aria-label="Open menu"
          className="flex items-center justify-center text-white cursor-pointer"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <h1
        className="text-white text-base font-extrabold absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
        style={{ fontFamily: "Azonix, sans-serif" }}
      >
        Caffe Romance
      </h1>

      <Image
        src="/romace-logo.jpg"
        alt="Caffe Romance Logo"
        width={40}
        height={40}
        className="rounded-full"
        priority
      />
    </header>
  );
}
