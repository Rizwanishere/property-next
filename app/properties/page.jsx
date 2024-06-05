import React from "react";
import Link from "next/link";

const PropertiesPage = () => {
  return (
    <div>
      <h1 className="text-3xl">PropertiesPage</h1>
      <Link href="/">
        <button className="border border-black mt-4 rounded p-1">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default PropertiesPage;
