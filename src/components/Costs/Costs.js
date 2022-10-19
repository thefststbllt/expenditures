import CostList from './CostList';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import {useState} from 'react';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {

    const currentYear = new Date().getFullYear().toString();

    const [selectedYear, setSelectedYear] = useState(currentYear);

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    };

    const filteredCards = props.costs.filter((cost) =>
        cost.date.getFullYear().toString() === selectedYear
    );

    return (
        <Card className='costs'>
            <CostsFilter
                year={selectedYear}
                onChangeYear={yearChangeHandler}
            />
            <CostsDiagram costs={filteredCards} />
            <CostList
                costs={filteredCards}
                delete={props.delete}
            />
        </Card>
    );
}

export default Costs;
