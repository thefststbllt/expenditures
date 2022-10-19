import CostForm from './CostForm';
import './NewCost.css';
import {useState} from 'react';

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };
        props.onAddCost(costData);
    };

    const toggleCostFormHandler = () => {
        setIsFormVisible(true);
    };

    const cancelCostFormHandler = () => {
        setIsFormVisible(false);
    };

    return (
        <div className='new-cost'>
            {!isFormVisible && <button className='new-cost__button-add' onClick={toggleCostFormHandler}>Добавить новый расход</button>}
            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostFormHandler}/>}
        </div>
    );
}

export default NewCost;
