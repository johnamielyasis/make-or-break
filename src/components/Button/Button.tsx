"use client";
import { Typography } from "@/components";
import { useEffect, useRef } from "react";

type ButtonVariant =
  | "black"
  | "styled"
  | "white"
  | "gameMake"
  | "gameBreak"
  | "gameSkip";

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
    }
  }, [isClicked]);

  const getButtonClass = () => {
    switch (variant) {
      case "black":
        return "text-white bg-black";
      case "white":
        return "bg-white-400 border-none";
      case "styled":
        return "bg-[rgba(255,255,255,0.90)] border-[6px] border-solid border-[rgba(255,255,255,0.25)]";
      case "gameMake":
        return "bg-blue-500 border-none";
      case "gameBreak":
        return "bg-red-500 border-none";
      case "gameSkip":
        return "bg-yellow-500 border-none";
      default:
        return "bg-gray-300 border-none";
    }
  };

  const getConditionalClasses = () => {
    if (variant === "styled" && isClicked) {
      return "custom-gradient";
    }
    return "";
  };

  return (
    <>
      {href ? (
        <div className="my-4 w-full cursor-pointer max-w-96">
          <div
            className={`border w-full py-3 px-4 hover:opacity-85 uppercase rounded-custom flex justify-center ${getButtonClass()} ${getConditionalClasses()} ${
              borderless ? "border-none" : ""
            }`}
          >
            <a href={href}>
              <Typography variant="buttonText">{text}</Typography>
            </a>
          </div>
        </div>
      ) : isClicked ? (
        <button
          ref={buttonRef}
          className={`relative h-14 w-full max-w-96 rounded-custom styled-border py-2 px-4 ${
            borderless ? "border-none" : ""
          }`}
        >
          <div className="button-content-inner flex items-center justify-center rounded-custom uppercase">
            <Typography variant="buttonText">{text}</Typography>
          </div>
        </button>
      ) : (
        <button
          ref={buttonRef}
          className={`rounded-custom uppercase h-14 max-w-96 w-full ${
            borderless ? "border-none" : ""
          } py-2 px-4 bg-clip-padding ${getButtonClass()} ${getConditionalClasses()}`}
          onClick={onClick}
        >
          <Typography variant="buttonText">{text}</Typography>
        </button>
      )}
    </>
  );
};
