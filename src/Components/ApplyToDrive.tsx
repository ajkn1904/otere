
const ApplyToDrive = () => {


    return (
        <div className="w-[80vw] lg:w-[90vw] mx-auto rounded-md h-[350px] md:h-[150px] font-serif bg-[#78c968d1] p-5 my-16 flex flex-col md:flex-row justify-between items-center lg:px-10" >
            <h1 className="text-2xl sm:text-3xl md:text-sm xl:text-lg font-semibold text-center text-white mt-10 mb-5 md:mt-0 md:mb-0 mx-auto md:mx-0 md:w-[200px]">Let's go. Get a link to download the app.</h1>

            <div className="flex flex-col md:flex-row gap-3">


                <input type="email" placeholder="Enter mobile phone number" className="input text-lg text-center md:text-left rounded w-[70vw] md:w-full lg:w-[500px]" />
                <div className='bg-black text-white lg:text-lg font-bold px-5 py-3 h-12 rounded text-center w-full lg:w-[230px] mt-5 mb-8 md:mt-0 md:mb-0'>APPLY TO DRIVE</div>

            </div>
        </div>
    );
};

export default ApplyToDrive;