import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">
        <button className="border border-black mt-4 rounded p-1">Show Properties</button>
      </Link>
    </div>
  );
};

export default HomePage;
