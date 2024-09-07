
const OrderSkeleton = () => {
    return (
        <div className="my-m_lg bg-activeNav rounded-rounded_secondary">
        <div className="border-b pb-padding_md animate-pulse">
            <div className="flex items-start gap-gap_base p-padding_small">
                {/* Empty Space for Item Quantity */}
                <div className="w-[88px] h-[44px]"></div>

                {/* Image Skeleton */}
                <div className="w-[88px] h-[88px] bg-gray-300 rounded-rounded_primary"></div>

                {/* Product Name Skeleton */}
                <div className="flex-1">
                    <div className="bg-gray-300 h-5 w-2/3 mb-2 rounded"></div>
                </div>
            </div>

            {/* Price Skeleton */}
            <div className="h-5 w-1/4 bg-gray-300 rounded mt-2 ml-auto pr-padding_small"></div>
        </div>
    </div>
    );
};

export default OrderSkeleton;