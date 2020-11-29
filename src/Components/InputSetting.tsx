import React from 'react';
import s from './InputSetting.module.css';

export type InputCompType = {
    value: number
    title: string
    //changeValue:(value:number)=>void
}
export const InputSettingComp = (props: InputCompType) => {
    const changeValue=()=>{

    }

    return (
        <div className={s.block}>
            <span>{props.title}</span>
            <input className={(props.value < 0) ? s.disabled : s.active}
                   onChange={changeValue}
                   value={props.value}
            />
        </div>
    )
}