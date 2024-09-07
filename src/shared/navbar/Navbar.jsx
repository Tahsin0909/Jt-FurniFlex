import { useEffect, useRef, useState } from "react";
import logo from '../../assets/Logo (1).png';
import { Link, useLocation } from "react-router-dom";
import { PiHandbagSimpleBold, PiSignOut } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import useContextApi from "../../hooks/useContextApi";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { cartsData} = useCart()
    const { AuthUser, LogOut} = useContextApi()
    console.log(AuthUser?.photoURL);
    // State to track the selected path
    const [selected, setSelected] = useState('');
    const location = useLocation(); // To detect changes in the route

    const ref = useRef(null); // Reference for the collapsible menu
    const [isOpen, setIsOpen] = useState(false); // State for toggling the menu visibility

    // Toggles the menu open/close
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // Closes the menu if the user clicks outside of it
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event?.target)) {
            setIsOpen(false);
        }
    };

    // Monitor window resize to automatically close the menu on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false); // Close the menu when window width exceeds 768px
            }
        };

        window.addEventListener("resize", handleResize); // Listen for window resize events

        handleResize(); // Initial check on component mount

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup on component unmount
        };
    }, []); // Empty dependency means this runs once after the component mounts

    // Monitor clicks outside the menu to close it
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount or when menu is closed
        };
    }, [isOpen]); // Dependency on isOpen so this effect runs when the menu state changes

    // Update the selected path whenever the route changes
    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]); // Re-run this effect whenever the current route changes

    // Set the selected navigation link
    const handleActiveNav = (path) => {
        setSelected(path); // Set the active state for the clicked navigation item
    };
    return (
        <header className='flex border-b py-padding_md lg:px-padding_xl sm:px-padding_small p-padding_medium bg-white tracking-wide relative'>
            <div className='flex flex-wrap items-center justify-between gap-gap_primary w-full'>
                <Link to={'/'}>
                    {/* Logo visible when the menu is not open */}
                    <img className={`${isOpen ? 'hidden' : 'block'} w-w_logo`} src={logo} alt="logo" />
                </Link>

                {/* Collapsible menu and navbar */}
                <div id="collapseMenu"
                    className={`${isOpen ? 'block' : 'hidden'}  max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:z-50 lg:!block`}
                >
                    <ul ref={ref} className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-w_drawer max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 '>
                        {/* Logo inside the collapsible menu */}
                        <li className='mb-6 hidden max-lg:block'>
                            <Link to={'/'}>
                                <img src={logo} alt="logo" className='w-w_logo' />
                            </Link>
                        </li>

                        {/* Navigation links */}
                        <li className='max-lg:border-b border-gray-300 max-lg:py-padding_medium px-padding_medium'>
                            <Link onClick={() => handleActiveNav('/')} to={'/'} className={` ${selected === '/' ? "p-padding_medium rounded-rounded_primary font-semibold bg-activeNav" : ""} hover:bg-activeNav p-padding_medium rounded-rounded_primary`}>Home</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-padding_medium px-padding_medium'>
                            <Link onClick={() => handleActiveNav('/products')} to={'/products'} className={` ${selected === '/products' ? "p-padding_medium rounded-rounded_primary font-semibold bg-activeNav" : ""} hover:bg-activeNav p-padding_medium rounded-rounded_primary`}>Products</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-padding_medium px-padding_medium'>
                            <Link onClick={() => handleActiveNav('/categories')} to={'/categories'} className={` ${selected === '/categories' ? "p-padding_medium rounded-rounded_primary font-semibold bg-activeNav" : ""} hover:bg-activeNav p-padding_medium rounded-rounded_primary`}>Categories</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-padding_medium px-padding_medium'>
                            <Link onClick={() => handleActiveNav('/cart')} to={'/cart'} className={` ${selected === '/cart' ? "p-padding_medium rounded-rounded_primary font-semibold bg-activeNav" : ""} hover:bg-activeNav p-padding_medium rounded-rounded_primary`}>Cart</Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-padding_medium px-padding_medium'>
                            <Link onClick={() => handleActiveNav('/checkout')} to={'/checkout'} className={` ${selected === '/checkout' ? "p-padding_medium rounded-rounded_primary font-semibold bg-activeNav" : ""} hover:bg-activeNav p-padding_medium rounded-rounded_primary`}>Checkout</Link>
                        </li>
                    </ul>
                </div>

                {/* Right side of the navbar */}
                <div className='flex items-center max-lg:ml-auto space-x-3'>
                    {/* Shopping bag with badge */}
                    <Link to={'/cart'} className='relative'>
                        <span className="absolute text-center text-white w-w_base h-h_base -bottom-1 -right-1 text-text_small rounded-full bg-black">{cartsData?.length}</span>
                        <PiHandbagSimpleBold size={35} />
                    </Link>

                    {
                        AuthUser ? (
                            // sign out button 
                            <Link onClick={LogOut} className='group flex items-center gap-1 p-padding_small rounded-rounded_primary bg-primary bg-opacity-90 group-hover:opacity-100 text-white active:scale-95 transition-all ease-linear'>
                                <PiSignOut size={20} className="opacity-90 group-hover:opacity-100" />
                                <span className="opacity-90 group-hover:opacity-100">Sign Out</span>
                            </Link>
                        )
                            :
                            (
                                // sign in button 
                                <Link to={'/SignIn'} className='group flex items-center gap-1 p-padding_small rounded-rounded_primary bg-primary bg-opacity-90 group-hover:opacity-100 text-white active:scale-95 transition-all ease-linear'>
                                    <CiLogin size={20} className="opacity-90 group-hover:opacity-100" />
                                    <span className="opacity-90 group-hover:opacity-100">SignIn</span>
                                </Link>
                            )
                    }
                    {/* User profile picture */}
                    <img className="w-w_medium h-h_medium object-cover rounded-full" src={AuthUser?.photoURL ? AuthUser?.photoURL : "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?ga=GA1.1.961467854.1725388054&semt=ais_hybrid"} alt="profile" />

                    {/* Menu toggle button for smaller screens */}
                    <button id="toggleOpen" onClick={handleClick} className='lg:hidden'>
                        <MdMenu size={30} />
                    </button>
                </div>
            </div>
        </header >
    );
};

export default Navbar;
