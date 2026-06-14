import { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { NavBarContext } from "../../context/NavBarContext.jsx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { PlaceContainer, ListingDesc, ListingDetails, ImageContainer,
    ImageGrid, MainImageContainer
 } from './PlacePreview.styled.js';

const PlacePreview = () => {
    const {previewNavBar, setPreviewNavBar } = useContext(NavBarContext);
    console.log(previewNavBar)

    const itemListing = JSON.parse(localStorage.getItem("itemListing"))
    const bufferImage = itemListing.images[0].data
    
    return (
        <>
            <NavBar />
            <PlaceContainer>
                <h1>{itemListing.listName}</h1>
                <ListingDesc>
                    <ListingDetails>
                        <p className="star">⭐</p>
                        <p>5.0</p>
                        <p>200 reviews</p>
                        <p>{itemListing.location}</p>
                    </ListingDetails>
                    <ListingDetails>
                        <FaRegShareFromSquare />
                        <p>Share</p>
                        <CiHeart />
                        <p>Save</p>
                    </ListingDetails>
                </ListingDesc>
                <ImageContainer>
                    <MainImageContainer>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="Important image"/>
                    </MainImageContainer>
                    <ImageGrid>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                        <img src={`data:image/jpeg;base64,${bufferImage}`} alt="other pictures"/>
                    </ImageGrid>
                </ImageContainer>
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