import { useState } from "react";
import { Panel, PanelProps } from "../Panel";
import { SlicedString } from "../SlicedString";

import styles from './CheckBox.module.css';

type CheckBoxProps = PanelProps & {
    summary: string,
    items: string[],
    other?: true | boolean,
    onValuechange?: (value: string[] | null) => void
}

function CheckBox(prop: CheckBoxProps) {
    const [selected, setSelected] = useState<string[] | null>(null);
    const [etcSelected, setEtcSelected] = useState(false);
    const [etcValue, setEtcValue] = useState("");
    const toSetSelected = (s: string) => () => {
        const newSelected = [...selected ?? []];
        if (newSelected.includes(s)) {
            newSelected.splice(newSelected.indexOf(s), 1);
        }
        else {
            newSelected.push(s);
        }

        setSelected(newSelected);
        if (etcSelected) {newSelected.push(etcValue)}

        if (prop.onValuechange != undefined) {
            prop.onValuechange(newSelected);
        }
    };
    const toEtcSelected = (select: boolean) => () => {
        setEtcSelected(select);

        const newSelected = [...selected ?? []];
        if (etcSelected) {newSelected.push(etcValue)}

        if (prop.onValuechange != undefined) {
            prop.onValuechange(newSelected);
        }
    }
    const etcValueChanged = (s: string) => {
        setEtcValue(s);
        toEtcSelected(true)();
    }
    
    return (
        <Panel cap={prop.cap}>
            <div className={styles.root}>
                <div><SlicedString text={prop.summary} /></div>
                {prop.items.map (e => 
                <div key={e} className={styles.element}>
                    <input type="checkbox" id={e} className={styles.input} name={prop.summary} 
                    checked={selected != null && selected.includes(e)} 
                    onClick={toSetSelected(e)} readOnly/>
                    <label className={styles.inputlabel} htmlFor={e}>{e}</label>
                </div>)}
                {prop.other == true && <div className={styles.element}>
                    <input type="checkbox" id={'기타_' + prop.summary} className={styles.input} name={prop.summary} 
                    checked={etcSelected} 
                    onClick={toEtcSelected(!etcSelected)} readOnly/>
                    <label className={styles.inputlabel} htmlFor={'기타_' + prop.summary}>기타:</label>
                    <input className={styles.etcinput} onChange={(e) => {
                        etcValueChanged(e.target.value);
                    }}/>
                </div>}
            </div>
        </Panel>
        )
}

export default CheckBox;