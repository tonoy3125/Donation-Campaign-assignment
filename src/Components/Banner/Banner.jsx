import banner from "../../../images/banner.jpg";

const Banner = () => {
    return (
        <div className="-mt-[109px]">
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-[#FFFFFFF2]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 text-xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                        <div>
                            <div className="form-control">
                                <div className="input-group flex md:justify-center">
                                    <input type="text" placeholder="Search here...." className="input input-bordered md:w-[360px] md:h-[50px] text-[#0B0B0B26] text-sm font-normal" />
                                    <button className=" bg-[#FF444A] w-[90px] md:w-[110px] md:h-[50px] text-base font-semibold text-white text-center">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;