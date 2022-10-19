import "./CostsFilter.css";
import YearOption from './YearOption';

const CostsFilter = (props) => {
    const yearChangeHandler = (evt) => {
        props.onChangeYear(evt.target.value);
    };

    const getYearsRange = (init, end) => {
        let yearCollection = [];
        while (init <= end) {
            yearCollection.push(init);
            init++;
        }
        return yearCollection;
    };

    const appYearRange = (getYearsRange(2003, 2100));

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Выберите год</label>
                <select
                    value={props.year}
                    onChange={yearChangeHandler}>
                    {appYearRange.map((year) => {
                        return <YearOption year={year} key={year}/>
                    })}
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;
