import React from 'react'
import styles from './styles.module.scss'
import { FaRegBuilding } from 'react-icons/fa6'

const LaBelBelongContainer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
        <div className={styles.title}>
            Sony Entertainment Company
        </div>

        <div className={styles.icon}>
            <FaRegBuilding size={24}/>
        </div>
        </div>

        <div className={styles.bottom}>
        <div className={styles.label}>
            Role
        </div>

        <div className={styles.info}>
            Artist
        </div>
        </div>
    </div>
  )
}

export default LaBelBelongContainer