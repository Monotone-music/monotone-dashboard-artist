import React from 'react'
import styles from './styles.module.scss'
import profileImg from '../../../../assets/img/profile.jpg'

const InfoContainer = () => {
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
                    Nguyen Huynh Minh Khoi
                </div>
            </div>
            <div className={styles['row']}>
                <div className={styles.label}>
                    Email
                </div>

                <div className={styles.info}>
                    test@example.com
                </div>
            </div>
            <div className={styles['row']}>
                <div className={styles.label}>
                    Status
                </div>

                <div className={styles.info}>
                    Activated
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoContainer