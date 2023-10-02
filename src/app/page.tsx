import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={"/profiles"}>Show profiles</Link>
    </div>
  );
}
