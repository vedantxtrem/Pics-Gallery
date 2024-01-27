import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ImageDetails() {

    const { id } = useParams();
    const [image, setimage] = useState({});

    async function downloadimagedetails() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response);

        const result = response.data.photo;
        console.log(result);

        setimage({
            Title: result.title,
            image: result.url,
            description: result.description,
        })
    }

    useEffect(() => {
        downloadimagedetails();
    }, [])
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col text-center  ">
            <div className="border-2 border-green-400 w-fit p-10 flex  flex-col justify-between rounded-3xl m-2 hover:bg-gray-700">
                <h1>{image.Title}</h1>
                <img src={image.image} alt="" />
                <p>{image.description}</p>
            </div>

        </div>
    );
}
export default ImageDetails;