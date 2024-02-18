"use client";

import Link from "next/link";
import Image from "next/image";
import headerClasses from "./main-header.module.css";
import logoImg from "../assets/logo.png";
import HeaderBg from "./headerBg";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();

  return (
    <>
      <HeaderBg />
      <div className={headerClasses.header}>
        <Link className={headerClasses.logo} href="/">
          <Image src={logoImg} alt="logoimg" priority />
          NextLevel Food
        </Link>
        <nav className={headerClasses.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals") ? headerClasses.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={
                  path.startsWith("/community")
                    ? headerClasses.active
                    : undefined
                }
              >
                Foddies Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainHeader;
