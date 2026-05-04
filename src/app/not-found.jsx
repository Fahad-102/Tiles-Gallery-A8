import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-amber-950">404</h1>
      <p className="text-xl mt-3">Page Not Found</p>

      <Link
        href="/"
        className="mt-5 px-6 py-2 bg-amber-950 text-white rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}