import React, { useState } from 'react'

import { Panel, type PanelProps } from '../Panel'
import { SlicedString } from '../SlicedString'

import styles from './CheckBox.module.css'

type CheckBoxProps = PanelProps & {
  summary: string
  items: string[]
  value?: string[]
  other?: true | boolean
  onValuechange?: (value: string[] | null) => void
}

function CheckBox (prop: CheckBoxProps): JSX.Element {
  const [selected, setSelected] = useState<string[] | null>(prop.value ?? null)
  const [etcSelected, setEtcSelected] = useState(false)
  const [etcValue, setEtcValue] = useState(prop.value === undefined
    ? ''
    : prop.items.length !== prop.value.length ? prop.value.filter(x => !prop.items.includes(x))[0] : '')

  const toSetSelected = (s: string) => () => {
    const newSelected = [...selected ?? []]
    if (newSelected.includes(s)) {
      newSelected.splice(newSelected.indexOf(s), 1)
    } else {
      newSelected.push(s)
    }

    setSelected(newSelected)

    if (prop.onValuechange !== undefined) {
      prop.onValuechange(newSelected)
    }
  }
  const toEtcSelected = (select: boolean) => () => {
    setEtcSelected(select)

    const newSelected = [...selected ?? []]
    if (select) {
      if (etcValue !== '') newSelected.push(etcValue)
    } else {
      if (newSelected.includes(etcValue)) {
        newSelected.splice(newSelected.indexOf(etcValue), 1)
      }
    }
    setSelected(newSelected)

    if (prop.onValuechange !== undefined) {
      prop.onValuechange(newSelected)
    }
  }
  const etcValueChanged = (s: string): void => {
    setEtcSelected(true)

    const newSelected = [...selected ?? []]
    if (newSelected.includes(etcValue)) {
      newSelected[newSelected.indexOf(etcValue)] = s
    } else {
      if (s !== '') newSelected.push(s)
    }
    setSelected(newSelected)
    setEtcValue(s)

    if (prop.onValuechange !== undefined) {
      prop.onValuechange(newSelected)
    }
  }

  return (
  <Panel cap={prop.cap}>
    <div className={styles.root}>
      <div><SlicedString text={prop.summary} /></div>

      {prop.items.map(e =>
      <div key={e} className={styles.element}>
          <input type="checkbox" id={e} className={styles.input} name={prop.summary}
          checked={selected?.includes(e)}
          onClick={toSetSelected(e)} readOnly/>
          <label className={styles.inputlabel} htmlFor={e}>{e}</label>
      </div>)}

      {prop.other === true && <div className={styles.element}>
          <input type="checkbox" id={'기타_' + prop.summary} className={styles.input} name={prop.summary}
          checked={selected != null && etcValue !== '' && selected.includes(etcValue)}
          onClick={toEtcSelected(!etcSelected)} readOnly/>
          <label className={styles.inputlabel} htmlFor={'기타_' + prop.summary}>기타:</label>
          <input className={styles.etcinput} value={etcValue} onChange={(e) => {
            etcValueChanged(e.target.value)
          }}/>
        </div>}
    </div>
  </Panel>
  )
}

export default CheckBox
