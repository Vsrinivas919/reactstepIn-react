import { useEffect, useState } from "react";
import { data } from './../utils/mockDataResturant'


const ResturantMenu = () => {
    // const [resData, setResData] = useState('');
    // console.log("resData", resData)
    const { name, costForTwoMessage, avgRating } = data?.cards[2]?.card?.card?.info
    const itemList = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    console.log(itemList[1]?.card?.card?.itemCards)

    // useEffect(() => {
    //     setResData(data)
    //     // fetchData();
    // }, [])

    // const fetchData = async () => {
    //     const Data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=655980&catalog_qa=undefined&submitAction=ENTER')

    //     console.log("Data", Data)
    //     const jsonData = await Data.json();


    //     console.log("jsonData", jsonData)
    // }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{costForTwoMessage} -   {avgRating} stars</h2>
            <h2>Menu</h2>
            <ul>{itemList[1]?.card?.card?.itemCards.map((res) => (
                <li key={res.card.info.id}>{res.card.info.name} - Rs {res.card.info.price / 100}</li>
            ))
            }</ul>

        </div>
    )
}

export default ResturantMenu;