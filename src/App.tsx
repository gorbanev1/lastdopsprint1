import {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = 'USD'|'RUB'|'ALL'// создадим типы для banknotes -он может быть 'DOLLARS', 'RUBLS' или 'All'
export type MoneyType = {
    banknote: BanknotsType
    nominal: number// не ленимся, убираем заглушку, и пишем правильный тип)
    id: string// ложку за Димыча, за...
}

let defaultMoney: Array<MoneyType> = [  // типизируем
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: Array<MoneyType>, filter: BanknotsType): any => {
    switch (filter){
        case("USD"): return money.filter((b:MoneyType)=>b.banknote==='USD')
        case('RUB'): return money.filter((b:MoneyType)=>b.banknote==='RUB')
        case('ALL'): return money

    }
    //если пришел filter со значением 'All', то возвращаем все банкноты
    //return money.filter... ну да, придется фильтровать
}


export const App = () => {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('ALL')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
        return (
            setMoney([{banknote, nominal, id = v1()}, ...money,])
        )
    }

    const removeMoney = (banknote: BanknotsType) => {
        // Снятие денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
        // const index = money.findIndex
         if (index !== -1) {
             setMoney(money.filter((el, i) =>{el.banknote==}));
         }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
            />
        </div>
    );
}
