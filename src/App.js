import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
import {useState, useEffect} from 'react';

const App = () => {

    if (!localStorage.costs) {
        localStorage.setItem('costs', JSON.stringify([]));
    }

    const [costs, setCosts] = useState(JSON.parse(localStorage.getItem('costs')).map((cost) => ({
        ...cost,
        date: new Date(cost.date)
    })) || []);

    useEffect(() => {
        localStorage.setItem('costs', JSON.stringify(costs));
    }, [costs]);

    const addCostHandler = (cost) => {
        setCosts((prevCosts) => {
            return [cost, ...prevCosts];
        });
    };

    const deleteCostHandler = (cost) => {
        setCosts(costs.filter((costItem) => costItem.id !== cost.id))
    };

    return (
        <div>
            <h1 className='main-title'>Expenditures</h1>
            <NewCost
                onAddCost={addCostHandler}
            />
            <Costs
                costs={costs}
                delete={deleteCostHandler}
            />
        </div>
    );
}

export default App;
