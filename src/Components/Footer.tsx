import { ImCloudDownload } from "react-icons/im";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="bg-gray-100 lg:bg-white font-serif">

            <div className="w-[90vw] mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left pb-10 lg:pt-10 px-5">

                <img src="/images/logo.png" className="mb-10 lg:mb-0 order-1" alt="" />


                <div className="w-52 order-3 lg:order-2">
                    <h2 className="text-2xl font-bold">Be Our Friend</h2>
                    <p className="text-lg lg:text-sm my-2 text-gray-400">3, Season PArk, Jakarta</p>
                    <p className="text-lg lg:text-sm my-2 text-gray-400">suppot@foodyar.co,id </p>
                    <p className="text-lg lg:text-sm my-2 text-gray-400"> 021 - 1111 - 2222</p>
                </div>


                <div className="w-52 lg:order-3 hidden lg:block">
                    <h2 className="text-2xl font-bold">Be Our Friend</h2>
                    <p className="text-lg lg:text-sm my-2 text-gray-400">3, Season PArk, Jakarta</p>
                    <p className="text-lg lg:text-sm my-2 text-gray-400">suppot@foodyar.co,id </p>
                    <p className="text-lg lg:text-sm my-2 text-gray-400"> 021 - 1111 - 2222</p>
                </div>


                <div className='flex flex-col md:flex-row gap-2 justify-center md:justify-start mt-4 lg:mt-0 mb-16 lg:mb-0 order-2 lg:order-4'>
                    <div className='bg-black text-white lg:text-lg font-bold flex items-center gap-2 px-5 lg:px-3 py-3 rounded'>
                        <IoLogoGooglePlaystore />
                        <button>DOWNLOAD</button>
                    </div>
                    <div className='bg-black text-white lg:text-lg font-bold flex items-center gap-2 px-5 lg:px-3 py-3 rounded'>
                        <ImCloudDownload />
                        <button>DOWNLOAD</button>
                    </div>
                </div>


            </div>

            <hr className="hidden lg:block" />

            <small className="text-gray-400 lg:text-green-400 flex justify-center py-5">All Rights Reserved tere by Codematics 2022</small>
        </div>
    );
};

export default Footer;