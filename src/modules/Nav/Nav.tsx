"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
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
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        // Click occurred outside the navigation menu, close the menu
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <>
      <div className="fixed left-0 top-0 flex w-full justify-end bg-white p-5">
        <span onClick={() => toggler(isNavOpen, setIsNavOpen)}>
          <GiHamburgerMenu size={32} style={{ color: "black" }} />
        </span>
      </div>
      <Transition
        show={isNavOpen}
        enter="transition-transform duration-900"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="absolute z-100 min-h-screen top-0 right-0 bg-white w-64 p-6 flex flex-col justify-between items-end drop-shadow-sm opacity-95">
          <button onClick={() => toggler(isNavOpen, setIsNavOpen)}>
            <Typography className="uppercase">menu</Typography>
          </button>
          <div className="opacity-100">
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
      </Transition>
    </>
  );
};
