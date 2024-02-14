import { GiHamburgerMenu } from "react-icons/gi";
export const Nav = () => {
  return (
    <div className="fixed left-0 top-0 flex w-full justify-end bg-white p-5">
      <GiHamburgerMenu size={32} style={{ color: "black" }} />
    </div>
  );
};
