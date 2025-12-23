"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import ResponsiveMenu from "../ResponsiveMenu";
import BackToTopFloating from "./TopFloating";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <ResponsiveMenu open={open} setOpen={setOpen} />
      <BackToTopFloating menuOpen={open} />
    </>
  );
}
