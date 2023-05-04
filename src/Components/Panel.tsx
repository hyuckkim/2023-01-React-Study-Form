import styles from './Panel.module.css';

type PanelProps = {
    children?: JSX.Element[] | JSX.Element,
}

function Panel(prop: PanelProps) {
    return (
        <div className={styles.panel}>
            {prop.children}
        </div>
    )
}

export default Panel;