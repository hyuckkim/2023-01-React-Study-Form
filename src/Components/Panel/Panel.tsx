import React from 'react'

import { BlueCap } from '../BlueCap'
import styles from './Panel.module.css'

export interface PanelProps {
  cap?: { height: number, text?: string }
  children?: JSX.Element[] | JSX.Element
}

function Panel (prop: PanelProps): JSX.Element {
  return (
  <div className={styles.panel}>
    {(prop.cap != null) && <BlueCap height={prop.cap.height} name={prop.cap.text}/>}
    <div className={styles.inner}>
      {prop.children}
    </div>
  </div>
  )
}

export default Panel
