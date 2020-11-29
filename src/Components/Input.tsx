
import React from 'react';
import s from './Input.module.css';
export type InputCompType = {
    value: number
    maxValue: number
}
export const InputComp = (props: InputCompType) => {
    return (
        <input className={(props.value===props.maxValue) ? s.disabled: s.active}
               value={props.value}/>
    )
}