import { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { NavBarContext } from "../../context/NavBarContext.jsx";
import { PlaceContainer } from './PlacePreview.styled.js';
import { FaRegShareFromSquare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const PlacePreview = () => {
    const {previewNavBar, setPreviewNavBar } = useContext(NavBarContext);

    const itemListing = JSON.parse(localStorage.getItem("itemListing"))
    const bufferImage = itemListing.images[0].data
    
    return (
        <>
            <NavBar />
            <PlaceContainer>
                <h1>{itemListing.listName}</h1>
                <span>
                    <p>⭐ 5.0</p>
                    <span>
                        <FaRegShareFromSquare />
                        <p>Share</p>
                        <CiHeart />
                        <p>Save</p>
                    </span>
                </span>
                <div>
                    <span>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="Important image"/>
                    </span>
                    <span>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                    </span>
                </div>
                <div>
                    <div>
                        <p>{itemListing.description}</p>
                    </div>
                    <div>
                        <p>R {itemListing.price}</p>
                    </div>
                </div>
            </PlaceContainer>
        </>
    )
}

export default PlacePreview;