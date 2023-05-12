import { Panel, PanelProps } from "../Panel";
import styles from './Label.module.css';

type LabelProps = PanelProps & {
    summary: string,
}

function Label(prop: LabelProps) {
    return <Panel cap={prop.cap}>
        <div className={styles.root}>
            {prop.summary}
        </div>
    </Panel>
}

export default Label;