
import React from 'react';
import s from './Input.module.css';
export type InputCompType = {
    value: number|string
    maxValue: number

}
export const InputComp = (props: InputCompType) => {
    return (
        <div>
        <input className={(props.value===props.maxValue) ? s.disabled: s.active}
               value={props.value}
        />

        </div>
    )
}