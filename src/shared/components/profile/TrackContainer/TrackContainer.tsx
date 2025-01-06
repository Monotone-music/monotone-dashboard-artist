import React from 'react'
import styles from './styles.module.scss'
import TrackCard from '../TrackCard/TrackCard'

const TrackContainer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Current Song
        </div>

        <div className={styles.list}>
            <TrackCard/>
            <TrackCard/>
            <TrackCard/>
        </div>
    </div>
  )
}

export default TrackContainer