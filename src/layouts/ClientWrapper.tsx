"use client";

import { RecoilRoot } from "recoil";
import React from "react";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default ClientWrapper;
