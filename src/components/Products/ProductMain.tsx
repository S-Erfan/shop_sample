import React from "react";

const ProductMain = () => {
  return (
    <section className="w-full h-full flex flex-col md:flex-row justify-between items-start gap-5 py-5 ">
      <aside className="hidden md:block w-1/4 py-5 px-3 bg-white rounded-lg shadow-lg sticky top-[80px] bottom-0 ">
        <div className="flex flex-col items-start justify-start ">
          <h1 className="text-2xl">filter</h1>
          <h3 className="text-lg">categories:</h3>
          <ul className="w-1/2 gap-5 flex flex-col mt-4 ">
            <li className="w-full bg-neutral-400/60 h-4 rounded-lg animate-pulse "></li>
            <li className="w-full bg-neutral-400/60 h-4 rounded-lg animate-pulse "></li>
            <li className="w-full bg-neutral-400/60 h-4 rounded-lg animate-pulse "></li>
            <li className="w-full bg-neutral-400/60 h-4 rounded-lg animate-pulse "></li>
            <li className="w-full bg-neutral-400/60 h-4 rounded-lg animate-pulse "></li>
          </ul>
        </div>
      </aside>
      <aside className="w-full px-5 py-2 md:hidden flex justify-start items-center gap-4 ">
        <div className="inline">filter</div>
        <div className="flex-1 overflow-x-scroll w-full">
          <div className="w-fit flex justify-start items-center gap-3">
            {[1, 2, 3, 4, 5].map((it) => (
              <div
                className="bg-neutral-400/60 h-6 rounded-lg animate-pulse w-[85px]"
                key={it}
              ></div>
            ))}
          </div>
        </div>
      </aside>
      <section className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-5">
        <div className="flex justify-start flex-wrap items-center -m-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="p-3 w-full sm:w-1/2 lg:w-1/3 h-[380px] " key={i}>
              <div className="w-full h-full rounded-lg bg-stone-400 shadow-md"></div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProductMain;
