import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardApplication } from "../Utilities/LocalStorage";
import ShowDonateCard from "../ShowDonateCard/ShowDonateCard";


const Donate = () => {
    const cards = useLoaderData()
    const [moneyDonate, setMoneyDonate] = useState([])
    useEffect(() => {
        const storedCardIds = getStoredCardApplication()
        if (cards.length > 0) {
            const donateMoney = cards.filter(card => storedCardIds.includes(card.id))
            // console.log(cards,storedCardIds,donateMoney)
            setMoneyDonate(donateMoney)
        }

    }, [])
    return (
        <div className="container mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    moneyDonate.map(card => <ShowDonateCard key={card.id} card={card}></ShowDonateCard>)
                }
            </div>
        </div>
    );
};

export default Donate;