import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { ImCloudDownload } from 'react-icons/im';



const Header = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row bg-gray-100">

            <div className="p-10 lg:p-16 w-full mx-auto md:w-[50%]">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center md:text-left md:mt-32 lg:mt-36 xl:mt-32">DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h1>
                <p className="text-xl md:text-lg text-center md:text-left text-gray-400 font-semibold mt-10">Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for?</p>
                <p className="text-xl md:text-lg text-center md:text-left text-gray-400 font-semibold mb-10">Lets ride together</p>
                <div className='flex gap-3 sm:gap-5 justify-center md:justify-start mt-10'>
                    <div className='bg-black text-white text-sm sm:text-lg font-bold flex items-center gap-1 sm:gap-4 px-2 sm:px-5 lg:px-8 py-3 rounded'>
                        <IoLogoGooglePlaystore />
                        <button>DOWNLOAD</button>
                    </div>
                    <div className='bg-black text-white text-sm sm:text-lg font-bold flex items-center gap-1 sm:gap-4 px-2 sm:px-5 lg:px-8 py-3 rounded'>
                        <ImCloudDownload />
                        <button>DOWNLOAD</button>
                    </div>
                </div>
            </div>


            <img src="/images/header.png" className="w-[90vw] md:w-[50%] md:pr-16 h-[600px]" alt="" />

        </div>
    );
};

export default Header;