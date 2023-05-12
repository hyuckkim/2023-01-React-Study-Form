import styles from './NavButton.module.css';

type NavButtonProps = {
    leftClick: () => void,
    rightClick: () => void,
    submitClick: () => void,

    isFirstPage: boolean,
    isLastPage: boolean
}

function NavButton(prop: NavButtonProps) {
    const leftButton = <button onClick={prop.leftClick} disabled={prop.isFirstPage} className={styles.button}>뒤로</button>
    const rightButton = prop.isLastPage ? 
        <button onClick={prop.submitClick} className={styles.specialbutton}>제출</button> : 
        <button onClick={prop.rightClick} className={styles.button}>다음</button> ;
    return (<div>
            {leftButton}
            {rightButton}
        </div>)
}

export default NavButton;