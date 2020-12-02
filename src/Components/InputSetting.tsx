import React, {ChangeEvent, useState} from 'react';
import s from './InputSetting.module.css';
import {EditableSpan} from "./EditableSpan";

export type InputMinCompType = {
    title: string
    value: number
    changeInValueMin: (newValueMin: number) => void
}
export type InputMaxCompType = {
    value: number
    title: string
    changeInValueMax:(newValueMax: number) => void
}

export const InputMinComp = (props: InputMinCompType) => {
    const onChangeHandlerMin = (newValue: number) => {
        props.changeInValueMin(newValue)
    }

    return (
        <div className={s.block}>
            <span>{props.title}</span>
           {/* <input className={(props.value < 0) ? s.disabled : s.active}
                   value={props.value}
                //onChange={onChangeHandler} type={'number'}
            />*/}
            <EditableSpan  value={props.value} onChange={onChangeHandlerMin}/>
        </div>
    )
}
export const InputMaxComp = (props: InputMaxCompType) => {
    const onChangeHandlerMax = (newValue:number) => {
        props.changeInValueMax(newValue)
    }
return (
        <div className={s.block}>
            <span>{props.title}</span>
           {/* <input className={(props.value < 0) ? s.disabled : s.active}
                   //onChange={changeValue}
                   value={props.value}
                   type={'number'}*/}
            <EditableSpan value={props.value} onChange={onChangeHandlerMax}/>
        </div>
    )
}