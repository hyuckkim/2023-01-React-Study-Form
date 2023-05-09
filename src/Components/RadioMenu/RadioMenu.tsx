import { useState } from 'react';
import styles from './RadioMenu.module.css';
import { Panel, PanelProps } from '../Panel';

type RadioMenuProps = PanelProps & {
    summary?: string,
    items: string[]
}

function RadioMenu(prop: RadioMenuProps) {
    const [selected, setSelected] = useState<string | null>(null);
    const reset = () => {
        setSelected(null);
    }
    const toSetSelected = (s: string) => () => {
        setSelected(s);
    }
    
    return (
        <Panel cap={prop.cap}>
            <form className={styles.root}>
                {prop.summary && <div>{prop.summary}</div>}
                {prop.items.map (e => 
                <div key={e} className={styles.element}>
                    <input type="radio" id={e} className={styles.input} name={prop.summary} 
                    checked={selected != null && selected === e} 
                    onClick={toSetSelected(e)}/>
                    <label className={styles.inputlabel} htmlFor={e}>{e}</label>
                </div>)}
                <div className={styles.removeselect} onClick={reset}>선택해제</div>
            </form>
        </Panel>
        )
}
export default RadioMenu;