import { RES_LOGO } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, sla, costForTwo, cloudinaryImageId } = resData?.info
    console.log("props", props)
    return (
        <div id='res-card'>

            <img id='res-logo'
                src={RES_LOGO + cloudinaryImageId}
            ></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} Stars</h3>
            <h3>{sla.slaString}</h3>
            <h3>{costForTwo}</h3>

        </div>
    )
}

export default ResturantCard;