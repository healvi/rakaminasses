import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-[24px] py-2.5 rounded bg-neutral">
        <div className="container flex flex-wrap items-center">
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white mr-[10px]">
            Product Roadmap
          </span>
          <button
            type="button"
            className="text-xs leading-5 focus:outline-none text-neutral bg-success focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-[16px] py-[4px]"
          >
            + Add New Group
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
