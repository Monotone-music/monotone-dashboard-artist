import React from 'react'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query';
import { getPrfileFileName } from '@/service/profileService';
import { useAuthStore } from '@/store/useAuthStore';
import { PuffLoader } from 'react-spinners';

interface InfoContainerProps {
    dataInfo: any;
}

const InfoContainer:React.FC<InfoContainerProps> = ({dataInfo}) => {
    const {token} = useAuthStore()
    const {data, isLoading, isError} = useQuery({
        queryKey: ['profile', token, dataInfo.image.filename],
        queryFn :() => getPrfileFileName(dataInfo.image.filename, token!)
      })
    
  return (
    <div className={styles.container}>
        <div className={styles['img-wrapper']}>
            {isLoading ? <PuffLoader/> :   <img src={data} alt="" />}
          
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