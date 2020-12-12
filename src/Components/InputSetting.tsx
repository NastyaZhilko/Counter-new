import React, {ChangeEvent} from 'react';
import s from './InputSetting.module.css';


export type InputSettingsType = {
    title: string
    value: number|string
    changeValue:(value: number) => void
error?:boolean
}


export const InputSettings = (props: InputSettingsType) => {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(Number(e.currentTarget.value))
    }
    return (
        <div className={s.block}>
            <span>{props.title}</span>
             <input className={(props.value < 0 || props.error) ? s.disabled : s.active}
                   onChange={onChangeValue}
                   value={props.value}
                   type={'number'}/>
        </div>
    )
}
