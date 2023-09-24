/* eslint-disable react/prop-types */


const Card = ({ card }) => {
    const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color} = card;
    
    return (
        <div>
            <div className={`card card-compact bg-[${card_bg_color}]  shadow-xl`}>
                <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
                <div className="ml-4">
                    <button className={` pl-[10px] pr-[10px] py-1 text-sm font-medium text-center mt-4 rounded mb-2 text-[${text_button_bg_color}] bg-[${category_bg_color}]`}>{category}</button>
                    <h2 className={`mb-4 text-xl font-semibold text-[${text_button_bg_color}]`}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;