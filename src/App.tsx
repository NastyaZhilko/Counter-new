import React, {useState} from 'react';
import s from './App.module.css';
import {ButtonComp} from "./Components/Button";
import {InputComp} from "./Components/Input";
import {InputMinComp, InputMaxComp} from "./Components/InputSetting";


type CounterType = {
    id: number
    minValue: number
    maxValue: number
}

function App() {

    const [counter, setCounter] = useState<CounterType>({id: 1, minValue: 0, maxValue: 5})//создала объект коунтер

    const [value, setValue] = useState<number>(0)
    let minValue: number = counter.minValue; //инициализационное значение приравниваю значению в объекте
    let maxValue: number = counter.maxValue; //инициализационное значение приравниваю значению в объекте

    const changeInValueMin = (newValue: number) => {
        counter.minValue = newValue
        setCounter({...counter})
    }//меняем стартовое значение
    const changeInValueMax = (newValue: number) => {
        counter.maxValue = newValue
        setCounter({...counter})
    }//меняем максимальное значение
    const incButton = () => {
        if (minValue <= value && value < maxValue) {
            setValue(value + 1)
        }
    }//увеличиваем значение на 1 при нажание ни кнопку "inc"

    const resetButton = () => {
        setValue(minValue)
    }//возвращаем стартовое значение при нажатии на кнопку "reset"
    const setButton = () => {
        setValue(counter.minValue)
    }//отправляем новое стартовое значение в соунтер

    const disabledIncButton = (value: number) => !!(value === maxValue) //дизэйблим кнопку "inc" при достижении макс.значения
    const disabledResetButton = (value: number) => !!(value === minValue)//дизэйблим кнопку "reset" при минимальном значении в инпуте
    const disabledSetButton = (value: number) => !!(value < 0 && maxValue === minValue) //дизэйблим кнопку "set" при минимальном значении в инпуте

    return (
        <div className={s.App}>
            <div>
                <h1>Counter</h1>
                <div className={s.body}>
                    <InputComp
                        value={value}
                        maxValue={maxValue}
                    />
                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={incButton}
                            title={'inc'}
                            value={value}
                            disabledButton={disabledIncButton}
                        />
                        <ButtonComp
                            clickOnButton={resetButton}
                            title={'reset'}
                            value={value}
                            disabledButton={disabledResetButton}
                        />
                    </div>
                </div>
            </div>


            <div>
                <h1>Settings</h1>
                <div className={s.body}>
                    <InputMaxComp
                        value={counter.maxValue}
                        title={'max value: '}
                        changeInValueMax={changeInValueMax}
                    />
                    <InputMinComp
                        value={counter.minValue}
                        title={'start value: '}
                        changeInValueMin={changeInValueMin}

                    />

                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={setButton}
                            title={'set'}
                            value={value}
                            disabledButton={disabledSetButton}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
