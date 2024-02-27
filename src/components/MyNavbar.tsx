"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";

type propsType = {
  className: string;
};
let setActiveProperty = () => {};
const MyNavbar = ({ className }: propsType) => {
  let [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-screen-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActiveProperty}>
        <Link href={"/#"}>
          <MenuItem
            setActive={setActiveProperty}
            active={active}
            item="Home Page"
          >
            <HoveredLink href="/courses">Web Development</HoveredLink>
          </MenuItem>
        </Link>
        <Link href="/hi">
          <MenuItem
            setActive={setActiveProperty}
            active={active}
            item="Our Courses"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">Web Development</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default MyNavbar;
