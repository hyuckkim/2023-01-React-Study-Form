import React, { useState } from 'react'

import styles from './InputField.module.css'
import { Panel } from '@/Structure/Panel'
import { SlicedString } from '../../Structure/SlicedString'
import { type ComponentValueProps } from '..'

type InputFieldProps = ComponentValueProps<string>

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
        <div><SlicedString text={prop.text}/></div>
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
