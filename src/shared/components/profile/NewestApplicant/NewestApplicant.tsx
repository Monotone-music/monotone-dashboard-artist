import React from 'react'
import styles from './styles.module.scss'
import TableData from '../../applicationStatus/page'

const NewestApplicant = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Newest Application
        </div>
        <TableData/>
    </div>
  )
}

export default NewestApplicant