import { LuHome } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
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
            content={<LuClipboardEdit className={styles.iconStyle} />}
            to="/newTransaction"
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
