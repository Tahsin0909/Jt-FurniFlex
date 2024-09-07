import { useQuery } from "@tanstack/react-query";


const useProducts = () => {

    const { data: productsData = [], loading: productLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch('/fake.json')
            const data = res.json()
            return data;
        },
    });

    return { productsData, productLoading, refetch };
};

export default useProducts;