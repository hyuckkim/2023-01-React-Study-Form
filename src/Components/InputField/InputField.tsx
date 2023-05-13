import { useState } from 'react';
import styles from './InputField.module.css';
import { Panel, PanelProps } from '../Panel';
import { SlicedString } from '../SlicedString';

type InputFieldProps = PanelProps & {
    summary: string,
    onValuechange?: (value: string | null) => void
}

function InputField(prop: InputFieldProps) {
    return (
        <Panel cap={prop.cap}>
            <div className={styles.root}>
                <div><SlicedString text={prop.summary}/></div>
                <input className={styles.input} placeholder='내 답변' onChange={(e) => {
                    if (prop.onValuechange != undefined) {
                        prop.onValuechange(e.target.value);
                    }
                }}/>
            </div>
        </Panel>
        )
}
export default InputField;