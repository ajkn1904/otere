
const Benefits = () => {
    return (
        <div className="w-[90vw] mx-auto px-10 pb-16">

            <div className="flex flex-col lg:flex-row justify-around items-center bg-white rounded-lg my-16 px-5 xl:px-0 lg:w-[80vw]">
                <div className="">
                    <div className="flex justify-between lg:justify-start items-center gap-5 w-80 sm:w-[60vw] lg:w-0">
                        <h1 className="text-[80px] font-bold text-[#68c96bdd]">01.</h1>
                        <h2 className="text-2xl font-bold mt-5 mb-3">Flexible <br /> working hours</h2>
                    </div>

                    <p className="text-xl md:text-lg text-gray-400 font-semibold w-96 hidden lg:block">You can decide when, and how much time to drive.</p>
                </div>
                <img src="/images/flexible.png" className="h-96 lg:h-80" alt="" />

                <p className="text-xl md:text-lg text-gray-400 font-semibold w-[95%] text-center lg:hidden mb-20">You can decide when, and how much time to drive.</p>
            </div>




            <div className="flex flex-col lg:flex-row justify-around items-center bg-white rounded-lg my-16 px-5 xl:px-0 lg:w-[80vw] lg:ml-20">

                <img src="/images/earning.png" className="h-96 lg:h-80 hidden lg:block" alt="" />

                <div className="">
                    <div className="flex justify-between lg:justify-start items-center gap-5 w-80 sm:w-[60vw] lg:w-0">
                        <h1 className="text-[80px] font-bold text-[#68c96bdd]">02.</h1>
                        <h2 className="text-2xl font-bold mt-5 mb-3">Earning</h2>
                    </div>
                    <p className="text-xl md:text-lg text-gray-400 font-semibold w-96 hidden lg:block">By driving tere you can earn more.</p>
                </div>

                <img src="/images/earning.png" className="h-96 lg:h-80 lg:hidden" alt="" />

                <p className="text-xl md:text-lg text-gray-400 font-semibold w-[95%] text-center lg:hidden mb-20">By driving tere you can earn more.</p>
            </div>



            <div className="flex flex-col lg:flex-row justify-around items-center bg-white rounded-lg my-16 px-5 xl:px-0 lg:w-[80vw]">
                <div className="">
                    <div className="flex gap-5 items-center">
                        <h1 className="text-[80px] font-bold text-[#68c96bdd]">03.</h1>
                        <h2 className="text-2xl font-bold mt-5 mb-3">Customer <br />
                            support 24/7</h2>
                    </div>
                    <p className="text-xl md:text-lg text-gray-400 font-semibold w-96 hidden lg:block">Tere is a local service and we are proud to support you in your local language. We are proud to be at your service 24/7!</p>
                </div>
                <img src="/images/support.png" className="h-96 lg:h-80" alt="" />
                <p className="text-xl md:text-lg text-gray-400 font-semibold w-[95%] text-center lg:hidden mb-20">Tere is a local service and we are proud to support you in your local language. We are proud to be at your service 24/7!</p>
            </div>

        </div>
    );
};

export default Benefits;