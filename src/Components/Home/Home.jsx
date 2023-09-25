import { useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";


const Home = () => {
    const [searchItem,setSearchItem] = useState("")

    



    return (
        <div>
            <Banner setSearchItem={setSearchItem} searchItem={searchItem}></Banner>
            <Cards searchItem={searchItem}></Cards>
        </div>
    );
};

export default Home;