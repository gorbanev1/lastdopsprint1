import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}

export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {
    // с деструктуризацией пожалуйста
    return (
        <div>
            {/*// ВНАЧАЛЕ НАПИШЕМ СОВСЕМ НЕКРАСИВО*/}
            {/*// money.banknote==='USD'?*/}
            {/*//     (  <Banknote color={ТЕРНАРНЫЙ ОПЕРАТОР}>*/}
            {/*//                  <Name>{money.banknote}</Name>*/}
            {/*//                  <Nominal>{money.nominal}</Nominal>*/}
            {/*//              </Banknote>)*/}
            {/*//     :             (  <Banknote color={ТЕРНАРНЫЙ ОПЕРАТОР}>*/}
            {/*//         <Name>{money.banknote}</Name>*/}
            {/*//         <Nominal>{money.nominal}</Nominal>*/}
            {/*//     </Banknote>)*/}


            // А ТЕПЕРЬ КРАСИВО
            <Banknote color={money.banknote === 'USD' ? "aquamarine" : "lightskyblue"}>
                <Name>{money.banknote}</Name>
                <Nominal>{money.nominal}</Nominal>
            </Banknote>

        </div>
    );
};


const BanknoteGreen = styled.div`
    background-color: aquamarine;
    width: 400px;
    height: 200px;
    margin: 10px;
`

const BanknoteBlue = styled.div`
    background-color: lightskyblue;
    width: 400px;
    height: 200px;
    margin: 10px;
`

const Banknote = styled.div`
    // background-color: ...
    width: 200px;
    height: 100px;
    margin: 5px;
    background-color: ${props => props.color || ""};
`


const Name = styled.span`
    display: flex;
    justify-content: center;
    font-size: 15px;
`

const Nominal = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 45px;
`
