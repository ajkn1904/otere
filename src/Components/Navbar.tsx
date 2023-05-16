import Link from "next/link";

const Navbar = () => {

    const menu = <>

        <li><Link href='/' className='btn btn-ghost rounded font-semibold font-serif text-black hover:bg-green-600 hover:text-white'>Home</Link></li>
        <li><Link href='/' className='btn btn-ghost rounded font-semibold font-serif text-black hover:bg-green-600 hover:text-white'>How tere works</Link></li>
        <li><Link href='/' className='btn btn-ghost rounded font-semibold font-serif text-black hover:bg-green-600 hover:text-white'>Tere benefits</Link></li>
        <li><Link href='/' className='btn btn-ghost bg-[#68c96bdd] text-white rounded font-semibold font-serif hover:bg-green-600 hover:text-white'>Help Center</Link></li>



    </>


    return (
        <nav className="navbar bg-white">
            <div className="navbar-start">
                <Link href="/" className="mx-2 w-32"><img src='https://i.ibb.co/Wyx186X/logo.png' alt="logo" /></Link>
            </div>


            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>


            <div className="navbar-end lg:hidden">
                <div className="dropdown" style={{ position: 'relative' }}>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
                        </svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52" style={{ position: 'absolute', right: 0, left: 'auto' }}>
                        {menu}
                    </ul>
                </div>
            </div>



        </nav >
    );
};

export default Navbar;