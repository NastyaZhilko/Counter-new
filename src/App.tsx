import React, {useState} from 'react';
import s from './App.module.css';
import {ButtonComp} from "./Components/Button";
import {InputComp} from "./Components/Input";
import {InputSettings} from "./Components/InputSetting";
import {restoreState, saveValue} from "./LocalStorage/LocalStarage";


const errorMes: string = 'Incorrect value'
const setMess: string = "enter values and press 'set'"

function App() {

    const [counter, setCounter] = useState<number>(restoreState().start)//значение счетчика(инит. значение = startValue сохраненноев localStorage)
    const [startValue, setStartValue] = useState<number>(restoreState().start)//стартовое значение в блоке настроек
    const [maxValue, setMaxValue] = useState<number>(restoreState().max)//максимальное значение в блоке настроек
    const [disabledSet, setDisableSet] = useState<boolean>(true)//булево значение определяет активность кнопки Set
    const [disabledInc, setDisableInc] = useState<boolean>(false)//булево значение определяет активность кнопки Inc
    const [disabledReset, setDisableReset] = useState<boolean>(true)//булево значение определяет активность кнопки Reset
    const [error, setError] = useState<string>('')//


    const forError =(startValue: number, maxValue: number)=> {
        if (maxValue <= startValue || startValue < 0) {
            setError(errorMes)
            setDisableSet(true)
        } else {
            setError(setMess)
            setDisableSet(false)
        }
    }

    const changeStartValue = (startValue: number) => {
        forError(startValue,maxValue)
        setStartValue(startValue)
        setDisableReset(true)
        setDisableInc(true)

    }//меняем стартовое значение
    const changeMaxValue = (maxValue: number) => {
        forError(startValue,maxValue)
        setMaxValue(maxValue)
        setDisableReset(true)
        setDisableInc(true)

    }//меняем максимальное значение
    const incButton = () => {
        if (counter < maxValue) {
            setCounter(Number(counter) + 1)
            setDisableReset(false)
        } else if (counter === maxValue) {
            setDisableInc(true)
        }
    }  //увеличиваем значение на 1 при нажание ни кнопку "inc"

    const resetButton = () => {
        setCounter(startValue)
        setDisableReset(true)
        setDisableInc(false)
    }//возвращаем стартовое значение при нажатии на кнопку "reset"

    const setButton = () => {
        setError('')
        setCounter(startValue)
        saveValue(maxValue, startValue)
        setDisableSet(true)
        setDisableReset(true)
        setDisableInc(false)
    }//отправляем новое стартовое значение в коунтер

    return (
        <div className={s.App}>
            <div>
                <h1>Settings</h1>
                <div className={s.body}>
                    <InputSettings
                        value={maxValue}
                        title={'max value:'}
                        changeValue={changeMaxValue}
                        error={maxValue<=startValue}
                    />
                    <InputSettings
                        value={startValue}
                        title={'start value:'}
                        changeValue={changeStartValue}
                        error={startValue>=maxValue}
                    />
                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={setButton}
                            title={'set'}
                            disabledButton={disabledSet}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1>Counter</h1>
                <div className={s.body}>
                    <InputComp
                        value={counter}
                        maxValue={maxValue}
                        error={error}
                    />
                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={incButton}
                            title={'inc'}
                            disabledButton={disabledInc}
                        />
                        <ButtonComp
                            clickOnButton={resetButton}
                            title={'reset'}
                            disabledButton={disabledReset}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;

