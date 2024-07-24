import { LuHome } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";
import { LuClipboardX } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import Anchor from "../Button/Anchor";
import styles from "./Nav.module.css";
import React from "react";

const navItems = [
  { icon: <LuHome className={styles.iconStyle} />, to: "/feed" },
  { icon: <LuClipboardCheck className={styles.iconStyle} />, to: "/newIncome" },
  { icon: <LuClipboardX className={styles.iconStyle} />, to: "/newExpense" },
  { icon: <LuUser className={styles.iconStyle} />, to: "/profile" },
];

const Nav = () => {
  return (
    <nav className={styles.navStyle}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Anchor content={item.icon} to={item.to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
