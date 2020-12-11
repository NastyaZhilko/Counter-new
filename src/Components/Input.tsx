
import React from 'react';
import s from './Input.module.css';
export type InputCompType = {
    value: number
    maxValue: number
    error: string

}
export const InputComp = (props: InputCompType) => {
    return (
        <div className={s.input}>
            {props.error ? <h3 className={props.error === 'Incorrect value' ? s.disabled : s.active}>{props.error}</h3>
                :<h3 className={(props.value === props.maxValue) ? s.disabled : s.active}>{props.value}</h3>
            }
        </div>
    )
}