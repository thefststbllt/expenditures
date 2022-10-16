import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';

const CostItem = ({date, description, amount}) => {

    return (
        <Card className='cost-item'>
            <CostDate date={date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${amount}</div>
            </div>
        </Card>);
}

export default CostItem;
