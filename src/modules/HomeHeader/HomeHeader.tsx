import { Typography } from "@/components";
import Image from "next/image";

export const HomeHeader = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between p-5">
        <Image
          src="/home/hero.svg"
          alt="make or break logo"
          className="h-5 w-auto"
          height="0"
          width="0"
          style={{ height: "30vh", width: "auto" }}
        />
        <div className="flex justify-center">
          <Typography variant="copy">
            Navigate through a series of intriguing questions to discover more
            about each other and the connection you may or may not share.
          </Typography>
        </div>
      </div>
    </>
  );
};
