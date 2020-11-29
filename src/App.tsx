import React, {useState} from 'react';
import s from './App.module.css';
import {ButtonComp} from "./Components/Button";
import {InputComp} from "./Components/Input";
import {InputSettingComp} from "./Components/InputSetting";


function App() {
    const [value, setValue] = useState<number>(0)
    const minValue: number = 0;
    const maxValue: number = 5;

    const [newMaxValue, setNewMaxValue]=useState<number>(maxValue)
   //const newMaxValueMax: number > newMinValue;

    const [newMinValue, setNewMinValue]=useState<number>(minValue)
    const newMinValueMin: number = 0;


    const incButton = () => {
        if (minValue <= value && value < maxValue) {
            setValue(value + 1)
        }
    }
    const resetButton = () => {
        setValue(minValue)
    }
    const setButton = () => {
        setValue(minValue)
    }


    const disabledIncButton = (value: number) => !!(value === maxValue)
    const disabledResetButton = (value: number) => !!(value === 0)
    const disabledSetButton = (value: number) => !!(value < 0)

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
                    <InputSettingComp
                        value={newMaxValue}
                        title={'max value: '}
                    />
                    <InputSettingComp
                        value={newMinValue}
                        title={'min value: '}
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
