import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const CheckOut = () => {
    // State to store user inputs
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [number, setNumber] = useState(null);
    
    // React Hook Form for form validation
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        setName(data.name);
        setAddress(data.address);
        setNumber(data.number);

        // Show confirmation modal if all fields are filled
        if (data.name && data.address && data.number) {
            document.getElementById('orderConfirm').showModal();
        }
    };

    return (
        <div className="md:py-padding_lg py-padding_md lg:px-padding_xl px-padding_base">
            {/* Title */}
            <div>
                <h1 className="text-text_xl font-semibold text-center">SHOPPING CART</h1>
            </div>

            <div className="py-padding_base">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-gap_primary">
                        {/* Billing & Shipping Section */}
                        <div className="lg:col-span-2">
                            <div className="border-footer_link border"></div>
                            <h3 className='pt-padding_medium mb-m_primary font-bold'>BILLING & SHIPPING</h3>
                            
                            {/* Form Fields */}
                            <div className='space-y-5 pt-5'>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-4">
                                    {/* Name Input */}
                                    <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                        <label className="text-text_small text-gray-500">Full Name</label>
                                        <input
                                            {...register("name", { required: true })}
                                            type="text"
                                            placeholder="Enter your Full Name"
                                            className="focus:outline-none"
                                        />
                                        {/* Error Message */}
                                        {errors.name && <span className="text-error text-xs mt-m_small">Name field is required</span>}
                                    </div>

                                    {/* Phone Number Input */}
                                    <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                        <label className="text-text_small text-gray-500">Phone Number</label>
                                        <input
                                            {...register("number", { required: true })}
                                            type="text"
                                            placeholder="+8801XXXXXXXX"
                                            className="focus:outline-none"
                                        />
                                        {errors.number && <span className="text-error text-xs mt-m_small">Phone Number is required</span>}
                                    </div>

                                    {/* Address Input */}
                                    <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                        <label className="text-text_small text-gray-500">Your Address</label>
                                        <input
                                            {...register("address", { required: true })}
                                            type="text"
                                            placeholder="e.g: District, Thane, PO, Village"
                                            className="focus:outline-none"
                                        />
                                        {errors.address && <span className="text-error text-xs mt-m_small">Address is required</span>}
                                    </div>
                                </div>
                                
                                {/* Additional Information */}
                                <div>
                                    <h4 className='pt-8 mb-4 text-[18px] font-bold'>ADDITIONAL INFORMATION</h4>
                                    <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                        <label className="text-text_small text-gray-500">Notes</label>
                                        <textarea
                                            {...register("notes")}
                                            type="text"
                                            placeholder="Special Notes For Your Order"
                                            className="focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary Section */}
                        <div className="border-2 border-black p-[30px] mt-10 lg:mt-0 rounded-rounded_primary">
                            <h4 className='pt-[10px] mb-[8px] text-[18px] font-bold'>YOUR ORDER</h4>
                            {/* Order Items */}
                            <div>
                                <div className="flex items-center justify-between border-b-4 border-gray-300">
                                    <p className='text-text_lg font-bold p-[7px]'>PRODUCT</p>
                                    <p className='text-text_lg font-bold p-[7px]'>SUBTOTAL</p>
                                </div>
                                {/* Example Product */}
                                <div className="flex items-center justify-between border-b border-gray-300">
                                    <p className='text-sm py-[15px]'>Rocking Chair × 1</p>
                                    <p className='text-text_lg font-bold p-[7px]'>$1900</p>
                                </div>
                            </div>
                            {/* Total Price */}
                            <div className="flex items-center justify-between border-b border-gray-300">
                                <p className='text-[13.6px] py-[6.8px]'>Total</p>
                                <p className='text-text_lg font-bold p-[7px]'>2900৳</p>
                            </div>

                            {/* Payment Method */}
                            <div className="pt-3">
                                <p className='text-text_lg font-bold py-[7px]'>Cash on delivery</p>
                                <p className='text-[14px] mb-[7.4px]'>Pay with cash upon delivery.</p>
                            </div>
                            
                            {/* Place Order Button */}
                            <button className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                                <p className="font-semibold">Place Your Order</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Order Confirmation Modal */}
            <dialog id="orderConfirm">
                <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                        {/* Close Button */}
                        <button onClick={() => document.getElementById('orderConfirm').close()} className="w-full flex items-end justify-end">
                            <RxCross1 size={20} className="text-footer_link hover:text-error" />
                        </button>

                        {/* Success Message */}
                        <div className="my-8 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-14 shrink-0 fill-green-500 inline" viewBox="0 0 512 512">
                                {/* Success Icon */}
                                <path d="..." />
                            </svg>
                            <h4 className="text-xl text-gray-800 font-semibold mt-4">Order Placed Successfully!</h4>
                            
                            {/* Displaying User Info */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {/* Name and Phone Number */}
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center gap-1">
                                        <BsPerson size={20} />
                                        <p className="text-gray-700 font-medium">{name}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaPhoneAlt size={15} />
                                        <p className="text-gray-700 font-medium">{number}</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start justify-start gap-1 col-span-2 w-fit">
                                    <CiLocationOn size={20} className="flex-shrink-0" />
                                    <p className="text-gray-700 text-start font-medium break-words">{address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Got It Button */}
                        <button onClick={() => document.getElementById('orderConfirm').close()} className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                            <p className="font-semibold">Got It</p>
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CheckOut;
