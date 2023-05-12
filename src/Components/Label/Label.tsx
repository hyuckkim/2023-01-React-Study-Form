import { Panel, PanelProps } from "../Panel";
import styles from './Label.module.css';

type LabelProps = PanelProps & {
    summary: string,
}

function Label(prop: LabelProps) {
    return <Panel cap={prop.cap}>
        <form className={styles.root}>
            {prop.summary}
        </form>
    </Panel>
}

export default Label;