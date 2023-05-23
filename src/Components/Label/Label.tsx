import React from 'react'

import { Panel } from '@/Structure/Panel'
import { SlicedString } from '../../Structure/SlicedString'
import styles from './Label.module.css'
import { type ComponentProps } from '..'

type LabelProps = ComponentProps

function Label (prop: LabelProps): JSX.Element {
  return (
  <Panel cap={prop.cap}>
    <div className={styles.root}>
      <SlicedString text={prop.summary} />
    </div>
  </Panel>
  )
}

export default Label
