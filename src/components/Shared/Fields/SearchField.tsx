"use client";
import React, { useState } from "react";

const SearchField = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        className="w-full p-2 bg-[#f2f2f2] rounded-md outline-none border-none shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] text-neutral-500"
        placeholder="search"
      />
    </>
  );
};

export default SearchField;
