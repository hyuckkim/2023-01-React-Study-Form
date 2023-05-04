import styles from './Title.module.css'

type TitleProps = {
    title: string,
    subtitle?: string,
}

function Title(prop: TitleProps) {
    return (
        <div className={styles.panel}>
            <h1 className={styles.title}>{prop.title}</h1>
            {prop.subtitle && <p className={styles.subtitle}>{prop.subtitle}</p>}
        </div>
    )
}

export default Title