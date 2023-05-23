import React from 'react'
import styles from './NavButton.module.css'

interface NavButtonProps {
  leftClick: () => void
  rightClick: () => void
  submitClick: () => void

  isFirstPage: boolean
  isLastPage: boolean
}

function NavButton (prop: NavButtonProps): JSX.Element {
  const leftButton = prop.isFirstPage ? <></> : <button onClick={prop.leftClick} className={styles.button}>뒤로</button>
  const rightButton = prop.isLastPage
    ? <button onClick={prop.submitClick} className={styles.specialbutton}>제출</button>
    : <button onClick={prop.rightClick} className={styles.button}>다음</button>
  return (
  <div>
    {leftButton}
    {rightButton}
  </div>
  )
}

export default NavButton
