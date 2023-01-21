import {useState, useEffect} from 'react';
import './DiagramBar.css';

const DiagramBar = (props) => {
    let barFilled = '0%';

    if (props.maxValue > 0) {
        barFilled = Math.round(props.value / props.maxValue * 100) + '%';
    }

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let barStyle = {};
    if (width > 767) {
        barStyle = {height: barFilled};
    } else if (width <= 767) {
        barStyle = {width: barFilled};
    }

    return (
        <div className='diagram-bar'>
            <div className='diagram-bar__inner'>
                <div className='diagram-bar__fill' style={barStyle}>
                </div>
            </div>
            <div className='diagram-bar__label'>{props.label}</div>
        </div>
    );
}

export default DiagramBar;
