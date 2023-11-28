"use client";
import React, { FC, useState } from "react";
interface IProps {
  onSearched: (e: string) => void;
}

const Index: FC<IProps> = ({ onSearched }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <header
        className={
          "w-full py-5 px-5  bg-white sticky top-0 left-0 shadow-md z-50 "
        }
      >
        <nav className="flex justify-between items-center container" >
          <span className="">Shop Island</span>
          <div className="">
            <input
              type="text"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              className=""
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Index;
