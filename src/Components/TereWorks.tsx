
const TereWorks = () => {
    return (
        <div className="w-[90vw] lg:w-[960px] xl:w-[1200px] max-w-[1200px] mx-auto px-10">

            <h1 className="text-3xl xl:text-4xl font-bold text-center mt-20 md:mt-28 ">HOW <span className="text-[#68c96bdd]">TERE</span> WORKS</h1>
            <p className="text-xl md:text-lg text-center text-gray-400 font-semibold mt-10 mb-16 md:w-[50vw] lg:w-[480px] mx-auto">Download ans install the tere app. Enter your phone number anf make your user account, when approved you may start driving.</p>


            <div className="md:flex flex-wrap gap-x-4 relative">


                <div className="w-[80vw] mx-auto lg:w-[280px] xl:w-[350px] h-[270px] flex flex-col items-center lg:items-end lg:mt-12 lg:order-1">
                    <img src="/images/service1.png" alt="service1" />
                    <h2 className="text-xl font-bold mt-5 mb-3">REQUEST A RIDE</h2>
                    <p className="text-xl md:text-lg text-gray-400 font-semibold text-center lg:text-right">Have to reach office or going for shopping? Just put your current location and destination and search a ride that suits you. </p>
                </div>



                <div className=" mx-auto -order-1 lg:order-2 mb-20 lg:mb-0">
                    <img src="/images/service.png" className="h-[650px] lg:w-[280px] xl:w-[380px]" alt="" />
                    <p className="text-8xl text-[#68c96b67] text-center"> <span className="text-[#68c96bdd]">.</span>...</p>
                    <h1 className="text-3xl xl:text-4xl font-bold text-center mt-10 md:mt-16 lg:hidden"><span className="text-[#68c96bdd]">TERE</span> BENEFITS</h1>
                </div>



                <div className="w-[80vw] mx-auto lg:w-[280px] xl:w-[350px] h-[270px] flex flex-col items-center lg:items-start lg:mt-12 lg:order-3">
                    <img src="/images/service2.png" alt="service2" />
                    <h2 className="text-xl font-bold mt-5 mb-3">POST A RIDE</h2>
                    <p className="text-xl md:text-lg text-gray-400 font-semibold text-center md:text-left">Going somewhere but hate to travel alone - just post ride details and publish it.</p>
                </div>



                <div className="w-[80vw] mx-auto lg:w-[280px] xl:w-[350px] h-[270px] flex flex-col items-center lg:items-end lg:absolute lg:top-[340px] lg:left-[1px] lg:order-4">
                    <img src="/images/service3.png" alt="service3" />
                    <h2 className="text-xl font-bold mt-5 mb-3">INSTANT NOTIFICATIONS</h2>
                    <p className="text-xl md:text-lg text-gray-400 font-semibold text-center lg:text-right">Get instant notifications for your rides and be in contact with fellow rides all the time.</p>
                </div>
                <div className="w-[80vw] mx-auto lg:w-[280px] xl:w-[350px] h-[270px] flex flex-col items-center lg:items-start lg:absolute lg:top-[340px] lg:right-[2.5px] lg:order-5">
                    <img src="/images/service4.png" alt="service4" />
                    <h2 className="text-xl font-bold mt-5 mb-3">CASHLESS PAYMENT</h2>
                    <p className="text-xl md:text-lg text-gray-400 font-semibold text-center md:text-left">Payment made easy by using your own Wallet - no more cash to carry.</p>
                </div>

            </div>



        </div >
    );
};

export default TereWorks;