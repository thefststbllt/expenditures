import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost';

const App = () => {
    const costs = [
        {
            id: 'c1',
            date: new Date(2022, 2, 12),
            description: 'Телевизор',
            amount: 999.99,
        },
        {
            id: 'c2',
            date: new Date(2022, 7, 4),
            description: 'Macbook Pro 16 M1 Max 1Tb',
            amount: 1199.99,
        },
        {
            id: 'c3',
            date: new Date(2022, 5, 7),
            description: 'Свитшот',
            amount: 30,
        },
    ];

    const addCostHandler = (cost) => {
        console.log(cost, 'App Component');
    }

  return (
    <div>
        <h1 className='main-title'>Expenditures</h1>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
