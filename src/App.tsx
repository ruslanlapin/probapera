import React, {useState} from 'react';
import './App.css';

type FilterType = 'all'| 'dollar' | 'ruble'

function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', value: 100, nominal: ' a1234567890'},
        {banknote: 'dollar', value: 50, nominal: ' z1234567890'},
        {banknote: 'ruble', value: 100, nominal: ' w1234567890'},
        {banknote: 'dollar', value: 100, nominal: ' e1234567890'},
        {banknote: 'dollar', value: 50, nominal: ' c1234567890'},
        {banknote: 'ruble', value: 100, nominal: ' r1234567890'},
        {banknote: 'dollar', value: 50, nominal: ' x1234567890'},
        {banknote: 'ruble', value: 50, nominal: ' v1234567890'},
    ])

    const[filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar');
    }

    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble');
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index: number) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>

    );
}

export default App;

// В видео следующей строке в видео banknots заменили на banknote
// В видео следующей строке в видео value заменили на nominal