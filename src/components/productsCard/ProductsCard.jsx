/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { PiHandbagSimpleBold } from "react-icons/pi";
import useCart from "../../hooks/useCart";

const ProductsCard = ({product}) => {

    const { cartRefetch } = useCart()
    const handleCart = (data) => {
        const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];
        const isExist = existingItems.find(Olddata => Olddata.id === data.id)
        if (isExist) {
            toast.error('Product added Successfully in Cart')
        }
        else {
            const newItem = data;
            const updatedItems = [...existingItems, newItem];
            localStorage.setItem('productDraft', JSON.stringify(updatedItems));
            cartRefetch()
            toast.success('Product Added Successfully in Cart')

        }
    }

    return (
        <div  className="product border w-[277px] h-[484px] p-padding_medium rounded-rounded_primary shadow-xl hover:shadow-2xl">
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
            <button onClick={() => handleCart(product)} className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                <PiHandbagSimpleBold size={20} />
                <p className="font-semibold">Add to Cart</p>
            </button>
        </div>
    );
};

export default ProductsCard;