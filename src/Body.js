import ResturantCard from "./ResturantCard";
import { restaurants } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom'


const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([])
    const [searchValue, setSearchValue] = useState('');



    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
    }, [searchValue])

    const fetchData = async () => {
        let Data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        let jsonData = await Data.json();
        const apiData = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfResturants(apiData)
        setFilteredResturants(apiData)

    }

    return (
        <div id='body'>
            <div id='search'>
                <input id='text-box' type='text' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}></input>
                <button onClick={() => {

                    const searchRes = listOfResturants.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
                    setFilteredResturants(searchRes)
                }
                }
                >Search</button>
                <button id='button' onClick={() => {
                    const resData = restaurants.filter(res => res.info.avgRating > 4.2);
                    setListOfResturants(resData)
                }}>Top Rated Resturants</button>
            </div>
            {filteredResturants?.length === 0 ? <Shimmer /> :
                <div id='res-container'>
                    {filteredResturants?.map((resData) => (
                        <Link to={'/resturant/' + resData?.info?.id} key={resData?.info.id}>
                            <ResturantCard key={resData?.info.id} resData={resData} />
                        </Link>

                    ))}
                </div>
            }

        </div>
    )
}

export default Body;