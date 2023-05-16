import React, { useState } from 'react'

import styles from './InputField.module.css'
import { Panel, type PanelProps } from '../Panel'
import { SlicedString } from '../SlicedString'

type InputFieldProps = PanelProps & {
  summary: string
  value?: string | null
  onValuechange?: (value: string | null) => void
}

function InputField (prop: InputFieldProps): JSX.Element {
  const [inputValue, setInputValue] = useState(prop.value ?? '')

  const toSetValue = (s: string): void => {
    setInputValue(s)
    if (prop.onValuechange !== undefined) {
      prop.onValuechange(s)
    }
  }
  return (
    <Panel cap={prop.cap}>
      <div className={styles.root}>
        <div><SlicedString text={prop.summary}/></div>
        <div className={styles.inputcase}>
          <input className={styles.input} value={inputValue} placeholder='내 답변' onChange={(e) => {
            toSetValue(e.target.value)
          }}/>
        </div>
      </div>
    </Panel>
  )
}
export default InputField
