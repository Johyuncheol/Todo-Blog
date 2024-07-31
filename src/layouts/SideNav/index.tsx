"use client";
import Link from "next/link";
import styles from "./index.module.css";
import Button from "@/components/common/button/NormalBtn";
import LinkBtn from "@/components/common/button/LinkBtn";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Todo List", href: "/todolist" },
    {
      name: "Blog",
      href: "/Blog",
    },
  ];

  const signOut = () => {};
  return (
    <nav className={styles.mainNav}>
      {/* title */}
      <Link className={styles.mainLink} href="/">
        <div className={styles.title}>TITLE</div>
      </Link>

      {/* options */}
      <div className={styles.optionLink}>
        {links.map((link) => {
          return (
            <LinkBtn
              key={link.name}
              name={link.name}
              href={link.href}
              pathname={pathname}
            />
          );
        })}
        <div className={styles.empty}></div>
        <form
/*           action={async () => {
              "use server";
             await signOut();
          }} */
        >
          <Button fnc={() => signOut()}>
            <div className="hidden md:block">Sign Out</div>
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default SideNav;
