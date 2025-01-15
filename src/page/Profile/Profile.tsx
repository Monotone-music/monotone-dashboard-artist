import InfoContainer from "@/shared/components/profile/InfoContainer/InfoContainer";
import styles from "./styles.module.scss";
import NewestApplicant from "@/shared/components/profile/NewestApplicant/NewestApplicant";
import LaBelBelongContainer from "@/shared/components/profile/LabelBelongContainer/LaBelBelongContainer";
import TrackContainer from "@/shared/components/profile/TrackContainer/TrackContainer";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { getArtistProfile } from "@/service/profileService";
import { PuffLoader } from "react-spinners";

const Profile = () => {
  const {token} = useAuthStore()
  const {data, isLoading, isError} = useQuery({
    queryKey: ['profile', token],
    queryFn :() => getArtistProfile(token!)
  })

console.log(data)
  if(isLoading){
    return (
      <div className={styles['loading-container']}>
        <PuffLoader/>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Profile</div>

      <div className={styles.content}>
        <InfoContainer dataInfo={data}/>
        <div className={styles["wrapper-sub"]}>
          <NewestApplicant />
          <LaBelBelongContainer dataInfo={data} />
        </div>

        <TrackContainer />
      </div>
    </div>
  );
};

export default Profile;
