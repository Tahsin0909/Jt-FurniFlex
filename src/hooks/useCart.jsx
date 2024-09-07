import { useQuery } from "@tanstack/react-query";


const useCart = () => {

    const { data: cartsData = [], loading: cartLoading, refetch: cartRefetch } = useQuery({
        queryKey: ["cartData"],
        queryFn: async () => {
            const res = await JSON.parse(localStorage.getItem('productDraft')) || [];
            return res;
        },
    });

    return { cartsData, cartLoading, cartRefetch };
};

export default useCart;