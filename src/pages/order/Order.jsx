import { RxCross1 } from "react-icons/rx";

const Order = () => {

    // increase and decrease 
    const handleIncrease = (data, increase) => {
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];
        const isExist = existingItems.find(Olddata => Olddata.id === data.id)
        const targetItem = existingItems.findIndex(obj => obj.id == data.id);
        if (targetItem !== -1) {
            existingItems.splice(targetItem, 1);

            // Save the updated array back to local storage
            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            // const newData = JSON.parse(localStorage.getItem('productDraft')) || [];
            // setCartData(newData)
            // toast.error('Product Already in Cart')
            console.log(isExist.itemsCount)
            isExist.itemsCount = isExist.itemsCount + increase
            console.log(isExist.itemsCount)
            existingItems.splice(targetItem, 0, isExist);  // Insert the updated item back at the same position
            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            // toast.success('Product upgraded Successfully in Cart')
            // const localStorageCart = JSON.parse(localStorage.getItem('productDraft')) || [];
            //   setCartCall(!cartCall);
        }
    }


    const handleDecrease = (data, decrease) => {
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];
        const isExist = existingItems.find(Olddata => Olddata.id === data.id)
        const targetItem = existingItems.findIndex(obj => obj.id == data.id);
        if (targetItem !== -1 && isExist.itemsCount > 1) {
            existingItems.splice(targetItem, 1);

            // Save the updated array back to local storage
            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            // const newData = JSON.parse(localStorage.getItem('productDraft')) || [];
            // setCartData(newData)
            // toast.error('Product Already in Cart')
            console.log(isExist.itemsCount)
            isExist.itemsCount = isExist.itemsCount - decrease
            console.log(isExist.itemsCount)
            existingItems.splice(targetItem, 0, isExist);  // Insert the updated item back at the same position
            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            // toast.success('Product upgraded Successfully in Cart')
            // const localStorageCart = JSON.parse(localStorage.getItem('productDraft')) || [];
            //   setCartCall(!cartCall);
        }

    }
    return (
        <div className="md:py-padding_lg py-padding_md lg:px-padding_xl">
            <div className="grid grid-cols-8 gap-20">
                <div className="col-span-5">
                    <p className="text-text_xl font-semibold">An overview of your order</p>
                    <div className="my-m_lg bg-activeNav rounded-rounded_secondary">
                        <div className=" px-padding_md pt-padding_md">
                            <div className="border-b pb-padding_md">
                                <div className="flex items-start gap-gap_base ">
                                    <div>
                                        <div className="flex justify-center items-center border w-fit rounded-rounded_primary shadow-md">
                                            <button onClick={() => handleDecrease(1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-l-rounded_primary">-</button>
                                            <div className="p-2 ">{0}</div>
                                            <button onClick={() => handleIncrease(1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-r-rounded_primary">+</button>
                                        </div>
                                    </div>
                                    <div className="w-[88px] h-[88px] bg-slate-300 rounded-rounded_primary p-padding_small">
                                        <img className="object-cover  w-[70px] h-[70px] mx-auto" src={"https://i.ibb.co.com/M8bdFTV/image-removebg-preview-24.png"} alt="" />
                                    </div>
                                    <p className="text-[#434343] font-bold flex-1">Rocking Chair</p>
                                    <button className="active:scale-90 transition-all ">
                                        <RxCross1 size={20} className="text-footer_link" />
                                    </button>
                                </div>
                                <p className="text-end font-bold">$299.00</p>
                            </div>
                        </div>
                        <div className=" px-padding_md pt-padding_md">
                            <div className="border-b pb-padding_md">
                                <div className="flex items-start gap-gap_base ">
                                    <div>
                                        <div className="flex justify-center items-center border w-fit rounded-rounded_primary shadow-md">
                                            <button onClick={() => handleDecrease(1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-l-rounded_primary">-</button>
                                            <div className="p-2 ">{0}</div>
                                            <button onClick={() => handleIncrease(1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-r-rounded_primary">+</button>
                                        </div>
                                    </div>
                                    <div className="w-[88px] h-[88px] bg-slate-300 rounded-rounded_primary p-padding_small">
                                        <img className="object-cover  w-[70px] h-[70px] mx-auto" src={"https://i.ibb.co.com/M8bdFTV/image-removebg-preview-24.png"} alt="" />
                                    </div>
                                    <p className="text-[#434343] font-bold flex-1">Rocking Chair</p>
                                    <button className="active:scale-90 transition-all ">
                                        <RxCross1 size={20} className="text-footer_link" />
                                    </button>
                                </div>
                                <p className="text-end font-bold">$299.00</p>
                            </div>
                        </div>
                        <div className=" px-padding_md pt-padding_md">
                            <div className="border-b pb-padding_md">
                                <div className="flex items-start gap-gap_base ">
                                    <div>
                                        <div className="flex justify-center items-center border w-fit rounded-rounded_primary shadow-md">
                                            <button onClick={() => handleDecrease(1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-l-rounded_primary">-</button>
                                            <div className="p-2 ">{0}</div>
                                            <button onClick={() => handleIncrease(1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-r-rounded_primary">+</button>
                                        </div>
                                    </div>
                                    <div className="w-[88px] h-[88px] bg-slate-300 rounded-rounded_primary p-padding_small">
                                        <img className="object-cover  w-[70px] h-[70px] mx-auto" src={"https://i.ibb.co.com/M8bdFTV/image-removebg-preview-24.png"} alt="" />
                                    </div>
                                    <p className="text-[#434343] font-bold flex-1">Rocking Chair</p>
                                    <button className="active:scale-90 transition-all ">
                                        <RxCross1 size={20} className="text-footer_link" />
                                    </button>
                                </div>
                                <p className="text-end font-bold">$299.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <p className="text-text_xl font-semibold">Order Details</p>
                    <div className="my-m_lg bg-activeNav rounded-rounded_secondary p-padding_md">
                        <div className="border-b px-padding_small pb-padding_md text-text_base font-semibold text-footer_link">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>$1072.00</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Estimated Tax</span>
                                <span>$-</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-text_xl font-bold mt-m_secondary">
                            <span>Total</span>
                            <span>$1071.00</span>
                        </div>
                    </div>
                    <button className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                        <p className="font-semibold">Go to Checkout</p>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Order;