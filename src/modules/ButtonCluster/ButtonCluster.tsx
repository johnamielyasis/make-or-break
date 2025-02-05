"use client";
import { Button, Typography } from "@/components";
import { useState, useEffect, useRef } from "react";

interface ButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
}

interface ButtonClusterProps {
  isStyled?: boolean;
  buttons: ButtonProps[];
  type?: string;
  styledVariant?: boolean;
  radio?: boolean;
}

export const ButtonCluster = ({
  isStyled,
  buttons,
  radio,
}: ButtonClusterProps) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const buttonClusterRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (index: number, onClick?: () => void) => {
    if (radio) {
      setSelectedButton(index);
    }
    if (onClick) {
      onClick();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonClusterRef.current &&
      !buttonClusterRef.current.contains(event.target as Node)
    ) {
      setSelectedButton(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isStyled ? (
        <div ref={buttonClusterRef} className="flex flex-col items-center">
          {buttons.map((b, i) => (
            <span key={i} className="w-full my-1 text-center">
              <Button
                variant="styled"
                text={b.title}
                onClick={() => handleButtonClick(i, b.onClick)}
                isClicked={radio ? selectedButton === i : undefined}
              />
            </span>
          ))}
        </div>
      ) : (
        <div ref={buttonClusterRef} className="flex flex-col items-end">
          {buttons.map((b, i) => (
            <div className="my-2" key={i}>
              <a href={b.href}>
                <Typography className="uppercase">{b.title}</Typography>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
