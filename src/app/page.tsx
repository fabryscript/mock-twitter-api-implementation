import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link href={"/profiles"}>
        <button className="rounded-2xl bg-gray-900 px-6 py-4 transition-all duration-300 hover:bg-gray-800 active:scale-95 active:bg-gray-700">
          Show profiles
        </button>
      </Link>
    </div>
  );
}
