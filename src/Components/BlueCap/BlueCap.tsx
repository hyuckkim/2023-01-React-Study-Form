import styles from './BlueCap.module.css';

type BlueCapProps = {
    height: number,
    name?: string,
}

function BlueCap(prop: BlueCapProps) {
    return <div className={styles.cap} style={{height: prop.height}}>
            {prop.name && 
            <span className={styles.text}>{prop.name}</span>
            }
        </div>
}

export default BlueCap;