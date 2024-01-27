import axios from "axios";

import { useEffect, useState } from "react";

import Pics from "../Pics/Pics.jsx";

function ImageList() {

    const [imageList, setimageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    async function downloadImage() {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos')
        console.log(response);

        const Result = response.data.photos;

        console.log(Result);

        const imageListres = await Result.map((images) => {

            return {
                image: images.url,
                id : images.id,
            }
        })
        console.log(imageListres);

        setimageList(imageListres);
        setIsLoading(false);
    }



    useEffect(() => {
        downloadImage();
    }, [])


    return (
        <div className="w-full flex justify-center">
            <div className="w-[80%] p-5 flex justify-center flex-wrap">
                {(isLoading) ? 'loding...' : imageList.map((i) => <Pics image={i.image} id={i.id}/>)}
            </div>
        </div>

    )

}

export default ImageList;