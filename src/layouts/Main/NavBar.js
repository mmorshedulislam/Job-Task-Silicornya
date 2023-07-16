import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-auto border-b border-b-[#C0C0C0]">
      <div className="p-3 w-3/5 mx-auto max-w-7xl flex items-center gap-x-2">
        <div className="w-[17px] h-[17px] bg-gradient-to-t from-[#17EAD9] to-[#6078EA] rotate-45"></div>
        <Link className="font-bold text-xl" to={"/"}>
          Job Task
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
