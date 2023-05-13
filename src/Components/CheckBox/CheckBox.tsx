import { useState } from "react";
import { Panel, PanelProps } from "../Panel";
import { SlicedString } from "../SlicedString";

import styles from './CheckBox.module.css';

type CheckBoxProps = PanelProps & {
    summary: string,
    items: string[],
    //other?: true, TODO
    onValuechange?: (value: string[] | null) => void
}

function CheckBox(prop: CheckBoxProps) {
    const [selected, setSelected] = useState<string[] | null>(null);
    const toSetSelected = (s: string) => () => {
        const newSelected = [...selected ?? []];
        if (newSelected.includes(s)) {
            newSelected.splice(newSelected.indexOf(s), 1);
        }
        else {
            newSelected.push(s);
        }

        setSelected(newSelected);

        if (prop.onValuechange != undefined) {
            prop.onValuechange(newSelected);
        }
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
            </div>
        </Panel>
        )
}

export default CheckBox;