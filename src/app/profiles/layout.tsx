import Navigation from "@/components/Navigation";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = ["nabla_hq", "osmosiszone", "GenshinImpact"];

  return (
    <div className="">
      <div className="flex flex-col items-center gap-1 p-4">
        <h1 className="text-3xl font-bold">X Mock API with caching</h1>
        <div className="border-b border-gray-700 text-center text-sm font-medium text-gray-400">
          <Navigation routes={routes} />
        </div>
      </div>
      {children}
    </div>
  );
}