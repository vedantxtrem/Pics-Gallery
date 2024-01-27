import { Route, Routes } from "react-router-dom";
import ImageList from "../ImageList/ImageList";
import ImageDetails from "../ImageDetails/ImageDetails";

function RoutesComponent(){
    return(
        <>
            <Routes>
                <Route path="/" element={ <ImageList/> }/>  
                <Route path="/ImageDetails/:id" element={ <ImageDetails/> }/>                
                              
            </Routes>
        </>
    );
}

export default RoutesComponent;