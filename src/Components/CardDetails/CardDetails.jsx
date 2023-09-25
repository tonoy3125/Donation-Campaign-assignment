/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveCardApplication } from "../Utilities/LocalStorage";

const CardDetails = () => {
    const cards = useLoaderData();
    const { id, picture, title, price, text_button_bg_color } = useParams();
    const idInt = parseInt(id)
    const card = cards.find(card => card.id === idInt)
    // console.log(card)



    const hanleDonate = () => {
        saveCardApplication(idInt)
        toast("You Have Donate Successfully!")
    }
    return (
        <div className="mt-20 container mx-auto bg-[#FFF]">
            <div>
                <img className="container mx-auto h-[700px] rounded-lg" src={card.picture} alt="" />
                <button onClick={hanleDonate} className={`py-4 px-7 text-white rounded`} style={{ backgroundColor: `${card.text_button_bg_color}` }}>Donate {card.price}</button>
            </div>
            <div className="mt-14 mb-28">
                <h1 className="text-[40px] font-bold text-[#0B0B0B] mb-6">{card.title}</h1>
                <p className="text-[#0B0B0BB3] font-normal text-base">{card.description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CardDetails;