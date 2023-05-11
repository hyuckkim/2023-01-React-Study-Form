import { useState } from 'react';
import styles from './InputField.module.css';
import { Panel, PanelProps } from '../Panel';

type InputFieldProps = PanelProps & {
    summary: string,
    onValuechange?: (value: string | null) => void
}

function InputField(prop: InputFieldProps) {
    const [selected, setSelected] = useState<string | null>(null);
    const reset = () => {
        setSelected(null);

        if (prop.onValuechange != undefined) {
            prop.onValuechange(null);
        }
    }
    const toSetSelected = (s: string) => () => {
        setSelected(s);

        if (prop.onValuechange != undefined) {
            prop.onValuechange(s);
        }
    }
    
    return (
        <Panel cap={prop.cap}>
            <form className={styles.root}>
                <div>{prop.summary}</div>
                <input className={styles.input}/>
            </form>
        </Panel>
        )
}
export default InputField;