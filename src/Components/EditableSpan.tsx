import React, {ChangeEvent, useState} from 'react';
import s from "./InputSetting.module.css";


export type EditableSpanType = {
    value: number
    onChange: (newValue:number)=>void
}

export const EditableSpan = (props: EditableSpanType) => {
    let [editMode, setEditMode] = useState(false);
    let [value, setValue] = useState(props.value)

    const activateEditMode = () => {
        setEditMode(true);
        setValue(props.value);
    }
    const activateViewMode=()=>{
    setEditMode(false)
        props.onChange(value)
}

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
    }

    return editMode
        ? <input value={value} onChange={changeValue} onBlur={activateViewMode} type={'number'} className={(props.value < 0) ? s.disabled : s.active}/>
        : <span onClick={activateEditMode}>{props.value}</span>
}