import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import {useState} from 'react';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    };

    return (
        <Card className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            {props.costs.map((cost) =>
                <CostItem date={cost.date} description={cost.description} amount={cost.amount}/>
            )
            }
        </Card>
    )
}

export default Costs
