import { Navbar } from "../components/Navbar/Navbar";
import React from "react";

interface AppLayoutProps {
    children: React.ReactNode;
    
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      {
        children
      }
    </>
  );
};
