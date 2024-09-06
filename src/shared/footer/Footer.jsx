import CompanyName from "../companyname/CompanyName";
import icon from '../../assets/icon.png'
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
    return (
        <footer className="md:pt-padding_lg lg:pb-padding_md lg:px-padding_xl  md:px-padding_medium p-padding_medium bg-black text-white">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-start lg:mb-m_xl md:mb-m_lg mb-m_primary lg:gap-0 md:gap-8 gap-6">
                <div className="flex gap-1 items-center md:col-span-2">
                    <img src={icon} alt="icon" className="w-w_medium" />
                    <CompanyName textColor={"text-white"} />
                </div>
                <div>
                    <p className="text-text_base font-semibold mb-m_secondary">About US</p>
                    <div className="lg:space-y-3">
                        <p className="text-lg font-semibold text-footer_link hover:underline">Master Plan</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Jobs</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Invest</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Pressroom</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Blog</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Contact</p>
                    </div>
                </div>
                <div>
                    <p className="text-text_base font-semibold mb-m_primary ">Explore EEVE</p>
                    <div className="lg:space-y-3">
                        <p className="text-lg font-semibold text-footer_link hover:underline">Unlock my Robot Power</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Starlight</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Robot Platform</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">EEVE Roadmap</p>
                    </div>
                </div>
                <div>
                    <p className="text-text_base font-semibold mb-m_primary ">Community and Support</p>
                    <div className="lg:space-y-3">
                        <p className="text-lg font-semibold text-footer_link hover:underline">Willow X Community</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Developer & Maker Access</p>
                        <p className="text-lg font-semibold text-footer_link hover:underline">Special Cases</p>
                    </div>
                </div>
            </div>
            <div className="border-b border-[#252948] "></div>
            <div className="lg:mt-m_secondary mt-m_primary grid lg:grid-cols-4 grid-cols-1 lg:gap-0 gap-4 md:gap-8">
                <div className="flex items-center gap-4">
                    <SlSocialFacebook size={25} />
                    <FaInstagram size={25} />
                    <RiTwitterXFill size={25} />
                    <CiLinkedin size={30} />
                </div>
                <div className="flex items-center flex-wrap gap-gap_primary col-span-2">
                    <p className="text-lg font-semibold text-footer_link hover:underline no-wrap">March22 Recap</p>
                    <p className="text-lg font-semibold text-footer_link hover:underline no-wrap">Privacy Policy</p>
                    <p className="text-lg font-semibold text-footer_link hover:underline no-wrap">General Terms</p>
                    <p className="text-lg font-semibold text-footer_link hover:underline no-wrap">Contact</p>
                </div>
                <div className="flex items-center  gap-2 lg:justify-end">
                    <img className="w-4" src="https://cdn-icons-png.freepik.com/256/3127/3127492.png?ga=GA1.1.961467854.1725388054&semt=ais_hybrid" alt="" />
                    <p className="text-lg font-semibold text-footer_link hover:underline">United States (English)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;