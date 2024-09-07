/* eslint-disable react/prop-types */

import toast from "react-hot-toast"; // Importing toast notifications
import { PiHandbagSimpleBold } from "react-icons/pi"; // Importing shopping bag icon
import useCart from "../../hooks/useCart"; // Custom hook to manage cart operations

const ProductsCard = ({ product }) => {

    const { cartRefetch } = useCart(); // Destructuring cart refetch function from custom hook

    // Function to handle adding a product to the cart
    const handleCart = (data) => {
        // Retrieve existing cart items from local storage
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];
        
        // Check if the product already exists in the cart
        const isExist = existingItems.find(Olddata => Olddata.id === data.id);

        if (isExist) {
            // Show error notification if the product is already in the cart
            toast.error('Product already added in Cart');
        } else {
            // Add the new product to the cart
            const newItem = data;
            const updatedItems = [...existingItems, newItem]; // Combine old and new items
            localStorage.setItem('productDraft', JSON.stringify(updatedItems)); // Update local storage
            cartRefetch(); // Refetch the cart to update the UI
            toast.success('Product Added Successfully in Cart'); // Show success notification
        }
    };

    return (
        <div className="product border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl hover:shadow-2xl">
            {/* Product Image */}
            <div className="w-[245px] h-[236px] bg-activeNav rounded-rounded_primary">
                <img className="object-cover w-[205px] h-[205px] mx-auto" src={product.imageUrl} alt={product.name} />
            </div>

            {/* Product Info Section */}
            <div className="space-y-3 mt-m_base">
                <p className="text-text_base font-bold">{product.name}</p>
                <div className="flex items-center text-text_base font-bold gap-x-4">
                    <p className="line-through text-footer_link">${product.finalPrice}</p> {/* Original price */}
                    <p>${product.price}</p> {/* Discounted price */}
                    <p className="text-discount">{product.discount}</p> {/* Discount percentage */}
                </div>
                <p className="text-footer_link text-[15px] w-[237px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus.</p> {/* Short product description */}
            </div>

            {/* Add to Cart Button */}
            <button 
                onClick={() => handleCart(product)} 
                className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base"
            >
                <PiHandbagSimpleBold size={20} /> {/* Icon for Add to Cart */}
                <p className="font-semibold">Add to Cart</p>
            </button>
        </div>
    );
};

export default ProductsCard;
