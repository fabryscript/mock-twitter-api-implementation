import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-1 p-4">
      <h1 className="text-3xl font-bold">X Mock API with caching</h1>
      <div className="border-b border-gray-700 text-center text-sm font-medium text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-300"
            >
              @nabla_hq
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="active inline-block rounded-t-lg border-b-2 border-blue-500 p-4 text-blue-500"
              aria-current="page"
            >
              @osmosiszone
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-300"
            >
              @GenshinImpact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
