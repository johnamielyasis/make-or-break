import { GiHamburgerMenu } from "react-icons/gi";
export const Nav = () => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
      <div className="fixed left-0 top-0 flex w-full justify-end bg-white p-5">
        <GiHamburgerMenu size={25} style={{ color: "black" }} />
      </div>
    </div>
  );
};
