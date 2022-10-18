import './CostForm.css';
import {useState} from 'react';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');


    const nameChangeHandler = (evt) => {
        setInputName(evt.target.value);
    };
    const amountChangeHandler = (evt) => {
        setInputAmount(evt.target.value);
    };
    const dateChangeHandler = (evt) => {
        setInputDate(evt.target.value);
    };

    const submitHandler = (evt) => {
        evt.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input type='text' value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input type='number' value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input type='date' value={inputDate} min='2022-01-01' max='2024-12-31' onChange={dateChangeHandler}/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить затрату</button>
            </div>
        </div>
</form>;
}

export default CostForm;
