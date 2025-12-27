import ResturantCard from "./ResturantCard";
import { restaurants } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [filterData, setFilteredData] = useState(restaurants);
    return (
        <div id='body'>
            <div id='search'>
                <input id='text-box' type='text' defaultValue='typing..'></input>
                <button id='button' onClick={() => {
                    const resData = restaurants.filter(res => res.info.avgRating > 4.2);
                    setFilteredData(resData)
                    console.log(filterData)
                }}>Search</button>
            </div>
            <div id='res-container'>
                {filterData.map((resData) => (

                    <ResturantCard key={resData?.info.id} resData={resData} />

                ))}



            </div>

        </div>
    )
}

export default Body;