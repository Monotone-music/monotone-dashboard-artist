
import styles from "./styles.module.scss";
import TableData from "@/shared/components/applicationStatus/page";


const LabelStatus = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          Application Status
        </div>
        <div className={styles['table-wrapper']}>
      <TableData />
      </div>
    </div>
  );
};

export default LabelStatus;
