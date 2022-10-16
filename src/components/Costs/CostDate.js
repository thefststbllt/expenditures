import './CostDate.css';

const CostDate = ({date}) => {
    const month = date.toLocaleString('ru-RU', {month: 'long'});
    const year = date.getFullYear();
    const day = date.toLocaleString('ru-RU', {day: '2-digit'});

    return (
        <div className='cost-date'>
            <div className='cost-date__month'>{month}</div>
            <div className='cost-date__day'>{day}</div>
            <div className='cost-date__year'>{year}</div>
        </div>
    );
}

export default CostDate;
