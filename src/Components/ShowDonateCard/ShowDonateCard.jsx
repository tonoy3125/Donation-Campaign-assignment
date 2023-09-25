

const ShowDonateCard = ({ card }) => {
    const { id, picture, price, category, title, category_bg_color, card_bg_color, text_button_bg_color } = card;
    return (
        <div>
            <div className={`card-compact rounded-lg shadow-xl lg:flex`} style={{ backgroundColor: `${card_bg_color}` }}>
                <div>
                    <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
                </div>
                <div className="ml-6">
                    <button className={` pl-[10px] pr-[10px] py-1 text-sm font-medium text-center mt-4 rounded mb-2 `} style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }}>{category}</button>

                    <h2 className="mb-2 text-2xl font-semibold text-[#0B0B0B]" >{title}</h2>
                    <p className={`text-base font-bold mb-5`} style={{ color: `${text_button_bg_color}` }} >{price}</p>
                    <button className={`py-2 px-4 text-white rounded`} style={{ backgroundColor: `${text_button_bg_color}` }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ShowDonateCard;