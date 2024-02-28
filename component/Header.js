import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }
  return (
    <>
      <div className="headermain">
        <div className="brandLogo">
          <Link href="/">
            {/* <Image src="./images/tactiti.svg" height="70" width="160" alt="" /> */}
            <img src="/images/tactiti.svg" alt="logo" height="70" width="160"  />

          </Link>
        </div>
        <div className="LinkBox">
          <Link href="/about-us/">About Us</Link>
          <Link href="/our-services/">Our Services</Link>
          <Link href="/manufacturing-industries/">Industries</Link>
          <Link href="/case-studies/">Case Studies</Link>
          <Link href="/contact-us/">Contact Us</Link>
        </div>
        <div className="drawerToggle">
          <Image
            src="./images/bars.svg"
            height="25"
            width="25"
            alt=""
            className="threeBars"
            onClick={toggleDrawer}
          />
        </div>
        <div
          className={`drawer ${isDrawerOpen ? "open" : ""}`}
          onClick={toggleDrawer}
        >
          <div className="drawerContent">
            <div className="crossBtnRight">
              <Image
                src="./images/cross.svg"
                height="30"
                width="30"
                alt=""
                className="crossbtn"
                onClick={toggleDrawer}
              />
            </div>
            <Link href="/about-us/">About Us</Link>
            <Link href="/our-services/">Our Services</Link>
            <Link href="/manufacturing-industries/">Industries</Link>
            <Link href="/case-studies/">Case Studies</Link>
            <Link href="/contact-us/">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
}



