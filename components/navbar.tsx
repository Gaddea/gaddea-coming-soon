import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <React.Fragment>
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
        </NavbarContent>
      </NextUINavbar>

      {/* Add the following style to the container of your main content */}
      <div style={{ marginTop: "-4rem" }}>
        {/* Your main content goes here */}
      </div>
    </React.Fragment>
  );
};
