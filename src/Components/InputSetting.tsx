import React, {ChangeEvent, useState} from 'react';
import s from './InputSetting.module.css';


export type InputSettingsType = {
    title: string
    initValue: number
    changeInValue:(value: number) => void
}


export const InputSettings = (props: InputSettingsType) => {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInValue(Number(e.currentTarget.value))
    }
    return (
        <div className={s.block}>
            <span>{props.title}</span>
             <input className={(props.initValue < 0) ? s.disabled : s.active}
                   onChange={onChangeValue}
                   value={props.initValue}
                   type={'number'}/>
        </div>
    )
}
