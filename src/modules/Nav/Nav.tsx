"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
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
  const [navCenter, setNavCenter] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();
  const router = useRouter();

  useEffect(() => {
    switch (currentPath) {
      case "/play":
        setNavCenter("play: pick a mode");
        break;
      default:
        console.log("switch in nav not working");
    }
  }, [currentPath, navCenter]);

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
    <nav>
      <div className="fixed flex left-0 top-0 w-full p-5 justify-between h-20">
        <span>
          {currentPath !== "/" && (
            <IoIosArrowBack
              size={24}
              style={{
                height: "40px",
              }}
              onClick={() => router.back()}
            />
          )}
        </span>
        <span>
          <Typography className="uppercase">{navCenter}</Typography>
        </span>
        <span onClick={() => toggler(isNavOpen, setIsNavOpen)}>
          <GiHamburgerMenu
            size={32}
            style={{ color: "black", height: "40px" }}
          />
        </span>
      </div>
      <Transition
        show={isNavOpen}
        enter="transition-transform duration-900"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div
          ref={navRef}
          className="absolute z-100 min-h-screen top-0 right-0 w-64 p-6 flex flex-col justify-between items-end shadow-md backdrop-blur-sm bg-white bg-opacity-80"
        >
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
    </nav>
  );
};
