import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiHandbagSimpleBold } from "react-icons/pi";

const Products = () => {
    return (
        <div>
            <div className="md:py-padding_lg py-padding_md  lg:px-padding_xl  border grid md:grid-cols-4  lg:grid-cols-6 ">
                <div className="flex md:flex-col flex-row gap-2 p-padding_md border-r border-gray-300">
                    <button data-category="all" className="text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium  hover:bg-black hover:!text-white rounded-rounded_primary">
                        <p className=" font-semibold md:text-base text-sm text-nowrap">All Chair</p>
                    </button>
                    <button data-category="rockingChair" className="text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium  hover:bg-black hover:!text-white rounded-rounded_primary">
                        <p className=" font-semibold md:text-base text-sm text-nowrap">Rocking Chair</p>
                    </button>
                    <button data-category="sideChair" className="text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium  hover:bg-black hover:!text-white rounded-rounded_primary">
                        <p className=" font-semibold md:text-base text-sm text-nowrap">Side Chair</p>
                    </button>
                    <button data-category="loungeChair" className="text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium  hover:bg-black hover:!text-white rounded-rounded_primary">
                        <p className=" font-semibold md:text-base text-sm text-nowrap">Lounge Chair</p>
                    </button>
                </div>
                <div className="lg:col-span-5 md:col-span-3 mx-auto lg:mx-m_xl">
                    <div className="grid lg:grid-cols-3   grid-cols-1 items-center justify-evenly lg:gap-0 md:gap-gap_primary gap-gap_primary">
                        <div data-category="rockingChair" className="border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl hover:shadow-2xl">
                            <div className="w-[245px] h-[236px] bg-activeNav rounded-rounded_primary">
                                <img className="object-cover w-[205px] h-[205px] mx-auto" src="https://i.ibb.co.com/M8bdFTV/image-removebg-preview-24.png" alt="" />
                            </div>
                            <div className="space-y-3 ">
                                <p className="text-text_base font-bold">Chair Wood</p>
                                <div className="flex  items-center text-text_base font-bold gap-x-4">
                                    <p className=" ">$299.00</p>
                                    <p className=" line-through text-footer_link">$300.00</p>
                                    <p className=" text-discount">30% OFF</p>
                                </div>
                                <p className="text-footer_link text-[15px] w-[237px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                            </div>
                            <button className=" mt-m_primary  active:scale-95 transition-all ease-out text-start p-padding_medium  bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                                <PiHandbagSimpleBold size={20} />
                                <p className=" font-semibold">Add to Cart</p>
                            </button>
                        </div>
                        <div data-category="rockingChair" className="border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl hover:shadow-2xl">
                            <div className="w-[245px] h-[236px] bg-activeNav rounded-rounded_primary">
                                <img className="object-cover w-[205px] h-[205px] mx-auto" src="https://i.ibb.co.com/M8bdFTV/image-removebg-preview-24.png" alt="" />
                            </div>
                            <div className="space-y-3 ">
                                <p className="text-text_base font-bold">Chair Wood</p>
                                <div className="flex  items-center text-text_base font-bold gap-x-4">
                                    <p>$299.00</p>
                                    <p className="line-through text-footer_link">$300.00</p>
                                    <p className="text-discount">30% OFF</p>
                                </div>
                                <p className="text-footer_link text-[15px] w-[237px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                            </div>
                            <button className=" mt-m_primary  active:scale-95 transition-all ease-out text-start p-padding_medium  bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                                <PiHandbagSimpleBold size={20} />
                                <p className=" font-semibold">Add to Cart</p>
                            </button>
                        </div>
                        <div data-category="sideChair" className="border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl hover:shadow-2xl">
                            <div className="w-[245px] h-[236px] bg-activeNav rounded-rounded_primary">
                                <img className="object-cover w-[205px] h-[205px] mx-auto" src="https://i.ibb.co.com/M8bdFTV/image-removebg-preview-24.png" alt="" />
                            </div>
                            <div className="space-y-3 ">
                                <p className="text-text_base font-bold">Chair Wood</p>
                                <div className="flex  items-center text-text_base font-bold gap-x-4">
                                    <p>$299.00</p>
                                    <p className="line-through text-footer_link">$300.00</p>
                                    <p className="text-discount">30% OFF</p>
                                </div>
                                <p className="text-footer_link text-[15px] w-[237px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                            </div>
                            <button className=" mt-m_primary  active:scale-95 transition-all ease-out text-start p-padding_medium  bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                                <PiHandbagSimpleBold size={20} />
                                <p className=" font-semibold">Add to Cart</p>
                            </button>
                        </div>
                        <div data-category="loungeChair" className="border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl hover:shadow-2xl">
                            <div className="w-[245px] h-[236px] bg-activeNav rounded-rounded_primary">
                                <img className="object-cover w-[205px] h-[205px] mx-auto" src="https://i.ibb.co.com/M8bdFTV/image-removebg-preview-24.png" alt="" />
                            </div>
                            <div className="space-y-3 ">
                                <p className="text-text_base font-bold">Chair Wood</p>
                                <div className="flex  items-center text-text_base font-bold gap-x-4">
                                    <p>$299.00</p>
                                    <p className="line-through text-footer_link">$300.00</p>
                                    <p className="text-discount">30% OFF</p>
                                </div>
                                <p className="text-footer_link text-[15px] w-[237px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad.</p>
                            </div>
                            <button className=" mt-m_primary  active:scale-95 transition-all ease-out text-start p-padding_medium  bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                                <PiHandbagSimpleBold size={20} />
                                <p className=" font-semibold">Add to Cart</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" flex justify-center items-center md:pb-padding_lg pb-padding_md ">
                <ul className="flex space-x-3 justify-center w-fit mx-auto">
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 cursor-pointer bg-gray-300 w-9 h-8 rounded">

                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-black cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded">
                        1
                    </li>
                    <li
                        className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link cursor-pointer text-sm font-bold  w-9 h-8 rounded">
                        2
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded">
                        ...
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded">
                        9
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded">
                        10
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 cursor-pointer border  w-9 h-8 rounded border-footer_link">
                        <MdOutlineKeyboardArrowRight size={20} className="text-footer_link" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Products;