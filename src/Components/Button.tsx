import React from 'react';
import s from './Button.module.css';
export type ButtonCompType = {
    clickOnButton: () => void
    title: string
    disabledButton: boolean
}
export const ButtonComp = ({clickOnButton,disabledButton,title}: ButtonCompType) => {
    return (

        <div className={s.button}>
        <button onClick={clickOnButton} disabled={disabledButton}>{title}</button>
        </div>
)
}