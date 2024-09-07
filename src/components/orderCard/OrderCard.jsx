/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";

const OrderCard = ({ data }) => {

    const {  cartRefetch } = useCart()
    // increase and decrease 
    const handleIncrease = (data, increase) => {
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];
        console.log(existingItems);
        const isExist = existingItems.find(OldData => OldData.id === data.id)
        console.log(isExist);
        const targetItem = existingItems.findIndex(obj => obj.id == data.id);
        console.log(targetItem);
        if (targetItem !== -1) {
            existingItems.splice(targetItem, 1);
            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            console.log(isExist.itemCount)
            isExist.itemCount = isExist.itemCount + increase
            console.log(isExist.itemCount)
            existingItems.splice(targetItem, 0, isExist);
            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            cartRefetch()
        }
    }


    const handleDecrease = (data, decrease) => {
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];
        const isExist = existingItems.find(OldData => OldData.id === data.id)
        const targetItem = existingItems.findIndex(obj => obj.id == data.id);
        if (targetItem !== -1 && isExist.itemCount > 1) {
            existingItems.splice(targetItem, 1);

            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            console.log(isExist.itemCount)
            isExist.itemCount = isExist.itemCount - decrease
            console.log(isExist.itemCount)
            existingItems.splice(targetItem, 0, isExist);
            localStorage.setItem('productDraft', JSON.stringify(existingItems));
            cartRefetch()
        }

    }

    const removeItemFromLocalStorage = (id) => {
        const existingItems =
            JSON.parse(localStorage.getItem("productDraft")) || [];
        const updatedItems = existingItems.filter(
            (item) => item.id !== parseInt(id)
        );
        localStorage.setItem("productDraft", JSON.stringify(updatedItems));
        cartRefetch()
        toast.success("Remove Item Successfully");
    };



    return (
        <div className=" px-padding_md pt-padding_md">
            <div className="border-b pb-padding_md">
                <div className="flex items-start gap-gap_base ">
                    <div>
                        <div className="flex justify-center items-center border w-fit rounded-rounded_primary shadow-md">
                            <button onClick={() => handleDecrease(data, 1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-l-rounded_primary">-</button>
                            <div className="p-2 ">{data.itemCount}</div>
                            <button onClick={() => handleIncrease(data, 1)} className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-r-rounded_primary">+</button>
                        </div>
                    </div>
                    <div className="w-[88px] h-[88px] bg-slate-300 rounded-rounded_primary p-padding_small">
                        <img className="object-cover  w-[70px] h-[70px] mx-auto" src={data.imageUrl} alt={data.name} />
                    </div>
                    <p className="text-[#434343] font-bold flex-1">{data.name}</p>
                    <button onClick={() => removeItemFromLocalStorage(data.id)} className="active:scale-90 transition-all ">
                        <RxCross1 size={20} className="text-footer_link" />
                    </button>
                </div>
                <p className="text-end font-bold">${data.finalPrice}</p>
            </div>
        </div>
    );
};

export default OrderCard;