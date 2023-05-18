import React, { useState } from 'react'
import styles from './RadioMenu.module.css'
import { Panel, type PanelProps } from '../Panel'
import { SlicedString } from '../SlicedString'

type RadioMenuProps = PanelProps & {
  summary: string
  items: string[]
  value?: string
  other?: true | boolean
  onValuechange?: (value: string | null) => void
}

function RadioMenu (prop: RadioMenuProps): JSX.Element {
  const [selected, setSelected] = useState<string | null>(prop.value ?? null)
  const [etcValue, setEtcValue] = useState(!prop.items.includes(prop.value ?? '') ? prop.value ?? '' : '')
  const reset = (): void => {
    setSelected(null)

    if (prop.onValuechange !== undefined) {
      prop.onValuechange(null)
    }
  }
  const toSetSelected = (s: string) => () => {
    setSelected(s)

    if (prop.onValuechange !== undefined) {
      prop.onValuechange(s)
    }
  }
  const toEtcSelected = () => () => {
    console.log(etcValue)
    if (etcValue !== '') {
      setSelected(etcValue)
      if (prop.onValuechange !== undefined) {
        prop.onValuechange(etcValue)
      }
    }
  }
  const etcValueChanged = (s: string): void => {
    setEtcValue(s)
    setSelected(s)
    toEtcSelected()()
  }
  const summaryHeight = 41
  const selectionHeight = 43
  const resetSeletionHeight = 41
  const heightWhenResetButtonHide = summaryHeight + selectionHeight * (prop.items.length + (prop.other === true ? 1 : 0))
  const heightWhenResetButtonVisible = heightWhenResetButtonHide + resetSeletionHeight

  return (
  <Panel cap={prop.cap}>
    <div className={styles.root} style={{ height: selected != null ? heightWhenResetButtonVisible : heightWhenResetButtonHide }}>
      <div><SlicedString text={prop.summary} /></div>

      {prop.items.map(e =>
        <div key={e} className={styles.element}>
          <input type="radio" id={e} className={styles.input} name={prop.summary}
            checked={selected != null && selected === e}
            onClick={toSetSelected(e)} readOnly/>
          <label className={styles.inputlabel} htmlFor={e}>{e}</label>
        </div>)}

      {prop.other === true && <div className={styles.element}>
        <input type="radio" id={'기타_' + prop.summary} className={styles.input} name={prop.summary}
          checked={selected === etcValue}
          onClick={toEtcSelected()} readOnly/>
        <label className={styles.inputlabel} htmlFor={'기타_' + prop.summary}>기타:</label>
        <input className={styles.etcinput} value={etcValue} onChange={(e) => {
          etcValueChanged(e.target.value)
        }}/>
      </div>}

      {selected != null && <div className={styles.removeselect} onClick={reset}>선택해제</div>}
    </div>
  </Panel>
  )
}
export default RadioMenu
