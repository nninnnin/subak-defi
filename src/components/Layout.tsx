import React from "react";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
