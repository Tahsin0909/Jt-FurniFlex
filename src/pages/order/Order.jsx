import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import OrderCard from "../../components/orderCard/OrderCard";
import OrderSkeleton from "../../components/orderSkeleton/OrderSkeleton";

const Order = () => {
    const { cartsData, cartLoading } = useCart()
    console.log(cartsData);


    // Calculate total price
    const Price = cartsData.reduce((total, item) => {
        return total + (item.finalPrice * item.itemCount);
    }, 0);
    const totalPrice = parseFloat(Price).toFixed(2)

    return (
        <div className="md:py-padding_lg py-padding_md lg:px-padding_xl px-padding_base">
            <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-1 lg:gap-20 gap-gap_primary">
                <div className="lg:col-span-5 md:col-span-3">
                    <p className="text-text_xl font-semibold">An overview of your order</p>
                    {
                        cartLoading ? (
                            <div>
                                <OrderSkeleton />
                                <OrderSkeleton />
                                <OrderSkeleton />
                                <OrderSkeleton />
                            </div>

                        )
                            :
                            (
                                <div className="my-m_lg bg-activeNav rounded-rounded_secondary">
                                    {cartsData.length === 0 ? <p className="p-padding_lg">Please add some Products to the cart</p> : (
                                        cartsData.map(data => (
                                            <OrderCard key={data.id} data={data} />
                                        )))
                                    }

                                </div>
                            )
                    }

                </div>
                <div className="lg:col-span-3 md:col-span-2">
                    <p className="text-text_xl font-semibold">Order Details</p>
                    <div className="my-m_lg bg-activeNav rounded-rounded_secondary p-padding_md">
                        <div className="border-b px-padding_small pb-padding_md text-text_base font-semibold text-footer_link">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Estimated Tax</span>
                                <span>$ 0</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-text_xl font-bold mt-m_secondary">
                            <span>Total</span>
                            <span>${totalPrice}</span>
                        </div>
                    </div>
                    <Link to={'/checkout'} className="mt-m_primary active:scale-95 transition-all ease-out text-start p-padding_medium bg-black text-white rounded-rounded_primary w-full flex items-center justify-center gap-gap_base text-text_base">
                        <p className="font-semibold">Go to Checkout</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Order;