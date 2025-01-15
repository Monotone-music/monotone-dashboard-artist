import React from 'react'
import styles from './styles.module.scss'
import profileImg from '../../../../assets/img/profile.jpg'

interface InfoContainerProps {
    dataInfo: any;
}

const InfoContainer:React.FC<InfoContainerProps> = ({dataInfo}) => {
  return (
    <div className={styles.container}>
        <div className={styles['img-wrapper']}>
            <img src={profileImg} alt="" />
        </div>
        <div className={styles['info-container']}>
            <div className={styles['row']}>
                <div className={styles.label}>
                    Name
                </div>

                <div className={styles.info}>
                    {dataInfo.name}
                </div>
            </div>
            <div className={styles['row']}>
                <div className={styles.label}>
                    Email
                </div>

                <div className={styles.info}>
                {dataInfo.account.email}
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoContainer