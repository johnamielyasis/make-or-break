"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Typography } from "@/components";
import { toggler } from "@/utils/helper";

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="fixed left-0 top-0 flex w-full justify-end bg-white p-5">
        <span onClick={() => toggler(isNavOpen, setIsNavOpen)}>
          <GiHamburgerMenu size={32} style={{ color: "black" }} />
        </span>
      </div>
      {isNavOpen ? (
        <div
          className="fixed h-full w-full bg-black bg-opacity-80"
          onClick={() => toggler(isNavOpen, setIsNavOpen)}
        >
          <div className="absolute right-0 top-0 h-full bg-white w-64 opacity-100 p-6 flex flex-col justify-between items-end">
            <Typography className="uppercase">menu</Typography>
            <div>cluster</div>
            <div>logor</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
