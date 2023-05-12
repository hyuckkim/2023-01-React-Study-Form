import styles from './NavButton.module.css';

type NavButtonProps = {
    leftClick: () => void,
    rightClick: () => void,

    leftEnabled: boolean,
    rightEnabled: boolean
}

function NavButton(prop: NavButtonProps) {
    return (<div>
            <button onClick={prop.leftClick} disabled={!prop.leftEnabled} className={styles.button}>뒤로</button>
            <button onClick={prop.rightClick} disabled={!prop.rightEnabled} className={styles.button}>다음</button>
        </div>)
}

export default NavButton;