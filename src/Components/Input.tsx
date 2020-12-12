
import React from 'react';
import s from './Input.module.css';
export type InputCompType = {
    value: number
    maxValue: number
    error: string

}
export const InputComp = (props: InputCompType) => {
    return (
        <div >
            {props.error ? <h3 className={props.error === 'Incorrect value' ? s.errorStyle : s.correctlyStyle}>{props.error}</h3>
                :<h3 className={(props.value === props.maxValue) ? s.errorStyle : s.correctlyStyle}>{props.value}</h3>
            }
        </div>
    )
}