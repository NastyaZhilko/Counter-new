import React from 'react';
import s from './Button.module.css';
export type ButtonCompType = {
    title: string
    clickOnButton: () => void
    value: number
    disabledButton: (value:number)=>boolean
}
export const ButtonComp = (props: ButtonCompType) => {
    return (

        <div className={s.button}>
        <button onClick={props.clickOnButton} disabled={props.disabledButton(props.value)}>{props.title}</button>
        </div>
)
}