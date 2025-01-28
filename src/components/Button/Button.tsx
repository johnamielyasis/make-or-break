"use client";
import { Typography } from "@/components";
import { useEffect, useRef } from "react";

type ButtonVariant = "black" | "styled" | "white";

interface ButtonProps {
  variant: ButtonVariant;
  text: string;
  borderless?: boolean;
  href?: string;
  isClicked?: boolean;
  onClick?: () => void;
}

export const Button = ({
  href,
  borderless,
  variant,
  text,
  isClicked,
  onClick,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && isClicked) {
      buttonRef.current.focus();
      console.log("focus", buttonRef.current.focus());
      console.log("why isnt this firing");
    }
  }, [isClicked]);

  const getButtonClass = () => {
    switch (variant) {
      case "black":
        return "text-white bg-black";
      case "white":
        return "bg-white-400 border-none";
      case "styled":
        return "bg-[rgba(255,255,255,0.75)] border-[6px] border-solid border-[rgba(255,255,255,0.25)]";
      default:
        return "bg-gray-300 border-none";
    }
  };

  return (
    <>
      {href ? (
        <div className="my-4 w-full cursor-pointer max-w-96">
          <div
            className={`border w-full py-3 px-4 hover:opacity-70 uppercase rounded-custom flex justify-center ${getButtonClass()} ${
              borderless ? "border-none" : ""
            }`}
          >
            <a href={href}>
              <Typography variant="buttonText">{text}</Typography>
            </a>
          </div>
        </div>
      ) : isClicked ? (
        <button ref={buttonRef}>
          <Typography variant="buttonText">{text}clicked</Typography>
        </button>
      ) : (
        <button
          ref={buttonRef}
          className={`rounded-custom uppercase h-14 max-w-96  w-full  ${
            borderless ? "border-none" : ""
          } py-2 px-4 bg-clip-padding ${getButtonClass()}`}
          onClick={onClick}
        >
          <Typography variant="buttonText">{text}</Typography>
        </button>
      )}
    </>
  );
};
