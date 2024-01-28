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
        <div className="w-full h-screen flex justify-center md:mt-10 text-center ">
            <div className="bg-blue-950  h-1/2  w-1/2 p-4  flex  justify-between items-center text-left m-2  ">

                <img className=" w-[40%] border-2 border-blue-500 hover:scale-110 duration-200 h-[90%] rounded-2xl" src={image.image} alt="" />
                <div className="pl-3 text-white">
                    <h1 className="font-extrabold font-mono text-3xl p-5 animate-pulse duration-75 delay-700 ">{image.Title}</h1>
                    <hr />
                    <p className="p-3 h-[70%] font-mono flex justify-center items-center font-bold">{image.description}</p>
                </div>
            </div>

        </div>
    );
}
export default ImageDetails;