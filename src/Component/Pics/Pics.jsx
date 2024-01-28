import { Link } from "react-router-dom";


function Pics({image,id}){
    return(
        <Link to={`/Pics-Gallery/ImageDetails/${id}`} className=" w-full p-1 md:w-[18%] flex  items-center flex-col justify-between rounded-3xl m-2 hover:bg-gray-500">
            <img className="rounded-3xl hover:scale-110 duration-200 " src={image} alt="" />
        </Link>
    );
}
export default Pics;