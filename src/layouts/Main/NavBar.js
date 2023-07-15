import React from "react";

const NavBar = () => {
  return (
    <div className="mx-auto border-b border-b-black">
      <div className="p-3 w-3/5 mx-auto max-w-7xl flex items-center gap-x-2">
        <div className="w-[17px] h-[17px] bg-gradient-to-t from-[#17EAD9] to-[#6078EA] rotate-45"></div>
        <h2 className="font-bold text-xl">Job Task</h2>
      </div>
    </div>
  );
};

export default NavBar;
