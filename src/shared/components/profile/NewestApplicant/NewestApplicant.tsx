import React from 'react'
import styles from './styles.module.scss'
import TableData from '../../applicationStatus/page'
import { useLabelRequests } from '@/hooks/useLabelRequests';


const NewestApplicant = () => {
const pendingRequests = useLabelRequests('pending');

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Newest Application
        </div>

        <div className={styles['table-wrapper']}>
        <TableData    
        data={pendingRequests.data} 
              isLoading={pendingRequests.isLoading} />
              </div>
    </div>
  )
}

export default NewestApplicant