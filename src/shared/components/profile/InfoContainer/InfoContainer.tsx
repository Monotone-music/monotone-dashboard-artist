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
    const hasImage = dataInfo?.image?.filename;
    
    const {data, isLoading} = useQuery({
        queryKey: ['profile', token, hasImage],
        queryFn: () => hasImage ? getPrfileFileName(dataInfo.image.filename, token!) : null,
        enabled: !!hasImage
    })
    
    return (
        <div className={styles.container}>
            <div className={styles['img-wrapper']}>
                {isLoading ? (
                    <PuffLoader/>
                ) : (
                    <img 
                        src={data || "https://github.com/shadcn.png"} 
                        alt="Profile" 
                    />
                )}
            </div>
            <div className={styles['info-container']}>
                <div className={styles['row']}>
                    <div className={styles.label}>
                        Name
                    </div>
                    <div className={styles.info}>
                        {dataInfo?.name}
                    </div>
                </div>
                <div className={styles['row']}>
                    <div className={styles.label}>
                        Email
                    </div>
                    <div className={styles.info}>
                        {dataInfo?.account?.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoContainer
