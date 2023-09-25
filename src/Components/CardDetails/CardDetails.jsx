import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const {id,picture} = useParams();
    const idInt = parseInt(id)
    const card = cards.find(card => card.id === idInt)
    // console.log(card)
    return (
        <div>
            <img className="container mx-auto h-[700px] rounded-lg" src={card.picture} alt="" />
        </div>
    );
};

export default CardDetails;