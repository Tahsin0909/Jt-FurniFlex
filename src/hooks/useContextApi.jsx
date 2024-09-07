import { useContext } from "react";
import { AuthContext } from "../authProvider/ContextApi";



const useContextApi = () => {
    const authUtils = useContext(AuthContext)
    return authUtils;
};

export default useContextApi;