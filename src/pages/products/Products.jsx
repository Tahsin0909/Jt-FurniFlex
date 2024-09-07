import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiHandbagSimpleBold } from "react-icons/pi";
import useProducts from "../../hooks/useProducts";

const Products = () => {
    const [filter, setFilter] = useState("all");

    const { productsData, productLoading } = useProducts()


    const filteredProducts = filter === "all" ? productsData : productsData.filter(product => product.category === filter);

    return (
        <div>
            <div className="md:py-padding_lg py-padding_md lg:px-padding_xl  grid md:grid-cols-4 lg:grid-cols-6">
                <div className="flex md:flex-col flex-row gap-2 p-padding_md border-r border-gray-300">
                    <button
                        onClick={() => setFilter("all")}
                        className={`text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium hover:bg-black hover:text-white rounded-rounded_primary ${filter === "all" ? "bg-black text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">All Chair</p>
                    </button>
                    <button
                        onClick={() => setFilter("rockingChair")}
                        className={`text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium hover:bg-black hover:text-white rounded-rounded_primary ${filter === "rockingChair" ? "bg-black text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">Rocking Chair</p>
                    </button>
                    <button
                        onClick={() => setFilter("sideChair")}
                        className={`text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium hover:bg-black hover:text-white rounded-rounded_primary ${filter === "sideChair" ? "bg-black text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">Side Chair</p>
                    </button>
                    <button
                        onClick={() => setFilter("loungeChair")}
                        className={`text-footer_link active:scale-95 transition-all ease-out text-start p-padding_small md:p-padding_medium hover:bg-black hover:text-white rounded-rounded_primary ${filter === "loungeChair" ? "bg-black text-white" : ""}`}
                    >
                        <p className="font-semibold md:text-base text-sm text-nowrap">Lounge Chair</p>
                    </button>

                </div>
                <div className="lg:col-span-5 md:col-span-3 mx-auto lg:mx-m_xl">
                    {
                        productLoading ? (
                            <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-evenly lg:gap-y-gap_primary md:gap-gap_primary gap-gap_primary">
                                <div className="product-skeleton border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl animate-pulse">
                                    <div className="w-[245px] h-[236px] bg-gray-300 rounded-rounded_primary">
                                        <div className="bg-gray-300 w-[205px] h-[205px] mx-auto"></div>
                                    </div>
                                    <div className="space-y-3 mt-4">
                                        <div className="bg-gray-200 h-6 w-3/4"></div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                        </div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                    </div>
                                    <div className="bg-gray-300 h-12 mt-m_primary w-full rounded-rounded_primary"></div>
                                </div>
                                <div className="product-skeleton border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl animate-pulse">
                                    <div className="w-[245px] h-[236px] bg-gray-300 rounded-rounded_primary">
                                        <div className="bg-gray-300 w-[205px] h-[205px] mx-auto"></div>
                                    </div>
                                    <div className="space-y-3 mt-4">
                                        <div className="bg-gray-200 h-6 w-3/4"></div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                        </div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                    </div>
                                    <div className="bg-gray-300 h-12 mt-m_primary w-full rounded-rounded_primary"></div>
                                </div>
                                <div className="product-skeleton border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl animate-pulse">
                                    <div className="w-[245px] h-[236px] bg-gray-300 rounded-rounded_primary">
                                        <div className="bg-gray-300 w-[205px] h-[205px] mx-auto"></div>
                                    </div>
                                    <div className="space-y-3 mt-4">
                                        <div className="bg-gray-200 h-6 w-3/4"></div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                        </div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                    </div>
                                    <div className="bg-gray-300 h-12 mt-m_primary w-full rounded-rounded_primary"></div>
                                </div>
                                <div className="product-skeleton border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl animate-pulse">
                                    <div className="w-[245px] h-[236px] bg-gray-300 rounded-rounded_primary">
                                        <div className="bg-gray-300 w-[205px] h-[205px] mx-auto"></div>
                                    </div>
                                    <div className="space-y-3 mt-4">
                                        <div className="bg-gray-200 h-6 w-3/4"></div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                            <div className="bg-gray-200 h-6 w-1/4"></div>
                                        </div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                        <div className="bg-gray-200 h-4 w-[237px]"></div>
                                    </div>
                                    <div className="bg-gray-300 h-12 mt-m_primary w-full rounded-rounded_primary"></div>
                                </div>
                            </div>
                        )
                            :
                            (
                                <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-evenly lg:gap-y-gap_primary md:gap-gap_primary gap-gap_primary">
                                    {filteredProducts.map((product) => (
                                        <div key={product.id} className="product border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl hover:shadow-2xl">
                                            <div className="w-[245px] h-[236px] bg-activeNav rounded-rounded_primary">
                                                <img className="object-cover w-[205px] h-[205px] mx-auto" src={product.imageUrl} alt={product.name} />
                                            </div>
                                            <div className="space-y-3 mt-m_base">
                                                <p className="text-text_base font-bold">{product.name}</p>
                                                <div className="flex items-center text-text_base font-bold gap-x-4">
                                                    <p className="line-through text-footer_link">${product.finalPrice}</p>
                                                    <p>${product.price}</p>
                                                    <p className="text-discount">{product.discount}</p>
                                                </div>
                                                <p className="text-footer_link text-[15px] w-[237px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus.</p>
                                            </div>
                                            <button className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                                                <PiHandbagSimpleBold size={20} />
                                                <p className="font-semibold">Add to Cart</p>
                                            </button>
                                        </div>
                                    ))}

                                </div>
                            )
                    }

                </div>
            </div>


            <div className=" flex justify-center items-center md:pb-padding_lg pb-padding_md ">
                <ul className="flex space-x-3 justify-center w-fit mx-auto">
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0  bg-gray-300 w-9 h-8 rounded">

                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-black  text-sm font-bold text-[#333] w-9 h-8 rounded">
                        1
                    </li>
                    <li
                        className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link  text-sm font-bold  w-9 h-8 rounded">
                        2
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link  text-sm font-bold text-[#333] w-9 h-8 rounded">
                        ...
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link  text-sm font-bold text-[#333] w-9 h-8 rounded">
                        9
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0 border border-footer_link  text-sm font-bold text-[#333] w-9 h-8 rounded">
                        10
                    </li>
                    <li className="flex items-center justify-center cursor-not-allowed shrink-0  border  w-9 h-8 rounded border-footer_link">
                        <MdOutlineKeyboardArrowRight size={20} className="text-footer_link" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Products;
