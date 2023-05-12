import { useState } from 'react';
import styles from './RadioMenu.module.css';
import { Panel, PanelProps } from '../Panel';
import { SlicedString } from '../SlicedString';

type RadioMenuProps = PanelProps & {
    summary: string,
    items: string[],
    //other?: true, TODO
    onValuechange?: (value: string | null) => void
}

function RadioMenu(prop: RadioMenuProps) {
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
            <div className={styles.root}>
                <div><SlicedString text={prop.summary} /></div>
                {prop.items.map (e => 
                <div key={e} className={styles.element}>
                    <input type="radio" id={e} className={styles.input} name={prop.summary} 
                    checked={selected != null && selected === e} 
                    onClick={toSetSelected(e)} readOnly/>
                    <label className={styles.inputlabel} htmlFor={e}>{e}</label>
                </div>)}
                {selected != null && <div className={styles.removeselect} onClick={reset}>선택해제</div>}
            </div>
        </Panel>
        )
}
export default RadioMenu;