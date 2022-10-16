import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';

const Costs = ({costs}) => {
    return (
        <Card className='costs'>
            {costs.map((cost) =>
                <CostItem date={cost.date} description={cost.description} amount={cost.amount}/>
            )
            }
        </Card>
    )
}

export default Costs
