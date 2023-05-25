import React from 'react'

import { Panel } from '@/Structure/Panel'
import { SlicedString } from '../../Structure/SlicedString'
import styles from './Label.module.css'
import { type FormComponentProps } from '..'

type LabelProps = FormComponentProps

function Label (prop: LabelProps): JSX.Element {
  return (
    <Panel cap={prop.cap}>
      <div className={styles.root}>
        <SlicedString text={prop.text} />
      </div>
    </Panel>
  )
}

export default Label
