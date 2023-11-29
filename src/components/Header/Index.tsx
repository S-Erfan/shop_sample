import React, { FC, useEffect, useState } from "react";
import SearchField from "../Shared/Fields/SearchField";
interface HeaderProps {
  searchFunc?: (e: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchFunc }) => {
  return (
    <>
      <header
        className={
          "w-full py-5 px-5  bg-white sticky top-0 left-0 shadow-md z-50 "
        }
      >
        <nav className="flex justify-between items-center container" >
          <span className="">Shop Island</span>
          <div className="md:min-w-[300px]">
            <SearchField />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
