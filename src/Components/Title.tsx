import { Panel, PanelProps } from './Panel'
import styles from './Title.module.css'

type TitleProps = PanelProps & {
    title: string,
    subtitle?: string,
}

function Title(prop: TitleProps) {
    return (
        <Panel cap={prop.cap}>
            <div className={styles.panel}>
                <h1 className={styles.title}>{prop.title}</h1>
                {prop.subtitle && <p className={styles.subtitle}>{prop.subtitle}</p>}
            </div>
        </Panel>
    )
}

export default Title