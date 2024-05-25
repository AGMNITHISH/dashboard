import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-72 text-lg font-semibold text-gray-700 font-serif tracking-wide">
      <h2> 404 | Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-red-500 hover:underline">
        Return Dashboard
      </Link>
    </div>
  );
}
