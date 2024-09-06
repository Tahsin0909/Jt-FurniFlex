import { useEffect, useRef, useState } from "react";
import logo from '../../assets/Logo (1).png'
import { Link, useLocation } from "react-router-dom";
import { PiHandbagSimpleBold } from "react-icons/pi";
const Navbar = () => {

    const [selected, setSelected] = useState('');
    const location = useLocation();

    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event?.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    const handleActiveNav = (path) => {
        setSelected(path);
    };

    return (
        <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <a href="#">
                    <img className={`${isOpen ? 'hidden' : 'block'} w-36`} src={logo} alt="logo" />
                </a>

                <div
                    id="collapseMenu"

                    className={`${isOpen ? 'block' : 'hidden'} max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 lg:!block`}
                >
                    <ul ref={ref} className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='mb-6 hidden max-lg:block'>
                            <Link to={'/'}>
                                <img src={logo} alt="logo" className='w-36' />
                            </Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link onClick={() => handleActiveNav('/')} className={` ${selected === '/' ? "p-3 rounded-rounded_primary font-semibold bg-activeNav" : ""}`}>Home</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link onClick={() => handleActiveNav('/products')} className={` ${selected === '/products' ? "p-3 rounded-rounded_primary font-semibold bg-activeNav" : ""}`}>Products</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link onClick={() => handleActiveNav('/categories')} className={` ${selected === '/categories' ? "p-3 rounded-rounded_primary font-semibold bg-activeNav" : ""}`}>Categories</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link onClick={() => handleActiveNav('/checkout')} className={` ${selected === '/checkout' ? "p-3 rounded-rounded_primary font-semibold bg-activeNav" : ""}`}>Checkout</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex max-lg:ml-auto space-x-3'>


                    <button className=''>
                        <PiHandbagSimpleBold size={30}/>
                    </button>


                    <button className=''>
                        Sign In
                    </button>


                    <button id="toggleOpen" onClick={handleClick} className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
