import clsx from "clsx";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

interface LinkBtnProps {
  name: string;
  href: string;
  pathname: string;
}

const LinkBtn = ({ name, href, pathname }: LinkBtnProps) => {
  const isPathnameValid = typeof pathname === "string";

  return (
    <Link
      key={name}
      href={href}
      className={
        href !== "/"
          ? isPathnameValid && pathname.includes(href)
            ? styles.clicked
            : styles.nonClick
          : pathname === href
          ? styles.clicked
          : styles.nonClick
      }
    >
      <p className="hidden md:block">{name}</p>
    </Link>
  );
};

export default LinkBtn;
