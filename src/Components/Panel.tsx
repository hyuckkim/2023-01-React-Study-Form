import BlueCap from './BlueCap';
import styles from './Panel.module.css';

type PanelProps = {
    cap?: {height: number, text?: string}
    children?: JSX.Element[] | JSX.Element,
}

function Panel(prop: PanelProps) {
    return (
        <div className={styles.panel}>
            {prop.cap && <BlueCap height={prop.cap.height} name={prop.cap.text}/>}
            <div className={styles.inner}>
                {prop.children}
            </div>
        </div>
    )
}

export default Panel;