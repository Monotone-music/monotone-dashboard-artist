import InfoContainer from "@/shared/components/profile/InfoContainer/InfoContainer";
import styles from "./styles.module.scss";
import NewestApplicant from "@/shared/components/profile/NewestApplicant/NewestApplicant";
import LaBelBelongContainer from "@/shared/components/profile/LabelBelongContainer/LaBelBelongContainer";
import TrackContainer from "@/shared/components/profile/TrackContainer/TrackContainer";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Profile</div>

      <div className={styles.content}>
        <InfoContainer />
        <div className={styles["wrapper-sub"]}>
          <NewestApplicant />
          <LaBelBelongContainer />
        </div>

        <TrackContainer />
      </div>
    </div>
  );
};

export default Profile;
