import React, {ChangeEvent, useState} from 'react';
import s from './InputSetting.module.css';


export type InputSettingsType = {
    title: string
    value: number
    changeValue:(value: number) => void
}


export const InputSettings = (props: InputSettingsType) => {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(Number(e.currentTarget.value))
    }
    return (
        <div className={s.block}>
            <span>{props.title}</span>
             <input className={(props.value < 0) ? s.disabled : s.active}
                   onChange={onChangeValue}
                   value={props.value}
                   type={'number'}/>
        </div>
    )
}
