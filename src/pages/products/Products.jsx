import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useProducts from "../../hooks/useProducts";

import ProductsSkeleton from "../../components/productsCardSkeleton/ProductsSkeleton";
import ProductsCard from "../../components/productsCard/ProductsCard";

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
                            <div>
                                <ProductsSkeleton />
                                <ProductsSkeleton />
                                <ProductsSkeleton />
                                <ProductsSkeleton />
                                <ProductsSkeleton />
                            </div>
                        )
                            :
                            (
                                <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-evenly lg:gap-y-gap_primary md:gap-gap_primary gap-gap_primary">
                                    {filteredProducts.map((product) => (
                                        <ProductsCard key={product.id} product={product} />
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
