/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color } = card;

    return (
        <div>
            <Link to={`/donation/${id}`}><div className={`card card-compact shadow-xl`} style={{ backgroundColor: `${card_bg_color}` }}>
                <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
                <div className="ml-4">
                    <button className={` pl-[10px] pr-[10px] py-1 text-sm font-medium text-center mt-4 rounded mb-2 `} style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }}>{category}</button>
                    <h2 className={`mb-4 text-xl font-semibold`} style={{ color: `${text_button_bg_color}` }}>{title}</h2>
                </div>
            </div></Link>
        </div>
    );
};

export default Card;