import { Dispatch } from "react";

export const toggler = (state: boolean, setter: Dispatch<boolean>) => {
  let newState = !state;
  setter(newState);
};
