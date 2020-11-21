import React, {useState, useEffect} from 'react';
import { FlexBox } from './style';




//수동으로 저장된 레스토랑 목록.


const items = [
    {
        name: "데니스타코",
        src: require("../../img/데니스 타코 송파점.jpg")
    },
    {
        name: "가장맛있는족발 가락시장점",
        src: require("../../img/가장맛있는족발 가락시장점.jpg")
    },
    {
        name: "이가생삼겹살",
        src: require("../../img/이가생삼겹살.jpg")
    },
    {
        name: "함경도 찹쌀순대 가락시장점",
        src: require("../../img/함경도 찹쌀순대 가락시장점.jpg")
    },
    {
        name: "가락 골목냉면",
        src: require("../../img/가락 골목냉면.jpg")
    },
    {
        name: "오향가",
        src: require("../../img/오향가.jpg")
    },
    {
        name: "전주이맛콩나물국밥",
        src: require("../../img/전주이맛콩나물국밥.jpg")
    },
    {
        name: "홍콩반점",
        src: require("../../img/홍콩반점.jpg")
    }
]



const Game = () =>{

    //이것이 HOOK 이여(useState, useEffect)     [state변수, 해당 변수를 갱신하는 함수]
    const [foods, setFoods] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);


    useEffect(() => {
        items.sort(() => Math.random() - 0.5); //items 랜덤 정렬
        setFoods(items);
        setDisplays([items[0], items[1]]);
    }, [])

    //이미지 클릭시... 일어날 일들  게임 진행
    const clickHandler = food => () => {
        if(foods.length <= 2){
            if(winners.length === 0){
                setDisplays([food]);
            } else{
                let updatedFood = [...winners, food];
                setFoods(updatedFood);
                setDisplays([updatedFood[0], updatedFood[1]]);
                setWinners([]);
            }
        } else if(foods.length > 2){
            setWinners([...winners, food]);
            setDisplays([foods[2], foods[3]]);
            setFoods(foods.slice(2));
        }
    }

    //app.js 로 가는 JSX   보통 테이블같은걸 추가할때 map 을 씁니다.
    return (
    <FlexBox>
        <h1 className="title" id="title">Choose one !</h1>
        {displays.map(d => {
            return (
                <div className="flex-1" key={d.name} 
                onClick={clickHandler(d)}>
                <img className="food-img" src={d.src} alt={d.name}/>
                <div className="name">{d.name}</div>
            </div>
            )
        })}

    </FlexBox>
    );
};

export default Game;