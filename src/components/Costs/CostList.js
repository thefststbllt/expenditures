import CostItem from './CostItem';
import './CostList.css';

const CostList = (props) => {

    if (!props.costs.length) {
        return <h2 className='cost-list__no-expenditures'>
            <span>В&nbsp;</span>
            <span>э</span>
            <span>т</span>
            <span>о</span>
            <span>м&nbsp;</span>
            <span>г</span>
            <span>о</span>
            <span>д</span>
            <span>у&nbsp;</span>
            <span>р</span>
            <span>а</span>
            <span>с</span>
            <span>х</span>
            <span>о</span>
            <span>д</span>
            <span>о</span>
            <span>в&nbsp;</span>
            <span>н</span>
            <span>е </span>
            <span>б</span>
            <span>ы</span>
            <span>л</span>
            <span>о</span>
        </h2>;
    }

    return (
        <ul className='cost-list'>
            {props.costs.map((cost) => (
                <CostItem
                    key={cost.id}
                    id={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                    delete={props.delete}
                />
            ))}
        </ul>
    );
}

export default CostList;
