/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";

const OrderCard = ({ data }) => {
    const { cartRefetch } = useCart();  // Fetches updated cart data

    // Handle increasing the item count
    const handleIncrease = (data, increase) => {
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];  // Retrieve existing cart items from localStorage
        const isExist = existingItems.find(OldData => OldData.id === data.id);  // Find the current item in the cart
        const targetItem = existingItems.findIndex(obj => obj.id == data.id);  // Get the index of the current item
        
        if (targetItem !== -1) {
            existingItems.splice(targetItem, 1);  // Remove the item
            localStorage.setItem('productDraft', JSON.stringify(existingItems));  // Update localStorage
            isExist.itemCount = isExist.itemCount + increase;  // Increase item count
            existingItems.splice(targetItem, 0, isExist);  // Reinsert the updated item
            localStorage.setItem('productDraft', JSON.stringify(existingItems));  // Save updated cart back to localStorage
            cartRefetch();  // Refresh cart data
        }
    };

    // Handle decreasing the item count
    const handleDecrease = (data, decrease) => {
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];  // Retrieve existing cart items
        const isExist = existingItems.find(OldData => OldData.id === data.id);  // Find the current item in the cart
        const targetItem = existingItems.findIndex(obj => obj.id == data.id);  // Get the index of the item
        
        if (targetItem !== -1 && isExist.itemCount > 1) {  // Only decrease if item count is greater than 1
            existingItems.splice(targetItem, 1);  // Remove the item from the cart
            localStorage.setItem('productDraft', JSON.stringify(existingItems));  // Update localStorage
            isExist.itemCount = isExist.itemCount - decrease;  // Decrease item count
            existingItems.splice(targetItem, 0, isExist);  // Reinsert the updated item
            localStorage.setItem('productDraft', JSON.stringify(existingItems));  // Save back to localStorage
            cartRefetch();  // Refresh cart data
        }
    };

    // Remove item from cart (localStorage)
    const removeItemFromLocalStorage = (id) => {
        const existingItems = JSON.parse(localStorage.getItem("productDraft")) || [];  // Get existing items from localStorage
        const updatedItems = existingItems.filter(item => item.id !== parseInt(id));  // Filter out the item to be removed
        localStorage.setItem("productDraft", JSON.stringify(updatedItems));  // Update localStorage with the filtered items
        cartRefetch();  // Refresh cart data
        toast.success("Remove Item Successfully");  // Display success toast message
    };

    return (
        <div className="px-padding_md pt-padding_md">
            <div className="border-b pb-padding_md">
                <div className="flex items-start gap-gap_base">
                    {/* Quantity controls */}
                    <div>
                        <div className="flex justify-center items-center border w-fit rounded-rounded_primary shadow-md">
                            <button 
                                onClick={() => handleDecrease(data, 1)} 
                                className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-l-rounded_primary">-
                            </button>
                            <div className="p-2">{data.itemCount}</div>
                            <button 
                                onClick={() => handleIncrease(data, 1)} 
                                className="py-padding_small px-padding_medium hover:bg-activeNav active:scale-90 transition-all rounded-r-rounded_primary">+
                            </button>
                        </div>
                    </div>
                    
                    {/* Item image */}
                    <div className="w-[88px] h-[88px] bg-slate-300 rounded-rounded_primary p-padding_small">
                        <img className="object-cover w-[70px] h-[70px] mx-auto" src={data.imageUrl} alt={data.name} />
                    </div>

                    {/* Item details */}
                    <p className="text-[#434343] font-bold flex-1">{data.name}</p>

                    {/* Remove item button */}
                    <button onClick={() => removeItemFromLocalStorage(data.id)} className="active:scale-90 transition-all">
                        <RxCross1 size={20} className="text-footer_link" />
                    </button>
                </div>
                
                {/* Price */}
                <p className="text-end font-bold">${data.finalPrice}</p>
            </div>
        </div>
    );
};

export default OrderCard;
