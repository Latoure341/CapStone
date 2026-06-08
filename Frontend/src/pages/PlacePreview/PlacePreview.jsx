import { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { NavBarContext } from "../../context/NavBarContext.jsx";
import { PlaceContainer } from './PlacePreview.styled.js';

const PlacePreview = () => {
    const {previewNavBar, setPreviewNavBar } = useContext(NavBarContext);
    
    return (
        <>
            <NavBar />
            <PlaceContainer>
                <h1>Name of the hotel in a place</h1>
                <span>
                    <p>Ratings</p>
                    <span>
                        <p>Share</p>
                        <p>Save</p>
                    </span>
                </span>
                <div>
                    <span>
                        <img src="#" alt="Important image"/>
                    </span>
                    <span>
                        <img src="#" alt="other pictures"/>
                        <img src="#" alt="other pictures"/>
                        <img src="#" alt="other pictures"/>
                        <img src="#" alt="other pictures"/>
                    </span>
                </div>
                <div>
                    <div>
                        <p>Details of the hotel</p>
                    </div>
                    <div>
                        <p>Pricing per night details</p>
                    </div>
                </div>
            </PlaceContainer>
        </>
    )
}

export default PlacePreview;