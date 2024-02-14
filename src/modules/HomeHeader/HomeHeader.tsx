import { Typography } from "@/components";

export const HomeHeader = () => {
  return (
    <>
      <div
        className="w-full min-h-96 flex flex-col justify-center"
        style={{
          backgroundImage: "url('/home/header-image.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex flex-col justify-between p-5">
          <img
            src="/home/logo.svg"
            alt="make or break logo"
            className="h-4 w-auto mb-10"
          />
          <Typography variant="copy">
            {" "}
            A game where every decision counts on the journey to find love!
            Navigate through a series of intriguing questions to discover more
            about each other and the connection you may or may not share.
          </Typography>
        </div>
      </div>
    </>
  );
};
