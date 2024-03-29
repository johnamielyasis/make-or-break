import { Typography } from "@/components";

interface ButtonProps {
  variant: "black";
  text: string;
  borderless?: boolean;
  href?: string;
}

export const Button = ({ href, borderless, variant, text }: ButtonProps) => {
  return (
    <>
      {href ? (
        <div className="my-4 w-full cursor-pointer max-w-96">
          <div
            className={`border w-full py-3 px-4 hover:opacity-70 uppercase rounded-custom flex justify-center ${
              variant === "black"
                ? "text-white bg-black"
                : variant === "white"
                  ? "bg-white-400 border-none"
                  : "bg-gray-300 border-none"
            } ${borderless ? "border-none" : ""}`}
          >
            <a href={href}>
              <Typography variant="buttonText">{text}</Typography>
            </a>
          </div>
        </div>
      ) : (
        <button
          className={`border hover:opacity-70 uppercase h-14 max-w-96 rounded-custom ${
            variant === "black"
              ? "text-white bg-black"
              : variant === "white"
                ? "bg-white-400 border-none"
                : "bg-gray-300 border-none"
          } ${borderless ? "border-none" : ""} py-2 px-4`}
        >
          <Typography variant="buttonText">{text}</Typography>
        </button>
      )}
    </>
  );
};
