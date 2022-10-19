import Diagram from '../Diagrams/Diagram';

const CostsDiagram = (props) => {

    const diagramDataSets = [
        {label: 'Январь', value: 0},
        {label: 'Февраль', value: 0},
        {label: 'Март', value: 0},
        {label: 'Апрель', value: 0},
        {label: 'Май', value: 0},
        {label: 'Июнь', value: 0},
        {label: 'Июль', value: 0},
        {label: 'Август', value: 0},
        {label: 'Сентябрь', value: 0},
        {label: 'Октябрь', value: 0},
        {label: 'Ноябрь', value: 0},
        {label: 'Декабрь', value: 0},
    ];

    for (const cost of props.costs) {
        const costMonth = cost.date.getMonth();
        diagramDataSets[costMonth].value += cost.amount;
    }

    return (
        <Diagram dataSets={diagramDataSets}/>
    );
}

export default CostsDiagram;
