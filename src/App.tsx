import React, {useState} from 'react';
import s from './App.module.css';
import {ButtonComp} from "./Components/Button";
import {InputComp} from "./Components/Input";
import {InputSettings} from "./Components/InputSetting";

function App() {

    const [counter, setCounter] = useState<number>(0)//создала объект коунтер
    const [startValue, setStartValue] = useState<number>(0)//создала объект коунтер
    const [maxValue, setMaxValue] = useState<number>(5)//создала объект коунтер
    const [disabledSet, setDisableSet] = useState<boolean>(true)
    const [disabledInc, setDisableInc] = useState<boolean>(false)
    const [disabledReset, setDisableReset] = useState<boolean>(false)


    const changeStartValue = (newValue: number) => {

            setStartValue(newValue)
            setDisableReset(true)
            setDisableInc(true)
            setDisableSet(false)

    }//меняем стартовое значение
    const changeMaxValue = (newValue: number) => {
        setMaxValue(newValue)
        setDisableReset(true)
        setDisableInc(true)
        setDisableSet(false)
    }//меняем максимальное значение
    const incButton = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
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
        setCounter(startValue)
        setDisableSet(true)
        setDisableReset(false)
        setDisableInc(false)
    }//отправляем новое стартовое значение в коунтер
    /* const disabledSetButton = () => {
        setDisableSet(true)
     }*///дизэйблим кнопку "set" при минимальном значении в инпуте


    //const disabledIncButton = () => (value: number) => (value === maxValue)//дизэйблим кнопку "inc" при достижении макс.значения
    //const disabledResetButton = () => (value: number) => !!(value === minValue)//дизэйблим кнопку "reset" при минимальном значении в инпуте
    //const disabledSetButton = () => !(
    //maxValue !== minValue && maxValue > minValue && minValue > 0)
    //дизэйблим кнопку "set" при минимальном значении в инпуте

    return (
        <div className={s.App}>
            <div>
                <h1>Counter</h1>
                <div className={s.body}>
                    <InputComp
                        value={counter}
                        maxValue={maxValue}

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


            <div>
                <h1>Settings</h1>
                <div className={s.body}>
                    <InputSettings
                        initValue={maxValue}
                        title={'max value: '}
                        changeInValue={changeMaxValue}
                    />
                    <InputSettings
                        initValue={startValue}
                        title={'start value: '}
                        changeInValue={changeStartValue}

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
        </div>
    );
}


export default App;

