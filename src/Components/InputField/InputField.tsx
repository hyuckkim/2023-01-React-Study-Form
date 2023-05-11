import { useState } from 'react';
import styles from './InputField.module.css';
import { Panel, PanelProps } from '../Panel';

type InputFieldProps = PanelProps & {
    summary: string,
    onValuechange?: (value: string | null) => void
}

function InputField(prop: InputFieldProps) {
    return (
        <Panel cap={prop.cap}>
            <form className={styles.root}>
                <div>{prop.summary}</div>
                <input className={styles.input} onChange={(e) => {
                    if (prop.onValuechange != undefined) {
                        prop.onValuechange(e.target.value);
                    }
                }}/>
            </form>
        </Panel>
        )
}
export default InputField;