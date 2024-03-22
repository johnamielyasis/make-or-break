"use client";
import { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Typography } from "@/components";
import { ButtonCluster } from "@/modules";
import { toggler } from "@/utils/helper";

const buttonClusterArray = [
  { title: "home", href: "" },
  { title: "play", href: "" },
  { title: "community", href: "" },
  { title: "submit a question", href: "" },
];
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
            <div>
              <ButtonCluster buttons={buttonClusterArray} />
            </div>
            <div>
              <Image
                src="/home/logo.svg"
                alt="make or break logo"
                width={160}
                height={28}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
