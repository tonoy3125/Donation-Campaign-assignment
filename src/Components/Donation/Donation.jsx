import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardApplication } from "../Utilities/LocalStorage";
import ShowDonateCard from "../ShowDonateCard/ShowDonateCard";


const Donate = () => {
    const cards = useLoaderData()
    const [moneyDonate, setMoneyDonate] = useState([])
    const [dataFound, setDataFound] = useState(false)
    const [isShow, setIsShow] = useState(4)
    const [seeAllClicked, setSeeAllClicked] = useState(false);
    useEffect(() => {
        const storedCardIds = getStoredCardApplication()
        if (cards.length > 0) {
            const donateMoney = cards.filter(card => storedCardIds.includes(card.id))
            // console.log(cards,storedCardIds,donateMoney)
            setMoneyDonate(donateMoney)
        }

        if (storedCardIds.length == 0) {
            setDataFound('No Data Found')
        }
        // console.log('moneyDonate:', moneyDonate);

    }, [cards])

    // console.log(moneyDonate.length)
    const handleRemove = () => {
        localStorage.clear()
        setMoneyDonate([])
        setDataFound('No Data Found')
    }


    const handleSeeAllClick = () => {
        setIsShow(moneyDonate.length);
        setSeeAllClicked(true);
    };

    return (
        <div className="container mx-auto mt-20">
            {dataFound ? <p className="h-80vh text-lg font-bold flex justify-center items-center mb-5">{dataFound}</p> :
                <div>
                    {moneyDonate.length > 0 && <button onClick={handleRemove} className="px-7 py-2 mb-5 bg-[#009444] rounded-lg block  mx-auto">Delete all</button>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            moneyDonate.slice(0, isShow).map(card => <ShowDonateCard key={card.id} card={card}></ShowDonateCard>)
                        }
                    </div>
                    <div className={moneyDonate.length > 4 && !seeAllClicked ? '' : 'hidden'}>
                        <button onClick={handleSeeAllClick} className="px-7 py-4 mt-7 bg-[#009444] rounded-lg block  mx-auto">See All</button>
                    </div>
                </div>}
        </div>
    );
};

export default Donate;