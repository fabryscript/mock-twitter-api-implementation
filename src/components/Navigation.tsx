"use client";

import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";

function Navigation({ routes }: { routes: string[] }) {
  const pathname = useSelectedLayoutSegment();
  return (
    <ul className="-mb-px flex flex-wrap">
      {routes.map((route) => (
        <li key={route} className="mr-2">
          <Link
            href={`/profiles/${route}`}
            className={`${
              route === pathname ? "activelink" : "unactivelink"
            } hover:activelink inline-block rounded-t-lg border-b-2 border-transparent p-4 transition-all duration-300`}
          >
            @{route}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
