import { LuHome } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";
import { LuClipboardX } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import Anchor from "../Button/Anchor";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navStyle}>
      <li>
        <ul>
          <Anchor
            content={<LuHome className={styles.iconStyle} />}
            to="/feed"
          />
        </ul>
        <ul>
          <Anchor
            content={<LuClipboardCheck className={styles.iconStyle} />}
            to="/newIncome"
          />
        </ul>
        <ul>
          <Anchor
            content={<LuClipboardX className={styles.iconStyle} />}
            to="/newExpense"
          />
        </ul>
        <ul>
          <Anchor
            content={<LuUser className={styles.iconStyle} />}
            to="/profile"
          />
        </ul>
      </li>
    </nav>
  );
};

export default Nav;
