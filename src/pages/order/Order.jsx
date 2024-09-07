import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import OrderCard from "../../components/orderCard/OrderCard";
import OrderSkeleton from "../../components/orderSkeleton/OrderSkeleton";

const Order = () => {
    const { cartsData, cartLoading } = useCart();  // Fetch cart data and loading state
    console.log(cartsData);

    // Calculate total price of all items in the cart
    const Price = cartsData.reduce((total, item) => {
        return total + (item.finalPrice * item.itemCount);  // Multiply item price by the quantity and accumulate
    }, 0);
    
    const totalPrice = parseFloat(Price).toFixed(2);  // Format the total price to 2 decimal places

    return (
        <div className="md:py-padding_lg py-padding_md lg:px-padding_xl px-padding_base">
            <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-1 lg:gap-20 gap-gap_primary">
                
                {/* Left Section: Order Overview */}
                <div className="lg:col-span-5 md:col-span-3">
                    <p className="text-text_xl font-semibold">An overview of your order</p>
                    
                    {/* Show loading skeleton while cart data is loading */}
                    {
                        cartLoading ? (
                            <div>
                                <OrderSkeleton />
                                <OrderSkeleton />
                                <OrderSkeleton />
                                <OrderSkeleton />
                            </div>
                        ) :
                        (
                            <div className="my-m_lg bg-activeNav rounded-rounded_secondary">
                                {/* Display message if cart is empty, otherwise show cart items */}
                                {cartsData.length === 0 ? <p className="p-padding_lg">Please add some Products to the cart</p> : (
                                    cartsData.map(data => (
                                        <OrderCard key={data.id} data={data} />  // Render each cart item as an OrderCard
                                    ))
                                )}
                            </div>
                        )
                    }
                </div>
                
                {/* Right Section: Order Details */}
                <div className="lg:col-span-3 md:col-span-2">
                    <p className="text-text_xl font-semibold">Order Details</p>
                    <div className="my-m_lg bg-activeNav rounded-rounded_secondary p-padding_md">
                        
                        {/* Order summary with subtotal, shipping, and tax */}
                        <div className="border-b px-padding_small pb-padding_md text-text_base font-semibold text-footer_link">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>${totalPrice}</span>  {/* Display subtotal */}
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Shipping</span>
                                <span>Free</span>  {/* Display shipping as free */}
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Estimated Tax</span>
                                <span>$ 0</span>  {/* No tax applied */}
                            </div>
                        </div>
                        
                        {/* Total price section */}
                        <div className="flex items-center justify-between text-text_xl font-bold mt-m_secondary">
                            <span>Total</span>
                            <span>${totalPrice}</span>  {/* Display the total price */}
                        </div>
                    </div>

                    {/* Checkout button */}
                    <Link to={'/checkout'} className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                        <p className="font-semibold">Go to Checkout</p>  {/* Navigate to checkout page */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Order;
