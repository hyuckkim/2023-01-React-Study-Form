import React from 'react'

import styles from './BlueCap.module.css'

interface BlueCapProps {
  height: number
  name?: string
}

function BlueCap (prop: BlueCapProps): JSX.Element {
  return (
  <div className={styles.cap} style={{ height: prop.height }}>
    {(prop.name != null) &&
    <span className={styles.text}>{prop.name}</span>
    }
  </div>
  )
}

export default BlueCap
