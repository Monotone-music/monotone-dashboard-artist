import styles from "./styles.module.scss";
import img from "../../assets/img/authPageImg3.jpg";
import AuthForm from "@/shared/components/authForm/AuthForm";
import AuthHeading from "@/shared/components/authHeading/AuthHeading";

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["img-wrapper"]}>
        <img src={img} alt="" />
      </div>
      <div className={styles["content-wrapper"]}>
        <AuthHeading role="Artist" />
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
