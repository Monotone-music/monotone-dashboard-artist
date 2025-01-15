import styles from "./styles.module.scss";
import SideBtn from "./sideBtn/SideBtn";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaFileAudio, FaFileSignature, FaUser } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import LogoutButton from "../logoutButton/LogoutButton";

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <span>Monotone</span>
          <span>
            Studio <span className={styles.role}>artist</span>
          </span>
        </div>

        <div className={styles["list-wrapper"]}>
          <SideBtn
            icon={RiDashboardHorizontalFill}
            iconHovered={RiDashboardHorizontalFill}
            title="Overview"
            to="/artist/overview"
          />
          <SideBtn
            icon={FaFileAudio}
            iconHovered={FaFileAudio}
            title="Upload"
            to="/artist/uploader"
          />
           <SideBtn
            icon={FaUser}
            iconHovered={FaUser}
            title="Track Manager"
            to="/artist/manager"
          />
               <SideBtn
            icon={FaFileSignature }
            iconHovered={FaFileSignature}
            title="Apply to Label"
            to="/artist/apply-label"
          />
                <SideBtn
            icon={MdPendingActions }
            iconHovered={MdPendingActions}
            title="Application Status"
            to="/artist/status-label"
          />
                     <SideBtn
            icon={FaUser }
            iconHovered={FaUser}
            title="Profile"
            to="/artist/profile"
          />
        </div>
      </div>
      <div className={styles.bottom}>

        <div className={styles["list-wrapper"]}>
          <LogoutButton
            icon={FiLogOut}
            iconHovered={FiLogOut}
            title="Logout"
            to="/auth/sign-in"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
