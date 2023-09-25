import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = ({searchItem}) => {


    const [showCards, setShowCards] = useState([])
    const filterData = showCards ?.filter((item)=> {
        if(item && item.category){
            return item.category.toLowerCase().includes(searchItem.toLowerCase())
        }
        return false
    })

        useEffect(() => {
            fetch('data.json')
                .then(res => res.json())
                .then(data => setShowCards(data))
        }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto mt-24 mb-24">
            {
                filterData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;