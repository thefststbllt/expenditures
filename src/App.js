import Costs from './components/Costs/Costs'

const App = () => {
    const costs = [
        {
            date: new Date(2022, 2, 12),
            description: 'Телевизор',
            amount: 999.99,
        },
        {
            date: new Date(2022, 7, 4),
            description: 'Macbook Pro 16 M1 Max 1Tb',
            amount: 1199.99,
        },
        {
            date: new Date(2022, 5, 7),
            description: 'Свитшот',
            amount: 30,
        },
    ];

  return (
    <div>
        <h1 className='main-title'>Expenditures</h1>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
